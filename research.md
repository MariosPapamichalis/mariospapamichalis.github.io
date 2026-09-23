---
layout: page
title: Research
permalink: /research/
subtitle: Causal inference under interference, statistical network analysis, robustness, and the statistical analysis of language models.
description: >-
  Research programme of Marios Papamichalis: causal inference for networks
  that change under intervention, measurement error in relational data,
  robustness certificates, and statistical and causal methods for the
  interpretability and evaluation of large language models.
---

My work starts from one question: how far can a conclusion be trusted when the
model that produced it is an approximation? I study it in two kinds of systems.
In human social networks, people influence one another, and an intervention can
change the very connections it travels along. In large language models, the
numbers used to interpret and evaluate a model often depend on choices that are
never reported. In both settings I build statistical and causal methods that make
those choices explicit and measure what depends on them.

<p><a class="button" href="{{ '/files/Research_Statement.pdf' | relative_url }}">Research statement (PDF)</a></p>

## Causal inference when people influence one another

Standard causal inference assumes that one person's treatment does not affect
another person's outcome. In a village where people take advice from their
friends, that assumption fails by design, and the estimand must be rebuilt before
an estimator is chosen. My main design is two-stage randomization: villages are
assigned a treatment saturation and individuals are randomized within them, which
separates spillover effects from direct effects rather than mixing the two.

*Educational Intervention Can Rewire Village Social Networks*, accepted at
*Nature* (joint first author with Laura Forastiere, with Edoardo M. Airoldi and
Nicholas A. Christakis), applies this design across 110 remote Honduran villages
covering 8,331 people. The intervention changed the network it was delivered
through. In low-dosage villages, treated people cut health-advice ties to
untreated neighbours; in high-dosage villages, they added ties in both
directions. The rewiring extended to friendship and financial ties, yet
village-level summaries barely moved, so a standard evaluation would have missed
it. The general lesson is that when treatment changes the exposure structure, an
evaluation against the pre-treatment network is estimating a quantity that no
longer exists. A companion paper, *Network Changes in Rural Honduras: Educational
Intervention via Strategic Targeting*, studies how the choice of whom to treat
propagates through the network.

Peer influence raises a related identification problem. In *Peer Effects in
Repeated Cooperation Games in Isolated Honduran Villages*, 2,591 people across
134 villages played a ten-round public-goods game with an undisclosed horizon,
with their full friendship network mapped beforehand. Once the mechanical mean
reversion that inflates naive peer regressions is removed, and inference is made
robust to weak instruments, the peer effect is moderate: people close roughly a
quarter of the gap to their group each round. That is enough to hold groups near
a shared norm of about half the endowment, but not enough to make them alike.
About three quarters of the differences between groups persist, and they trace to
who is in each group rather than to how its members respond.

## Social structure and wellbeing

The same village networks support work on how social structure relates to health
and behaviour: depression by gender (published in *BMJ Open*), generalized
anxiety, attitudes toward domestic violence, the spatial layout of friendly and
antagonistic ties, how ties change over time, and the finding that social and
financial ties are disproportionately directed toward physically larger people.

## What interpretability metrics measure in language models

Much of the toolkit for interpreting language models computes a single number
from a distribution and reads it as a property of the model. I study what those
numbers actually measure, using the same ideas about composition, dependence and
intervention that I use for networks.

- **Attention as compositional data.** In *Which Question Is Your Attention
  Metric Answering?* (with Regina Ruane, [arXiv](https://arxiv.org/abs/2608.14712)),
  each row of an attention matrix is treated as a composition. Because most
  attention mass lands on a single "sink" token, standard similarity and entropy
  measures depend on whether that sink is kept or dropped, a choice papers rarely
  report. Across ten pretrained models, 17–47% of verdicts about which of two
  heads is more similar flip with that choice. Aitchison geometry separates sink
  from content exactly, and shows that in larger models most of the entropy
  collapse measured during training is the sink growing, not attention
  sharpening.
- **What chain-of-thought entropy measures.** In *What Does Chain-of-Thought
  Entropy Measure?* (with Regina Ruane, [arXiv](https://arxiv.org/abs/2609.25039)),
  next-token entropy is split exactly into three channels: whether to emit a
  connective, which connective, and what the substantive continuation is.
  Scoring the content channel improves chain-of-thought compression, and an
  audit of our own results shows that standard compression evaluations are
  inflated by answers the chain restates.
- **Ablation as a designed experiment.** A manuscript under review treats
  component ablation as a factorial experiment over prompts. Removing a
  component alone and removing it alongside its collaborators answer different
  questions, and no one-at-a-time experiment can recover the second answer; four
  forward passes can. In the published GPT-2 circuit for indirect-object
  identification, 6 of the 17 influential heads change sign once their
  collaborators are removed.

A related direction treats the evaluation of AI systems as a sampling problem. A
benchmark score is an estimate, with a sampling design and an error that is
rarely reported, and a leaderboard gap licenses less than it appears to.

## Robustness: what a conclusion can survive

*Decision-Theoretic Robustness for Network Models* (under revision at the
*Journal of Machine Learning Research*, with Regina Ruane, Swati Chandna and
Simón Lunagómez) lets the posterior move within a Kullback–Leibler neighbourhood
of the fitted one and computes the worst case of a decision-relevant quantity.
That worst case is an exponential tilt of the fitted posterior, so the diagnostic
reweights draws that already exist instead of refitting the model. The output is
a single number: how far the model can move before the conclusion reverses. For
exchangeable graphs it connects to graphon limits, so it remains valid as
networks grow. I am extending it to causal estimands, where the departure of
interest is a misspecified exposure mapping.

## Measurement error in relational data

Network data are reported, not observed. People forget ties, name others who do
not name them back, and answer differently depending on how a question is
worded. *Forgetting Friends and Foes* quantifies this reporting error in a large
sociocentric census and identifies which conclusions survive it. *Clustering
Network Formation in Populations of Networks* (under revision at the *Annals of
Applied Statistics*) models each observed network as a noisy snapshot of an
underlying one and clusters networks jointly by formation mechanism and by
measurement-error profile. Putting the reporting process into the model is what
makes the formation mechanism identifiable.

## Supporting methodology

- *Support-Safe Variational Hybrid Filtering for Contact-Mode and Sparse-Law
  Recovery* (accepted at NeurIPS, with Regina Ruane,
  [arXiv](https://arxiv.org/abs/2605.16398)) keeps a learned filter from
  discarding feasible regimes of a hybrid dynamical system, then recovers a
  sparse physical law within each regime.
- *Bayesian Predictive Synthesis for Dynamic Networks* (second-round revision at
  the *Journal of the American Statistical Association*,
  [arXiv](https://arxiv.org/abs/2606.26136)) combines competing generative models
  at the level of the graphon, so forecasts are calibrated and the model weights
  read as evidence for competing mechanisms of tie formation.
- Work on latent space network models with hyperbolic and spherical geometry
  characterizes which latent representations can be recovered under
  non-Euclidean curvature.

## Emerging direction: decentralized finance networks

With Professor Leandros Tassiulas and Dr. George Palaiokrassas and his group at Yale, I study Ethereum and
decentralized-finance networks from on-chain data: how they evolve, which events
coincide with structural breaks, and whether asset transfers, lending,
derivatives and decentralized exchanges differ systematically in concentration
and fragility across market regimes.

## Directions

Four questions guide the next stage of this work:

1. What does an intervention cause when the people it reaches influence one
   another, and the network itself responds to treatment?
2. How should we evaluate a system whose internals we cannot fully inspect, and
   how wide is the error bar on the numbers we use to do it?
3. How much perturbation can a conclusion absorb before it reverses, and can
   that be computed cheaply enough to become routine?
4. What does a model inherit from the way its data were collected, and who bears
   the cost?

Methods that stay in papers rarely change practice, so I plan to release the
robustness and evaluation diagnostics as documented open-source packages in R
and Python.

