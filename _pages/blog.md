---
title: Blog
---

{% if site.posts == 0 %}
  <p>I really should write a blog post one of these days.</p>
{% else %}
  {% for post in site.posts %}
    <a href="{{ post.url }}">
      <h2>{{ post.title }}</h2>
      <p>{{ post.date | date_to_string }}</p>
    </a>
  {% endfor %}
{% endif %}
