---
layout: page
title: Teaching
permalink: /teaching/
subtitle: Philosophy, record, and courses I am prepared to teach.
description: Teaching philosophy, teaching record, and course interests of Marios Papamichalis.
---

Teaching is central to my academic identity. It is where abstract ideas move from intangible
concepts to understanding and application. The recurring question in my classes is simple:
what generated these data, and what assumptions make our model a credible explanation of
them? Across teaching assistantships at University College London and Purdue University,
graduate-course support at Temple University, a guest lecture at the Wharton School, and
research mentoring at Yale, my aim is to build students' technical competence together with
their judgement about how to question, how to find answers, and how to communicate results
responsibly.

<p><a class="button" href="{{ '/files/Teaching_Statement.pdf' | relative_url }}">Teaching statement (PDF)</a></p>

## How I teach

I teach with a simple routine. First I begin with a question. Next I build intuition,
articulate assumptions, and choose methods that match them. Finally I interpret results with
equal attention to what worked, what failed, and why. This structure helps students see that
methodology is not an end in itself. It is a disciplined way of turning a substantive
question into an answer that others can scrutinize and trust.

In practice I pair each abstract object with a concrete phenomenon, then build the theory
using language that makes the phenomenon precise. In UCL's *Probability and Statistics II*,
for example, I introduced distributions by contrasting patterns students can see. Heights,
measured with noise, concentrate around a typical value, which motivates the normal model.
Social-network degree counts and rare extremes such as wildfire sizes produce many small
values and a few very large ones, which motivates heavy-tailed behaviour. Only after students
had articulated why these shapes differ did we formalize the mathematics.

Three prerequisites organize how I prepare a course.

**Communication.** I link theory to practice and use real-world examples to anchor
abstraction, drawing examples from different domains so that students with different
backgrounds can each find an entry point.

**Engagement.** Students are often reluctant to speak if they feel pressure to already know
the answer. I work to create a relaxed atmosphere by encouraging questions and by saying
plainly that a student who asks a question has performed a service for the whole class.

**Practice.** I use a mix of written assignments, team assignments, and presentations,
together with labs in R and Python that mirror contemporary workflows and require
reproducibility, so that computation is assessed as part of the argument.

## Mentoring

I train students to replace the phrase "it is not working" with a diagnosis: which assumption
is violated, where the identifying argument breaks, which diagnostic is misspecified, or what
computational choice is causing the instability. Concretely, I meet students on a fixed
schedule, I ask them to write down the estimand before they write code, and I expect every
analysis to be reproducible by someone else in the group.

## Teaching record

<ul class="courses">
  {% for c in site.data.teaching %}
  <li class="course">
    <div class="course-head">
      <h3 class="course-name">{{ c.course }}</h3>
      <span class="course-when">{{ c.period }}</span>
    </div>
    <p class="course-role">{{ c.role }} &middot; {{ c.institution }}</p>
    {% if c.detail %}<p class="course-detail">{{ c.detail }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>

## Courses I am prepared to teach

Applied and intermediate statistical methods for education and social science research;
measurement and latent variable models; multilevel and longitudinal data analysis; causal
inference and evaluation methods; Bayesian statistics; statistical computing and simulation;
machine learning for research applications.

I would also like to develop a graduate elective on statistical methods for social network
data, covering study design and boundary specification, measurement error in self-reported
ties, descriptive and model-based analysis, networks as mediators and as outcomes, and causal
inference when units interfere with one another. Coursework would use real data from field
studies, including the intervention data from my own research, so that students see the full
path from a design decision to a defensible conclusion.
