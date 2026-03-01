---
layout: base
title: Blog
permalink: /blog/
pagination:
  enabled: true
---

# Blog

{% for post in paginator.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p style="opacity:0.6;">{{ post.date | date: "%d %b %Y" }}</p>
{% endfor %}

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">Previous</a>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span>{{ page }}</span>
    {% else %}
      <a href="{{ paginator.paginate_path | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}">Next</a>
  {% endif %}
</div>