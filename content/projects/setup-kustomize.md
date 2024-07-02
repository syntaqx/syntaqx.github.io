+++
date = "2023-04-23"
title = "setup-kustomize"
tags = ["github-action", "github-actions", "kustomize"]
link = "https://github.com/syntaqx/setup-kustomize"
comment = false
+++

<!-- more -->

`setup-kustomize` is a GitHub Action to download and install
[kustomize](https://kustomize.io/), and adding it to your `$PATH`:

```yaml
steps:
  - uses: syntaqx/setup-kustomize@v1
  - run: kustomize version
```

```yaml
steps:
  - uses: syntaqx/setup-kustomize@v1
    with:
      kustomize-version: 5.0.1
  - run: kustomize version
```

[setup-kustomize on github](https://github.com/syntaqx/setup-kustomize)


