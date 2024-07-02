+++
title = "GitHub Actions & Secret Inputs"
description = "A simple solution to a missing feature in GitHub Actions"
date = "2024-07-02"
tags = ["github-actions", "github", "devops", "automation"]
+++


I've been using GitHub Actions as my primary CI & CD tool for a while now, and
I've been very happy with it. It's easy to use, reasonably flexible with the
way actions are created, and has a massive marketplace which makes things all
too easy to get what I need.

One of the features that I've been using a lot lately is [manually triggered][]
workflows, allowing me to create self-service workflows that can be triggered on
demand, saving us from repetitive tasks; one automation at a time.

[manually triggered]: https://docs.github.com/actions/using-workflows/manually-running-a-workflow

A simple example of these self-service workflow would be one that allows
engineers to update their own environnment variables for a service. The team can
simply go to our `ops` repositories Actions, and manually trigger the workflow
with the service name, environment, key, and value as inputs:


```yaml
name: Upsert Environment Variable

on:
  workflow_dispatch:
    inputs:
      service:
        description: 'Service Name'
        required: true
        type: choice
        options:
          - 'service-a'
          - 'service-b'
          - 'service-c'
      environment:
        description: 'Environment'
        required: true
        type: choice
        options:
          - 'staging'
          - 'production'
      key:
        description: 'Key'
        required: true
        type: string
      value:
        description: 'Value'
        required: true
        type: string

jobs:

  # .. omitted ..
```

And that's it! No more asking operations to update your environment variables.

> __Note:__ In a more ideal world, we could just "shift left" and repostories
> would be able to manage their own Kubernetes manifests, and update their own
> environment variables or ConfigMap. Unfortunately, we're not quite there yet.
> Depending on the service, updating an environment variable may be as simple as
> updating a secret in AWS Secrets Manager, or as complex as updating a file on
> an EC2 instance. This workflow allows us to abstract that complexity away from
> the engineers, and let them focus on what they do best: writing code.

Automation, done.

Except... not all environment variables are created equal.

## Secrets

In order for this workflow to be successful, we had to make sure that secret
values were not exposed in workflow logs, exposing the value to anyone with
access to the repository.. and defeating the win of self-service.

Luckily, GitHub supports [masking a value in a log][], so let's just mask the
input value and be done with it!

[masking a value in a log]: https://docs.github.com/actions/learn-github-actions/workflow-commands-for-github-actions#masking-a-value-in-a-log

### Failed Attempt

```yaml
- name: Mask secret value securely
  run: |
    echo "SECRET_VALUE=${{ github.event.inputs.secret_value }}" >> $GITHUB_ENV
    echo "::add-mask::${{ github.event.inputs.secret_value }}"
```

```sh
echo "SECRET_VALUE=DONT SHOW THE SECRET" >> $GITHUB_ENV
echo "::add-mask::DONT SHOW THE SECRET"
```

### ... and another

```yaml
  env:
    SECRET_KEY: ${{ github.event.inputs.key }}
    SECRET_VALUE: ${{ github.event.inputs.secret_value }}
  steps:
    - run: echo "::add-mask::$SECRET_VALUE"
```

```sh
echo "::add-mask::$SECRET_VALUE"
shell: /usr/bin/bash -e {0}
env:
  SECRET_KEY: my-secret-key
  SECRET_VALUE: SHHH IM SECRET
```

### ...and on and on and on

All in all, I spent probably 2 hours trying to figure out how to mask the input
value, but no matter what I did, the value would always be exposed in the logs.

## 1 Eternity Later

After a reasonable amount of trial and error, and so much searching, I came up
with a fairly straightforward solution that allowed me to have a dynamic input
without exposing the value until after it was masked. The solution?

> A simple one-time link that would provide the secret value workflow.

To initially test my theory, I added a very straightforward API to my personal
API that would behave like most secret sharing services, but without me having
to bother picking (or paying for) one:

- `POST https://api.syntaqx.com/secrets` - Create a new secret
- `GET https://api.syntaqx.com/secrets/{id}` - Retrieve a secret

> __Warning:__ While this API is real, it is onnly meant as a demonstration API
> and does not provide any real security or reliability. The values are stored
> in memory, the encryption is weak, and you should not use these endpoints for
> a real implementation. We ended up going with [Yopass](https://yopass.se/) for
> our final implementation, but this is a choose your own adventure game.

### Creating a secret

To make things easy, I created a simple `create-secret.sh` script that would
give me back a one-time link to retrieve the secret value:

{{< gist syntaqx ec8654ca396904624a2bb59659dbbb90 >}}

Then, I could simply run the workflow, and provide the `key` and `url` as
inputs:

```yaml
name: Upsert Secret Environment Variable

on:
  workflow_dispatch:
    inputs:
      key:
        description: 'Key'
        required: true
        type: string
      url:
        description: 'One-click Link (https://api.syntaqx.com/secrets/{id})'
        required: true
        type: string

jobs:

  upsert:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      -
        name: Retrieve the secret value
        id: secret
        run: |
          RESPONSE=$(curl -sL "${{ github.event.inputs.url }}" | jq -r '.secret')
          echo "::add-mask::$RESPONSE"
          echo "value=$RESPONSE" >> "$GITHUB_OUTPUT"
      -
        run: |
          echo "${{ github.event.inputs.key }}=${{ steps.secret.outputs.value }}"
```

Which surprisingly worked! The value was masked and never exposed in the logs!

```sh
SECRET_KEY=***
```

While this solution isn't perfect (I mean, I could always just echo `$RESPONSE`
_before_ I mask it if I was being malicious), assuming proper pull requests and
code reviews, this solution should be secure enough for my use case.

## Conclusion

While this solution isn't perfect (I mean, I could also just `echo $RESPONSE`
before I mask it), assuming proper pull requests and code reviews, this solution
should be secure enough for my use case.

Honestly, I'm pretty happy with the solution, but I'm not happy that I had to
come up with it. I would love to see GitHub support dynamic secrets in workflows
so that I don't have to jump through hoops to keep my secrets secret.

Until then, I'll keep using this solution, and hope that it helps someone else.

## Open Letter to GitHub

Please, support dynamic secrets in workflows.

```yaml
  workflow_dispatch:
    inputs:
      key:
        description: 'Key'
        required: true
        type: string
      value:
        description: 'Value'
        required: true
        type: secret
```

I know it's not just me asking.
