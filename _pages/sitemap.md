---
layout: page
permalink: /sitemap/
title: "Sitemap"
excerpt: "An index of all the pages found on syntaqx.com"
sitemap: false
---

[sitemap]: {{ site.url }}/sitemap.xml

A hierarchical breakdown of all the sections and pages found on the site. For
all of you robots out there, you will probably prefer the [XML version][sitemap]
formatted for your crawling pleasure.

<h2>Pages</h2>
<ul>
{% for item in site.data.navigation.primary %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
{% endfor %}
{% for item in site.data.navigation.legal %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

<h2><a href="{{ site.url }}/articles/">Blog Articles</a></h2>
<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title | markdownify | remove: '<p>' | remove: '</p>' }}</a></li>
{% endfor %}
</ul>
