---
redirect_to: /blog/index.html
---

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