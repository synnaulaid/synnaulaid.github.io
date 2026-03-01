---
layout: base
title: Blog
permalink: /blog/
---

# Blog

{% for post in site.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p style="opacity:0.6;">{{ post.date | date: "%d %b %Y" }}</p>
{% endfor %}