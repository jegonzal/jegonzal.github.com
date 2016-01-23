---
layout: page
title: "Research"
description: "Previous and Active Research Projects"
group: navigation
order: 1
---
{% include JB/setup %}

This is a slightly out-of-date list of active projects in my group.  I will be updating these in the next few weeks.


## Real-time Interactive Machine Learning

Machine learning and systems research have largely focused on the design of algorithms and systems to train models at scale on static datasets.
However, training models is only a small part of the greater _life-cycle of machine learning_ which spans training, model serving, performance evaluation, exploration, and eventually re-training.
Furthermore, in many real-world applications there are often many models and modeling tasks which may share common data and incorporate user level personalization (e.g., spam prediction and content filtering).
This bigger picture introduces a wide range of exciting new challenges in both the design of models and algorithms as well as the systems needed to support each of these stages.

* <b>Low-Latency Model Serving:</b> Serving predictions can be costly, requiring the evaluation of complex feature functions, retrieval of user personalization information, and potentially slow mathematical operations.
Existing systems resort to pre-materialized predictions or specialized bespoke prediction services limiting their scalability and broader adoption.
I believe that we can leverage advances in distributed query processing, caching, partial materialization, and model approximations to enable more general purpose low-latency prediction serving.

* <b>Hybrid Online/Offline Learning:</b> Typically models are trained offline at fixed intervals (e.g., every night) resulting in stale models.
While online learning algorithms exist, there is limited systems support and offline re-training can often be more efficient and improve estimation quality (e.g., by iterating multiple times).
I believe that by splitting models into online and offline components we can achieve a compromise by enabling fast updates to rapidly changing parameters (e.g., personalization parameters) while leveraging existing offline training systems for slowly evolving parameters.

* <b>Managing Multiple Models:</b> Often there will be multiple models for the same task (e.g., models built by different employees).
Choosing the right model and sharing training and prediction computation across models can improve accuracy and system performance.
Model selection is often accomplished using A/B testing, however this approach is deficient as model performance can vary across user groups and time.
I believe that by applying active learning techniques we can adaptively select the best models for different groups at different times.
This will require the development of new systems to support active learning in a low-latency serving environment.

## Graph Systems and Analytics

The GraphX project was initial created to address the need to unify tables and graphs support entire graph analytics pipelines which combines tabular pre-processing and post-processing with complex graph algorithms.
GraphX recast the essential patterns and optimizations in graph-processing systems as new distributed join strategies and new techniques for incremental materialized view maintenance.
Through this alternative perspective, GraphX integrates graph computation into a general purpose distributed data-flow system, enabling users to view data as tables or graphs without data movement or duplication and efficiently execute graph algorithms at performance parity with specialized graph-processing systems.
GraphX is now part of Apache Spark and has been put into production at major technology companies (e.g., Alibaba Taobao).  The next steps in the GraphX project are to be able to support graph structure queries like those found in graph databases, streaming graph modifications, and achieve consistent scale-out and scale-up performance.



## Hybrid Synchronous and Asynchronous Systems

Much of my early work on graph processing systems, the parameter servers, and even transactional models for machine learning leveraged nondeterminism and asynchrony to improve performance.
Meanwhile, many contemporary data processing systems have abandoned asynchrony, in favor of the simpler Bulk Synchronous Parallel (BSP) execution model and the determinism it affords.
This leads to the question: can we combine the benefits of asynchronous systems and the simplicity and determinism of synchronous systems?
In my lab, we have already begun to explore a hybrid approach to algorithm and system design that provides more frequent, fine-grained communication, while retaining determinism at different levels of granularity.
Building on the concept of mini-batch algorithms in machine learning, I believe their is a pattern and corresponding abstraction that can interpolate between the extremes enabling users to choose the level of coordination that leads to the optimal trade-off between algorithm convergence rates and system performance.
Understanding how and when to exploit non-determinism while preserving  guarantees on algorithm correctness will be a key part of managing the machine learning life-cycle and exploiting the high-performance systems of the future.





