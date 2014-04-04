---
layout: post
title: Removing Unused CSS
---
So you've just finished adding a new feature to your latest application. You've
recieved your rush of gratification seeing everything go live and all of your
tests prove you're the bug-free programmer you've always thought you were. So,
now what?

Remove stuff you don't need! This could be as simple as removing lines of code,
images, various unused dependencies, or rewriting that not-so-perfect code you
know you wrote. Okay, all of those are easy enough: run your images through
ImageOptim, refactor the code, but what now? Wouldn't it be amazing if you could
find all of the unused CSS in your project and get rid of it? There is! It's
called [uncss](https://github.com/giakki/uncss), a NodeJS project that works
quite beautifully.

## Install It

We're using NodeJS here, launch up NPM and install it globally.

```
npm install -g uncss
```

## Basic Usage

```
uncss http://syntaqx.com > styles.css
```

The output of this simple command is a new stylesheet containing only the CSS
rules you actually used, removing all of those you didn't.

## How it Works

Well, simply put, __uncss__ will execute the following sequence of events:

* Load HTML files via [PhantomJS](https://github.com/Obvious/phantomjs) and execute JavaScript
* Extract used stylesheets from the resulting HTML
* Concatenate those stylesheets and parse the rules using [css-parse](https://github.com/reworkcss/css)
* Filter out selectors using `document.querySelector` not found in the CSS files
* Convert the remaining rules back into CSS

And holy crap, you just saved yourself hours upon hours of manual trimming.

## Getting Fancy

Given we're working with NodeJS, you can also take advantage of __uncss__ using
its JavaScript API. Something like this?

```
var uncss = require('uncss')

var files = ['an', 'array', 'of', 'files']
var options = {
  ignore:      ['#really', '.important', /rules\-[0-9]+/]
  media:       ['(min-width: 700px) handheld and (orientation: landscape)'],
  csspath:     '../public/css/',
  raw:          'h1 { color: green }',
  stylesheets:  ['libs/bootstrap/3.0.0/css/bootstrap.css', 'src/public/css/main.css'],
  ignoreSheets: [/fonts.googleapis/],
  urls:         ['http://localhost:4000/some-page', '...'], // Deprecated
  timeout:      1000,
  htmlroot:     'public'
}

uncss(files, options, function (error, output) {
  console.log(output)
})

/* Or, without options? */
uncss(files, function (error, output) {
  console.log(output)
})

/* Or just give me dat raw HTML */
var raw_html = '<html>...</html>'

uncss(raw_html, options, function (error, output) {
  console.log(output)
})
```

- - -

It's unfortunate how necessary a tool like this is, especially for projects with
years of additions, maintenance, and removal of styles (probably from multiple
developers). The excess CSS builds up and costs your users bandwidth (and more
importantly, slow down your site). Elimination of this dead code is important.

Give it a try! You'll be surprised how easy it is to use, further automating
your maintenance schedule and keeping your code clean and performant.