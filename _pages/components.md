---
title: Components
---

<ul>
{% for snippet in site.components %}
  <li><a href="{{ snippet.url | relative_url }}">{{ snippet.title }}</a></li>
{% endfor %}
</ul>
