---
title: Glossary
author: Parker English
---
Some terms adapted from [Sketchfab Website]([https://help.sketchfab.com/hc/en-us/articles/360017681872-Glossary-of-3D-Terms#q_terms](https://help.sketchfab.com/hc/en-us/articles/360017681872-Glossary-of-3D-Terms#q_terms))
# Vertex/Vertices
The smallest part of a 3D model, the point of intersection between three or more edges (lines) in 3D space

![[Untitled.png]]

# Edge
A line that exists between two [[#Vertex/Vertices|Vertices]], shown shaded in red.
![[Untitled 1.png]]

# Face
The most basic part of a 3D [[#Polygon]], when three or more [[#Vertex/Vertices|Vertices]] connect to make a visible surface, shown shaded in red.
![[Untitled 2.png]]

# Polygon
A shape with three or more [[#Vertex/Vertices|Vertices]] connected. Pretty much all objects in 3D games have meshes made up of polygons. In the image below you can see the individual four-sided polygons making up this mesh.
# Mesh
A collection of [[#Vertex/Vertices|Vertices]], [[#Edge|Edges]] and [[#Face|Faces]] that define the shape of a 3D model.
![[Untitled 3.png]]

# Tri
A three-sided [[#Polygon|Polygon]]. All game renderers convert the polygons of a mesh into tris.
![[Untitled 4.png]]Above - The faces of this cube have been split into tris

# Quad
A four-sided [[#Polygon|Polygon]]. It is strongly recommended to ensure meshes intended for use in games are solely made up of quads or tris, as quads can be easily converted to tris without any potential shading errors. Also, quads are much easier to work with when modelling.

# N-Gon
A term for any [[#Polygon|Polygon]] with more than four edges/sides.
![[Untitled 5.png]]

# Topology
The way the polygons (whether [[#Tri|Tris]], [[#Quad|Quads]] or [[#N-Gon|N-Gons]]) of a 3D model's [[#Mesh]] are organized and connected to one another.

# Normal
Refers to the direction a polygon is facing. Used for a lot of shader calculations to calculate the way light reflects off each face.
![[Untitled 6.png]]

# Material
Refers to the optical properties of a 3D object's surface, such as colour, shininess, etc. You can use multiple materials on a single 3D model.

# Texture
An image mapped to the surface of your model's material(s). Textures can define the colour of the object as well as shiny/rough or metallic/non-metallic areas.

# Edge Loop
A series of connected [[#Edge|Edges]] that form a loop around the mesh.
![[Untitled 7.png]]

# Modifiers
Operations you can apply to a mesh to change its geometry non-destructively. Modifiers can be enabled, disabled and re-ordered as you wish.


| ![[Untitled 8.png]] | ![[Untitled 9.png]] |
| ------------------- | ------------------- |
Before and after applying a Subdivision modifier, which adds more polygons to smooth out the mesh.