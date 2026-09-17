---
layout: page
title: News
permalink: /news/
subtitle: Longer notes and announcements.
description: News and notes from Marios Papamichalis.
---

{% if site.posts.size > 0 %}
<ul class="archive">
  {% for post in site.posts %}
  <li>
    <span class="archive-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time></span>
    <span><a href="{{ post.url | relative_url }}">{{ post.title }}</a></span>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}

<h2>Short updates</h2>

<ul class="news">
  {% for item in site.data.news %}
  <li>
    <span class="news-date">{{ item.date }}</span>
    <p class="news-text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</p>
  </li>
  {% endfor %}
</ul>
