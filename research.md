---
layout: page
title: Research
permalink: /research/
subtitle: Statistical network analysis, measurement, causal inference under interference, and Bayesian latent variable models.
description: >-
  Research programme of Marios Papamichalis: field studies of network
  interventions, measurement error in relational data, decision-theoretic
  robustness, latent space models, and decentralized financial networks.
---

My research sits at the intersection of network science, measurement, causal inference,
Bayesian statistics, and deep learning. I develop statistical and causal models for data
on people who are connected to one another, with particular attention to settings where
relationships, norms, and incentives shape outcomes, and where an intervention changes not
only behaviour but also the social structure that sustains it. I am motivated by questions
that can be answered with real data, where careful modelling yields both empirical insight
and theoretical clarity.

<p><a class="button" href="{{ '/files/Research_Statement.pdf' | relative_url }}">Research statement (PDF)</a></p>

## Field studies of interventions in social networks

At Yale's Human Nature Lab I analyse sociocentric village networks in rural Honduras to
study how social structure shapes behaviour and how a large-scale intervention reshapes
that structure.

The central result of this line of work is *Educational Intervention Can Rewire Village
Social Networks*, accepted at *Nature*. Using a two-stage randomized public-health
intervention in 110 remote villages covering 8,331 individuals, we quantify how an
informational intervention alters pre-existing sociocentric networks. In low-dosage
villages, treated individuals tend to sever health-advice ties with untreated alters. In
high-dosage villages, treated individuals increase both inbound and outbound ties. The
intervention also moves friendship and financial ties, which indicates multiplex
spillovers, while aggregate village-level structure changes only modestly. The substantive
implication matters for anyone who evaluates interventions in connected populations: an
intervention can change the medium through which its own effect propagates, so a design
that treats the network as fixed will misstate what the intervention did.

A second line studies how social and individual characteristics support cooperation. In
repeated public-goods experiments across 134 villages with 2,591 participants, contribution
trajectories split early into two persistent regimes, low and high, with little subsequent
convergence. Groups with an early majority of above-norm contributors are much more likely
to settle into the high-cooperation regime, and early high contributions by socially
central individuals help move groups onto that path. A third line examines how village
social structure relates to depression, generalized anxiety, and attitudes supportive of
domestic violence.

## Measurement and measurement error in relational data

Relational data are routinely analysed as if observed, but they are reported. Respondents
forget ties, name people who do not name them back, and answer differently depending on how
the instrument is worded and how long the roster is. In *Forgetting Friends and Foes:
Self-Reported Errors in Sociocentrically Mapped Village Networks*, my coauthors and I
quantify systematic reporting error in a large sociocentric census and characterize which
downstream conclusions survive it.

This motivates a modelling response. In *Clustering Network Formation in Populations of
Networks*, under revision at the *Annals of Applied Statistics*, we treat each observed
network as a noisy snapshot of an underlying network, and we cluster networks jointly by
their strategic formation mechanism and by their measurement-error profile. The likelihood
is built from a single snapshot using a meeting-and-revision equilibrium, with a
finite-horizon alternative, and inference is a parallelizable block-updated MCMC scheme with
exchange-type updates. Putting the reporting process into the model, as a parameter to be
estimated instead of an assumption to be hoped for, is what allows the formation mechanism
to be identified at all.

## Robustness, sensitivity, and what a conclusion can survive

A defining theme of my work is methodological clarity in settings where network-based
conclusions are sensitive to modelling choices. In *Decision-Theoretic Robustness for
Network Models*, under revision at the *Journal of Machine Learning Research*, we develop a
decision-theoretic notion of robustness by allowing the posterior to vary within a small
Kullback-Leibler neighbourhood. For exchangeable graphs we connect robust posterior risk to
graphon limits, which yields tractable sensitivity expansions for losses defined on network
functionals, and we give a practical computation via exponential tilting of posterior draws.
The output is a diagnostic an applied researcher can read directly. It states how far a
conclusion travels before a small and plausible departure from the fitted model reverses it,
which separates substantive findings from artifacts of modelling convenience.

## Latent variable models, model combination, and geometry

I study latent space network models with hyperbolic and spherical geometries, addressing
identifiability by characterizing which latent representations are recoverable from observed
links and by imposing constraints that resolve the non-identifiability that remains. In
related work we introduce a general framework for wrapped distributions on homogeneous
Riemannian manifolds, built from area-preserving maps and isometries, to provide tractable
priors for variational autoencoders and latent network models, together with radial
compensation distributions that decouple curvature from parameter semantics.

A closely related question is what to do when several plausible models compete. In *Bayesian
Predictive Synthesis for Dynamic Networks*, under second-round revise and resubmit at the
*Journal of the American Statistical Association*, we combine competing generative models for
dynamic networks at the level of the graphon. Forecasts become calibrated, and the weights
assigned to component models are interpretable as evidence for competing structural
mechanisms of tie formation and dissolution. Model combination becomes a way of asking which
mechanism the data support, and not only a way of improving prediction.

Most recently, *Support-Safe Variational Hybrid Filtering for Contact-Mode and Sparse-Law
Recovery* was accepted at NeurIPS. It develops variational filtering for hybrid systems where
the active regime and a sparse governing law must be recovered together, under constraints
that keep the inferred support well posed.

## Emerging direction: decentralized financial networks

With Professor Leandros Tassiulas and his team at Yale I am building a research direction on
Ethereum and decentralized finance networks. Using on-chain data, I study how these networks
evolve, what mechanisms drive change, and which external events coincide with structural
breaks. The goal is comparative: how network properties evolve across asset transfers,
lending and borrowing, derivatives, and decentralized exchanges, and whether these systems
exhibit systematically different patterns of connectivity, concentration, and fragility
across market regimes.

## Agenda

Three directions organize the programme I intend to build.

**Design and measurement for relational data in applied settings.** I will extend the
measurement-error work into design guidance that applied researchers can use before data
collection, covering roster and nomination instruments, boundary specification, missing and
non-reciprocated ties, and power and sample size calculations for studies that intend to
measure or intervene on a network.

**Causal inference under interference and network change.** The *Nature* result implies that
the network is itself an outcome. I will develop estimands and designs for settings where
treatment changes the interference structure, including strategically targeted rollouts, and
sensitivity analyses for the exposure mappings that identification arguments in this area
typically assume.

**Robust Bayesian latent variable methods, with software.** I will extend the
decision-theoretic robustness framework beyond exchangeable graphs to multilevel and
longitudinal relational data, and release documented open-source implementations in R and
Python. Methods that stay in papers do not change practice.
