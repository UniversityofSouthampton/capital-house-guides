---
title: Optimised Topology
author: Ross Popovs
---
This guide will explain the concept of 3D model topology, why it is important and how to optimise your model for real-time applications such as video games.
# Topology
The formal definition of a topology is "the way in which constituent parts are interrelated or arranged", in 3D modelling this refers to the way that vertices, edges and faces are connected to create the structure of a model.
## "Good" Topology
There is no universal "good" topology, mainly for the fact that 3D models have a hundred different use-cases. 
%% *("good topology" for games will differ from "good topology" for animating, simulation, 3D printing, one-off rendering, etc)*  %%

Is your model optimised for performance, or is the main goal for it to look detailed and reflect beautifully under ray-traced lights? 

> [!tip] Good Topology
> **A good topology is one that is most functional for your use-case.** 
> For the purposes of this guide, our use-case is 3D modelling for video games.

> [!example]- A famous example of a model which was created for CGI and is, hilariously, unfit for use as a video game prop:
> ![[weird-yandere-simulator-fact-senpais-toothbrush-v0-jyynmxafb1od1 1.webp]]
>![[maxresdefault.jpg]]

---
# Topology Considerations
## Poly Count
- **Performance Optimization**: A well-managed poly count ensures models are efficient and render quickly, especially important in games.
- **Level of Detail (LOD)**: Proper topology supports LOD systems, allowing lower-poly versions of a model to be exported and used at a distance.
- **File Size and Memory Use**: Lower poly counts reduce file size and memory usage, which is essential for mobile platforms and VR.

> [!tip] Rule of Thumb
> Base the triangle count on the relative size and importance of the asset. Background assets, or assets that will only be seen from a distance, don't need to be as detailed.

## Deformation
- **Smooth Animation**: Good topology, especially with edge loops, ensures clean deformation during animation (e.g., bending elbows or facial expressions).
- **Weight Painting and Rigging**: Clean topology simplifies skinning and makes weight distribution more predictable and manageable.
- **Avoiding Artifacts**: Poor topology can cause pinching, stretching, or collapsing geometry during movement.

> [!tip]- For animated characters, I recommend watching this video:
> ![](https://youtu.be/6Kt0gW3_kio)

## Appearance
- **Surface Flow**: Topology dictates how light interacts with a surface; smooth edge flow enhances the visual quality of the model.    
- **Subdivision Ready**: Properly laid-out quads subdivide predictably, which is important for high-resolution sculpting or rendering. Tris don't subdivide neatly so it is recommend to mostly use quads in Blender, and let the game engine convert to tris.
- **UV Mapping and Texturing**: Clean topology simplifies unwrapping and improves how textures are applied to the model.

---
# Reducing Poly Count
In Blender, you can easily reduce the poly count of any mesh through the use of the `Decimate` and `Remesh` modifiers:
## Decimate Modifier
Using the [decimate modifier](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/decimate.html), we can reduce the number of polygons in the mesh.

Have a look at this lion statue: beautiful, but at the cost of having 1.5M triangles

![[Pasted image 20250430230639.png]]
Applying the decimate modifier with a factor of 0.025 (a 97.5% reduction in complexity), the new model only has 40k triangles:

![[Pasted image 20250430231109.png]]
![[Pasted image 20250430231348.png]]

From afar, it is difficult to tell the difference between the two - the decimated model is the one on the left. if this was a prop in a game the player would need to be very close to the model to tell the difference. A minimal impact to the gameplay, but a whopping **4000x increase** to the performance whenever the model is on the screen.
