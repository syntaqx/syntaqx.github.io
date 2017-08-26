# frozen_string_literal: true

source 'https://rubygems.org'

# This file manages which version of Jekyll is used to build and serve. Although
# For compatibility, all versions in this file are intended to be the same
# versions used by GitHub Pages: https://pages.github.com/versions/
#
# To install the version dependencies, simply run: `bundle install`. Then, once
# finished, you should run Jekyll via Bundle, like so:
#
#     bundle exec jekyll serve
#
# This will ensure development work will be deployable to production.
gem 'jekyll', '3.5.2'

# Since we're aiming for GitHub Pages compatibility, we'll use the
# `github-pages` gem provided by GitHub. In the event any dependencies used by
# them upgrades, our Gemfile will be out of date and make it obvious we need to
# ensure we're compatibile still.
gem 'github-pages', group: :jekyll_plugins

# Gems not provided from github-pages are additionally added here.
# Non-provided plugins
group :jekyll_plugins do
  # nil, for compatibility with github-pages
end

# Testing dependencies
group :test, :development do
  gem 'colorize'
  gem 'html-proofer'
  gem 'rake'
  gem 'rubocop'
end
