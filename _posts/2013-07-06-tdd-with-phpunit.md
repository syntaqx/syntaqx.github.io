---
layout: post
title: Test-Driven Development With PHPUnit
---

"Write it now, fix it later."  That's how programming is supposed to work,
right?  Maybe not.  Test-Driven Development (TDD) is a (somewhat) new way of
programming where you create tests before you write code.  When your code passes
the tests, you know you've finished.

## Advantages Of Test-Driven Development

Although test-driven development sounds clunky and unfun, it has a number of
benefits:

* It forces you to design your application before you code it.  Poor design
  almost always leads to missed deadlines and cost overruns---and the pressure
  from management which comes with them.
* Progress is easy to track.  You simply run your test suite and it tells you
  how many tests passed and how many failed.  Tests are a great basis for a
  teardown chart.
* Many bugs get detected early.  When a code change introduces a bug, your test
  suite may detect it automatically so you can fix it while everything is still
  fresh in your head.
* Taking fast bug checking a step further, anyone who can be trusted to run the
  test suite can be allowed to make commits to your next-release branch (or even
  your live branch) because you know they won't introduce any
  automatically-detectable bugs.  More than anything else, this enables fast and
  distributed development.

## How To Create Unit Testing Before You Have Code

At first, writing tests for non-existing code may seem difficult, but unit
testing most commonly works at the function level, so all you need to do is make
a list of the functions you plan to write and their expected functionality.

A simple way to think through writing unit tests if you've never used them
before is to ask yourself, "how would I test to see if the function is working
the way I expect with a print statement?"  If you can test the function with a
print statement, you can write a unit test.

Once you have a list of all of your planned functions plus an idea of the print
statements you would write to test them, you can start writing your tests.

## Why Use PHPUnit?

Of course, you could actually use print statements to test your code, but you
probably want to use a testing framework which helps you handle more complex
testing---like testing functions that rely on a database which isn't installed
on your testing system.

PHPUnit by Sebastian Bergmann is the leading unit testing framework for PHP. You
get to write your tests in PHP, so there's very little extra you need to learn.
Here's a sample test from the PHPUnit documentation which ensures PHP's
built-in array functions are working correctly:

```php
<?php

class StackTest extends PHPUnit_Framework_TestCase {

    public function testPushAndPop() {
        $stack = array();
        $this->assertEquals(0, count($stack));

        array_push($stack, 'foo');
        $this->assertEquals('foo', $stack[count($stack)-1]);
        $this->assertEquals(1, count($stack));

        $this->assertEquals('foo', array_pop($stack));
        $this->assertEquals(0, count($stack));
    }
}
```

You can see the benefit of using a unit testing framework compared to using
print statements by looking at the assertEquals function.  As you can probably
deduce, assertEquals compares the expected output of a function against the
actual output of that function.  When you run your unit tests, PHPUnit will
print details about any assertEquals test which fails. For example, if we
purposely break the test above, we might see the following output:

```bash
phpunit --verbose PHPUnit_Framework_Test
PHPUnit 3.7.0 by Sebastian Bergmann.

Time: 0 seconds, Memory: 5.00Mb

There was 1 failure:

1) DependencyFailureTest::testPushAndPop
Failed asserting that false is true.

FAILURES!
Tests: 1, Assertions: 1, Failures: 1, Skipped: 0.
```

PHPUnit makes it clear that the test failed and gives you enough information to
figure out what failed.  That's a lot better than letting the bug go unnoticed
for several days or weeks until some unsuspecting user discovers it.

To learn how to start using PHPUnit in your project, I highly recommend that you
check out [PHPUnit's excellent documentation](http://phpunit.de/manual/current/en/index.html).
