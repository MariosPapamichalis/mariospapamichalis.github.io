---
layout: page
title: Publications
permalink: /publications/
subtitle: Peer-reviewed articles, manuscripts under review, and ongoing work.
description: Publications and working papers of Marios Papamichalis.
---

<p class="section-note">
  See also <a href="{{ site.author.scholar }}" rel="noopener">Google Scholar</a>{% if site.author.arxiv != "" %} and <a href="{{ site.author.arxiv }}" rel="noopener">arXiv</a>{% endif %}.
</p>

## Accepted, in press, and published

{% include pub-list.html items=site.data.publications.published %}

## Under review and under revision

{% include pub-list.html items=site.data.publications.review %}

## Working papers and ongoing projects

{% include pub-list.html items=site.data.publications.working %}
