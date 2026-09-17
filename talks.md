---
layout: page
title: Talks
permalink: /talks/
subtitle: Conference and workshop presentations.
description: Conference and workshop presentations by Marios Papamichalis.
---

<ul class="talks">
  {% for t in site.data.talks %}
  <li class="talk">
    <div class="talk-head">
      <h3 class="talk-event">{{ t.event }}</h3>
      <span class="talk-year">{{ t.year }}</span>
    </div>
    <p class="talk-where">
      {{ t.where }}{% if t.when %} &middot; {{ t.when }}{% endif %}{% if t.theme %}<br>{{ t.theme }}{% endif %}
    </p>
    {% if t.items %}
    <ul class="talk-items">
      {% for i in t.items %}
      <li>
        <span class="kind">{{ i.kind }}</span>{{ i.title }}
        {% if i.authors %}<br><span class="talk-authors">{{ i.authors }}</span>{% endif %}
      </li>
      {% endfor %}
    </ul>
    {% endif %}
  </li>
  {% endfor %}
</ul>
