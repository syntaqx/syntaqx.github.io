# frozen_string_literal: true

source 'https://rubygems.org'
ruby RUBY_VERSION

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

# Since plugins are disabled by GitHub Pages, we'll use the github-pages gem to
# bootstrap dependencies for setting up and maintaining a Jekyll environment in
# sync with the versions supported by GitHub Pages.
# https://pages.github.com/versions/
gem 'github-pages', group: :jekyll_plugins

# Custom jekyll_plugins Gems
group :jekyll_plugins do
  # null, compatibility with GitHub Pages is the goal.
  # Leaving for the future, if we ever have to deviate.
end

# Testing and development dependencies.
group :test, :development do
  gem 'colorize'
  gem 'html-proofer'
  gem 'rake'
  gem 'rubocop'
  gem 's3_website'
end
