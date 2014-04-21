---
layout: post
title: Easy Internet Explorer Support
---

Internet Explorer is the bane of any web developer's programming experience.
Microsoft has certainly been working towards providing a progressive experience
to their users with the newer versions, but the fact remains that while modern
versions are starting to catch up to competitors, older versions are still
relatively popular (particularly in developing countries).

The good news? The following projects allow your site to quickly and somewhat
magically work better in Microsoft's flagship nuisance.

## [html5shiv](https://code.google.com/p/html5shiv/)

    <!--[if lt IE 9]>
    <script src="libs/html5shiv.js"></script>
    <![endif]-->

HTML5shiv creates HTML5 elements like `main`, `header`, `footer`, and so on via
JavaScript. Somehow creating said elements via JavaScript communicates that they
are stylable. Understanding the paradox of why it works could take days, but
does it really matter? This is a must-have on all websites.

## Conditional `<html>` comments

    <!DOCTYPE html>
    <!--[if lt IE 7 ]> <html class="ie6" lang="en"> <![endif]-->
    <!--[if IE 7 ]>    <html class="ie7" lang="en"> <![endif]-->
    <!--[if IE 8 ]>    <html class="ie8" lang="en"> <![endif]-->
    <!--[if IE 9 ]>    <html class="ie9" lang="en"> <![endif]-->
    <!--[if (gt IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->

This is quite possibly the ugliest set of conditional comments you'll ever see,
but ugly or not, this code works exactly as intended.

Your main benefit of using conditional targeting is the removal of JavaScript
from the equation. You don't have to wait for the file to load, you don't need
to wait for the JavaScript interpreter to execute anything, and you
__especially__ don't need to include additional weight of a library. Your styles
are defined classes and are immediately enacted, and your users won't see a
flash of unstyled content.

## [Modernizr](http://modernizr.com/)

    <script src="libs/modernizr.js"></script>

Modernizr is a JavaScipt library that detects HTML5 and CSS3 features in the
user's browser. This is done by adding various classes to your `html` element
allowing you to conditionally target specific behaviors in your stylesheets.

Using Modernizr is useful even outside of Internet Explorer as it allows you to
target a browser based on features that exist (or don't) and act accordingly. It
even comes (optionally) pre-packaged with html5shiv.

## [selectivizr.js](http://selectivizr.com/)

    <!--[if lte IE 8]>
    <script src="libs/selectivizr.js"></script>
    <![endif]-->

Selectivizr is a particularly amazing resource that polyfills tons of
unsupported CSS selectors and properties (including `:last-child`!). It's
amazingly easy to plug-and-play, and you might be surprised how easy it is to
make cross-browser styles when you're not missing half of your toolkit.

## [PIE](http://css3pie.com/)

    #element {
      /* your CSS rules, like `border-radius`, `box-shadow`, etc. */
      behavior: url(PIE.htc);
    }

PIE (Progressive Internet Explorer) is an IE attached behavior which, when
applied to an element, allows IE 6-9 to recognize and display a number of CSS3
properties. To make things more performant, it actually doesn't parse your
styles outright, but instead asks you to add a `behavior` rule to your element
(as shown above).

At the time of writing this post, PIE has either full or partial support for
the following features:

* border-radius
* box-shadow
* border-image
* multiple background images
* linear-gradient as background image

Other features such as radial gradients, multiple box shadow, and plenty of bug
fixes are currently in development.

## [background-size-polyfill](https://github.com/louisremi/background-size-polyfill)

    .selector {
      background-size: cover;
      -ms-behavior: url(backgroundsize.min.htc);
    }

Another one of the (many) functionalities Internet Explorer lacks is the
elegance of `background-size: cover` and `background-size: contain`. This simple
polyfill provides your users with these attributes in the easiest way possible.

- - -

There are many other tools out there to help you with the standardization and
modernization of Internet Explorer. I've found that using at *least* these will
give your users a better experience and remove a lot of the headaches associated
to web development.

For a much more exhaustive list of libraries, you might want to check out
Modernizr's wiki page: [HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills).