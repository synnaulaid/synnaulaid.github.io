---
layout: base
title: Blog
paginate: true
paginate_path: "/blog/page:num/"
---

# Blog

{% for post in paginator.posts %}
  <article style="margin-bottom: 2em;">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p style="opacity:0.6; font-size:0.9em;">{{ post.date | date: "%d %b %Y" }}</p>
  </article>
{% endfor %}

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="previous">Previous</a>
  {% else %}
    <span class="previous disabled">Previous</span>
  {% endif %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="next">Next</a>
  {% else %}
    <span class="next disabled">Next</span>
  {% endif %}
</div>