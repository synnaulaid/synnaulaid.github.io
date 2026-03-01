---
layout: base
title: Blog
permalink: /blog/
---

# Blog

Total posts: {{ site.posts | size }}

{% for post in site.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p style="opacity:0.6;">{{ post.date | date: "%d %b %Y" }}</p>
{% endfor %}