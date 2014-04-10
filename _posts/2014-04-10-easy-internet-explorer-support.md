---
layout: post
title: Easy Internet Explorer Support
---

Internet Explorer is the bane of any web developers programming experience.
Microsoft has certainly been working towards providing a progressive experience
to their users with the newer versions, but the fact remains that while modern
versions are starting to catch up to competitors, older versions are still
relatively popular (particularly in developing countries).

The good news? The following projects allow your site to quickly and somewhat
magically work better in Microsoft's flagship nuisance.

## [html5shiv](https://code.google.com/p/html5shiv/)

    <!--[if lt IE 9]>
    <script src="dist/html5shiv.js"></script>
    <![endif]-->

HTML5shiv creates HTML5 elements like `main`, `header`, `footer`, and so on via
JavaScript. Somehow creating said elements via JavaScript communicates that they
are stylable. Understanding the paradox of why it works could take days, but
does it really matter? This is a must-have on all websites.

## [selectivizr.js](http://selectivizr.com/)

    <!--[if lte IE 8]>
    <script src="js/libs/selectivizr.js"></script>
    <![endif]-->

Selectivizr is a particular amazing resource that polyfills tons of unsupported
CSS selectors and properties (including `:last-child`!). It's amazingly easy to
plug-and-play, and you might be surprised how easy it is to make cross-browser
styles when you're not missing half of your toolkit.

## Conditional `<html>` comments

    <!DOCTYPE html>
    <!--[if lt IE 7 ]> <html class="ie6" lang="en"> <![endif]-->
    <!--[if IE 7 ]>    <html class="ie7" lang="en"> <![endif]-->
    <!--[if IE 8 ]>    <html class="ie8" lang="en"> <![endif]-->
    <!--[if IE 9 ]>    <html class="ie9" lang="en"> <![endif]-->
    <!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->

The is quite possibly the ugliest set of conditional comments you'll ever see,
but ugly or not, this code works exactly as intended.

Your main benefit of using conditional targeting is the removal of JavaScript
from the equation. You don't have to wait for the file to load, you don't need
to wait for the JavaScript interpreter to execute anything, and you
__especially__ don't need to include additional weight of a library. Your styles
are defined classes are immediately enacted, and your users won't see a flash of
unstyled content.