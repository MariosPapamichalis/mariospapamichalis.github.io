---
layout: page
title: Teaching
permalink: /teaching/
subtitle: Approach, record, and courses I am prepared to teach.
description: Teaching approach, mentoring, teaching record, and course interests of Marios Papamichalis.
---

Two questions run through every course I teach: what process generated these
data, and what assumptions make a model a credible account of that process?
Students who can answer both can adapt a method to a problem they have never
seen. Students who cannot are following a procedure, and my aim is to move every
student from the second group to the first.

<p><a class="button" href="{{ '/files/Teaching_Statement.pdf' | relative_url }}">Teaching statement (PDF)</a></p>

## How I teach

Every topic follows the same arc. I start with a question, build intuition,
state the assumptions, and choose a method that fits them. Then we interpret the
result, giving as much attention to what failed as to what worked. I often show a
method breaking before I present the theorem behind it, because a student who
has watched something fail arrives at the theory with a question it answers.

Two mentors shaped this approach. Nicholas Christakis taught me to begin with the
system that produced the data, including its mechanisms, constraints and context.
Edoardo Airoldi taught me to make the logic of inference explicit: state the
assumptions, reason from them, and test the model with diagnostics, sensitivity
analysis and honest statements of uncertainty.

A concrete example: in UCL's *Probability and Statistics II*, I introduced
distributions through patterns students could see before any formula. Heights
measured with noise cluster around a typical value, which motivates the normal
model. Friendship counts in a social network, or the sizes of wildfires, produce
many small values and a few very large ones, which motivates heavy tails. Only
after students could explain why the shapes differ did we derive moments and
make the assumptions explicit. The cohort came from several degree programmes
with very uneven mathematical preparation, and that sequencing is what made the
course work for all of them.

## A course that works for every student

Students arrive with different preparation and different reasons for being in
the room. A few practices make a course work for all of them without lowering
what anyone is asked to do.

- **I state the unwritten rules.** What office hours are for, what a good
  question looks like, how to read a paper, how much struggle is normal before
  asking for help, and what the grading actually rewards. Having studied and
  worked in Greece, the United Kingdom and the United States, I have met enough
  unstated expectations to know how much this helps.
- **I offer more than one way into each idea.** Every core concept gets an
  intuitive version, a formal version, a picture and a computational version,
  and students are asked to connect their route to the others.
- **I scaffold computing.** Starter code, structured labs and worked examples in
  R and Python keep the effort on the statistics rather than on setup.
- **I give a full practice exam.** Each exam is preceded by a mock in the same
  format, returned with feedback and carrying no weight, so that familiarity with
  exams is not what separates students.

## AI tools in my courses

I treat learning and assessment differently. For learning, AI tools are welcome
on problem sets, reading, debugging and projects, because directing a model and
catching its mistakes is now part of technical work. I ask students to disclose
what they used and to be able to explain every line they submit. For assessment,
AI tools have no role: exams are written individually, on paper and in fixed
time, because that is the only reliable way to measure what a student can do
unaided.

## Mentoring and research supervision

I teach students to replace "it's not working" with a diagnosis: which assumption
is violated, where the identification argument breaks, or which computational
choice is causing the instability. Before any code is written, a student writes
down what is being estimated and what would count as success. Work is
reproducible from the first week, with version control, tests and a documented
environment. When a project produces a publishable result, the student is an
author; when it produces software, it is released under the student's name.

At the Human Nature Lab, I have mentored medical students, doctoral researchers
and postdoctoral colleagues on study design, causal methodology and scientific
writing. One medical student with no background in network statistics worked
with me as methodological lead and finished as first author of a paper in *BMJ
Open*, able to run and defend the analysis herself.

## Teaching record

Highlights include a guest lecture on the design and analysis of our randomized
village-network study in *Sample Survey Methods* at the Wharton School (2025),
support for Edoardo Airoldi's graduate *Causal Inference* course at Temple
University, *Machine Learning I* at Purdue University, and six teaching
assistantships at University College London.

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

- **Foundations:** calculus, linear algebra, differential equations, introductory
  probability and statistics, statistical computing.
- **Statistics:** mathematical statistics, statistical inference, regression and
  linear models, design of experiments, time series and forecasting, stochastic
  processes, Bayesian statistics.
- **Machine learning and AI:** machine learning, statistical learning, supervised learning, unsupervised learning, deep learning.
- **Applied methods:** causal inference and program evaluation, measurement and
  latent variable models, mathematical modelling and numerical methods.

## Courses I would like to develop

- **Evaluating AI Systems.** Evaluation as a statistical problem: benchmarks as
  estimates with a sampling design and an error, calibration, distribution
  shift, robustness certificates, and what a reported number does and does not
  license.
- **Statistical Methods for Network and Relational Data.** Study design,
  measurement error in reported ties, network models, and causal inference when
  units interfere, using real field data, including the intervention data from
  my own research.
- **Causal Inference and Program Evaluation.** Potential outcomes,
  randomization, observational designs, and what each design cannot identify.
- **AI, Evidence and Society**, ideally co-taught with a colleague in the
  humanities or social sciences: who is represented in training data, who bears
  the risk when a system is wrong, and how a deployed system changes the
  population it was evaluated on.
- **A project-based data analysis workshop** in which students carry a question
  from a messy/noisy real dataset through cleaning, modelling, validation and a written
  conclusion for a non-technical reader.
