---
layout: base
title: Blog
permalink: /blog/
---

# Blog

{% for post in site.posts %}
  <article style="margin-bottom: 2em;">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p style="opacity:0.6; font-size:0.9em;">{{ post.date | date: "%d %b %Y" }}</p>
  </article>
{% endfor %}