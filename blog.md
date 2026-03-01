---
layout: base
title: Blog
permalink: /blog/
pagination:
  enabled: true
  per_page: 5
  permalink: /blog/:num/
---

# Blog
Total site.posts: {{ site.posts | size }}
Total paginator.posts: {{ paginator.posts | size }}

{% for post in paginator.posts %}
  <article style="margin-bottom: 2em;">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p style="opacity:0.6; font-size:0.9em;">{{ post.date | date: "%d %b %Y" }}</p>
    {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
    <a href="{{ post.url | relative_url }}">Read more →</a>
  </article>
{% endfor %}

<nav class="pagination" style="margin-top:2em;">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">« Previous</a>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span style="margin:0 0.3em; font-weight:bold;">{{ page }}</span>
    {% else %}
      <a href="{% if page == 1 %}/blog/{% else %}/blog/{{ page }}/{% endif %}" style="margin:0 0.3em;">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}">Next »</a>
  {% endif %}
</nav>