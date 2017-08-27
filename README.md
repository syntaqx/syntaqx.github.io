# syntaqx

[![Build Status](https://travis-ci.org/syntaqx/syntaqx.github.io.svg?branch=master)](https://travis-ci.org/syntaqx/syntaqx.github.io)
[![license](https://img.shields.io/github/license/syntaqx/syntaqx.github.io.svg)](https://github.com/syntaqx/syntaqx.github.io)

[LICENSE]: ./LICENSE

See it live on https://syntaqx.com/

## Requirements

* [Ruby](https://www.ruby-lang.org/) 2.4.0
* [Bundler](http://bundler.io/) > 1.14

> __Note:__ Once you have Ruby installed, it is recommended to keep your gems as
> up to date as possible. For example, rather than version match Bundler, the
> preferred option is that you simply run `gem bundler update`

## Setup

Assuming your environment meets all of the system requirements, you should
simply be able to run:

```sh
$ make install
```

This will install all required gems to the projects path, ensuring your
environment is unaffected by this projects version dependencies.

## Getting Started

You can start a local development server by simply running:

```sh
$ make serve
```

## License

This is an open source project is available under the terms of the
[MIT license][LICENSE].
