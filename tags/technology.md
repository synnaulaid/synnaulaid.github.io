---
layout: base
title: Technology
tag: technology
permalink: /tags/technology/
---

{% assign posts = site.tags[page.tag] %}

<h1>Tag: {{ page.tag }}</h1> 
<div class="tags">
<b>- <a href="/tags">All tags</a></b>
<ul> 
  {% for post in posts %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a> - <span style="opacity:0.6; font-size:0.9em;">{{ post.date | date: "%d %b %Y" }}</span>
    </li>
  {% endfor %}
</ul>
</div>


