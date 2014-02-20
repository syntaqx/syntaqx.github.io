---
layout: post
title: Upgrading To PHP 5.5
---

PHP 5.5 introduces several new features without (hopefully) deprecating
any features you probably use, so upgrading should be a relatively
painless procedure. Before we look at the exact steps to upgrade on
Ubuntu Linux, let's look at some of the new features in PHP 5.5.

## What's New In PHP 5.5

For a complete list of significant changes, check the [PHP
NEWS](https://github.com/php/php-src/blob/php-5.5.0alpha1/NEWS) file in
your release.  Here's what I think you'll care about the most:

* New functions which simplify password hashing.  Lazy programmers who
have missed out on the security benefits of password hashing no longer
have any excuse to use plain text passwords.  Here's a simple example
from the [PHP documentation](http://php.net/manual/en/function.password-hash.php)
which illustrates how simple the new API is to use:

        echo password_hash("rasmuslerdorf", PASSWORD_DEFAULT)."\n";
        if (password_verify('rasmuslerdorf', $hash)) {
            echo 'Password is valid!';
        } else {
            echo 'Invalid password.';
        }

* You can now use list() in foreach() to save a little bit of typing
and, more importantly, simplify your code.  Here's an example from the
[PHP Wiki](https://wiki.php.net/rfc/foreachlist) of how you can now write a simple loop:

        $users = array(
            array('Foo', 'Bar'),
            array('Baz', 'Qux'),
        );
        foreach ($users as list($firstName, $lastName)) {
            echo "First name: $firstName, last name: $lastName. ";
        }

* empty() can now accept non-variable arguments, which can make your
code more readable when you want to test a function which returns an
array or other data.


## Getting PHP 5.5 For Ubuntu

As I write this in July 2013, PHP 5.5 is not yet available for Ubuntu
from an Ubuntu repository.  I also can't find a Personal Package Archive
(PPA) which contains 5.5 and its dependencies, so the only way to get it for
now is to build it yourself.

Building your own packages for a production server is a bad idea unless
you have a paid team prepared to rebuild PHP every time a security
update comes out.  But compiling PHP 5.5 for a test box (or virtual
machine) so you can prepare your code now for a later update is a good
idea.

Note: if you're installing on a new computer or virtual machine just for
PHP 5.5, you may want to try Debian Unstable (Sid) or another Linux
distribution which already includes PHP 5.5.

You want to start out by installing all of the packages you need to run
your project, such as a webserver and database.  You know what you need
and you probably already have an install script, so I won't tell you
what to do.

Next you need a C compiler and some other core software building
tools---the good old GNU toolchain.  To get them on Ubuntu, simply type:

    sudo apt-get install build-essential

PHP depends on various system software; you can install most of these
dependencies automatically by running the following command which will
install the build dependencies for the version of PHP 5 on your current
version of Ubuntu (which will probably be PHP 5.3 or PHP 5.4):

    sudo apt-get build-dep php5

Now you need to download the PHP 5.5 archive from
[PHP.net](http://php.net) and untar it. PHP has lots of configuration
options you can set---the options you will care about the most are what
database backends to use. To see all of the available options, change
directory (cd) into the PHP source code directory you untarred and run
the following command:

    ./configure --help

Choose your options and then run configure:

    ./configure [your options]

Configure will tell you if you have any missing dependencies.  If you
use a recent version of Ubuntu and ran the build-dep command mentioned
earlier, you should be ok.  After configure completes successfully, build
PHP 5.5 (which will take a few minutes) and install it:

    make
    sudo make install

If you discover you forgot an important option to configure---for
example, you didn't include the right DBI---simply re-run configure,
make, and sudo make install.

Again, I recommend against using a home-built PHP on a production
server, but using it on your workstation or test box will be just fine.
(And, hopefully, Ubuntu will give us an official PHP 5.5 package to play
with soon.)