---
layout: post
title: Simple JavaScript & CSS Cachebusting
---

When a user first comes to a website their browser downloads and caches
resources referenced for later use. This happens so on subsequent page visits to
the website the user doesn't have to waste time downloading the same things over
and over, speeding up their browsing experience. This caching is generally a
benefit to a website owner, saving them bandwidth and improving user experience,
but what about when __you__ change those resources and need them to use the
*new* version?

## Introducing Cachebusting

Cachebusting is a fairly simple technique that tricks a users browser into
thinking a file, although named exactly the same, is actually a different file
(meaning no cache exists, and must be downloaded). Although fairly simple in
concept, it allows you to heavily cache your content while still forcing users
to update when necessary.

Take the following code including an external stylesheet:

```html
<link rel="stylesheet" href="/css/example.css">
```

Fairly common, right? Now, pretend that we've updated `example.css` and would
like every user to update. Simply provide a version, or timestamp, or some sort
of unique string to the end of your filename in the form of a
[query string](http://wikipedia.org/wiki/Query_string) and viola! A unique
filename the browser hasn't cached:

```html
<link rel="stylesheet" href="/css/example.css?v=1.0">
```

> The same thing can also be done for other resources, such as JavaScript.

Now, whenever you update a resource simple update the cachebuster value to
something new and your users experience will be updated when they come back.

```html
<link rel="stylesheet" href="/css/example.css?v=1.1">
```