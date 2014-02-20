---
layout: post
title: Composer Simplifies PHP Package Management
---

Are you tired of adding third-party PHP packages directly into your
source repository because PHP doesn't have any easy way to automatically
install the correct version of a package on your various servers?  Do
you wish PHP had a package management system which was as easy to use as
apt-get for Ubuntu? Thanks to Nils Adermann and Jordi Boggiano, PHP now
has that system--it's called [Composer.](http://getcomposer.org/)

Composer is easier to use than PEAR and more general than any specific
framework, so it will work for almost any project.  And it takes less
than ten minutes to switch your existing project to composer so that you
never need to manually add, upgrade, and commit third-party packages to
your own repository.

## Installing Composer

You can install composer anywhere on your system.  The normal places are
within your project repository or somewhere in your system `$PATH`.
Start by downloading and running the installation script:

    curl -s http://getcomposer.org/installer | php

This will create a `composer.phar` script in the current directory.  Running
it without any options will print a help screen:

    php composer.phar

If you want to run it like any other Unix command, move it to a
directory in your `$PATH` and set the appropriate permissions:

    sudo install -o root -g root \
        -m 0755 composer.phar /usr/local/bin/composer

If you don't install it as a system command, change all references to
the `composer` executable in the rest of this article to `php
composer.phar`.

## Configuring Composer With Your Packages

Go to the [Composer package archive](https://packagist.org/) and make a
list of the packages and package versions your project depends upon.
For example:

* kisma/kisma version 0.1.1

* hypercharge/hypercharge-php version 1.24.2

* monolog/monolog version 1.6.0

Use this information to create a `composer.json` file in the top-level
directory of your project repository. Here is a sample:

    {
        "require": {
            "kisma/kisma": "0.1.1",
            "hypercharge/hypercharge-php": "1.24.2",
            "monolog/monolog": "1.6.0"
        },
    }

Note that you can also use version number globs if you don't think
you'll break any dependencies on minor upgrades.  For example, you could
record monolog's version as "1.6.*".

## Installing Packages With Composer

To install the packages for your project, make sure you're in the same
directory as the `composer.json` file and run `composer`.  (Or use
`php composer.phar`.)

Composer will download the packages you defined in the JSON into a folder in the
current directory named `vendors`.  So, for example, monolog will be
installed into the following directory:

    vendors/monolog/monolog

Composer does include options to let you specify where to place package
files if you don't want to rewrite any of your includes.

## PRS-0-Compliant Autoloading

Composer provides its own autoloading script so you don't need to
manually cobble something together.  The script is `vendors/autoload.php`
so you can simply add the following line to your scripts:

    include_once './vendors/autoload.php';

Now you can access resources using their PRS-0 names, which is usually
`\Vendor\(Namespace\)Class`.

## Updating Packages With Composer

The chief benefit of composer is quick package updating with a rollback
ability.  Let's say a new monolog package is released.  You can quickly
edit your `composer.json` file to allow upgrading to the new release and
run the following command:

    composer update

If you discover the new package is incompatible with your current
code--and you don't have time to fix it right now--you can simply
revert the `composer.json` file to its previous state, remove the
`vendors/monolog` directory, and re-run `composer install`.

And, of course, it's easy to add Composer into your `upgrade.php` script
so every server which runs your software can automatically download and
install updated packages when you push a new `composer.json` file to
your release branch.  That's a huge step forward for automatic upgrades
in PHP.

