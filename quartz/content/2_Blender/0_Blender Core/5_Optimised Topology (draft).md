---
title: Optimised Topology
author: Ross Popovs
draft: "true"
---
This guide will explain the concept of 3D model topology, why it is important and how to optimise your model for real-time applications (which includes video games)
# Topology
The formal definition of a topology is "the way in which constituent parts are interrelated or arranged", in 3D modelling this refers to the way that vertices, edges and faces are connected to create the structure of a model.

This is best seen visually, so here are some examples of 

## "Good" Topology
There is no universal "good" topology, mainly for the fact that 3D models have a hundred different use-cases. 
%% *("good topology" for games will differ from "good topology" for animating, simulation, 3D printing, one-off rendering, etc)*  %%

Is your model optimised for performance, or is the main goal for it to look detailed and reflect beautifully under multiple lights? 

> [!Good Topology is functional]
> **A good topology is one that is most functional for your use-case.** 
> For the purposes of the this guide, our use-case is 3D modelling for video games

![[weird-yandere-simulator-fact-senpais-toothbrush-v0-jyynmxafb1od1 1.webp]]
![[maxresdefault.jpg]]
# Creating Topology for Games
Primarily use Quads for modelling, engines convert to tris
## Why Topology is important
- Poly Count
- Deformation
- Appearance

Keep the area of each face fairly even (helps with deformation) - more quads in areas that need more deformation 
## Topology for (animated) characters
For video game characters, all of the above optimisations still apply. In addition to this, we want to take into consideration the animations we want to implement for the model.
Stars indicate a change in direction for the mesh - placed strategically in areas with less deformation
### Heads
Eye and lip loops, then create a "mask" of loops
Keep it symmetrical with an edge loop in the middle
Ears are tricky
### Limbs
Joints - bendy straws
### Custom Topology

# Reducing Poly Count
In Blender, you can easily reduce the poly count of any mesh through the use of the `Decimate` and `Remesh` modifiers:

## Decimate Modifier


## Remesh Tool
For custom models, or models with varying topologies, we can use the [Remesh Tool](https://docs.blender.org/manual/en/2.82/sculpt_paint/sculpting/tool_settings/remesh.html)
Check out this sculptured model of Suzanne the Monkey with alien antennae - the topology is really inconsistent:
![[Pasted image 20250501122542.png]]The Remesh Tool can be found under the 'Data' panel on an object:
![[Pasted image 20250501122848.png]]

Ideally we want to convert this model to quads (see [[4_Optimised Topology#Topology Considerations|Topology Considerations]]). 
Before we can do that, we need to remesh the model using Voxel Mode.
Set the `Voxel Size` parameter to a low value such as 0.01m and click `Voxel Remesh`

