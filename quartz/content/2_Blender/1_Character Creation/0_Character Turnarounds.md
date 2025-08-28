---
title: Character Turnarounds
author: Ross Popovs
---
# Reference Images
Before a 3D artist can begin, they require a set of reference images for the characters. These should display:​
- A good representation of the character and any attached objects (clothes, accessories, held items, etc)​
- Should showcase the character and items from multiple sides​
- Characters should be in either A-Pose, or in T-Pose if you expect a large range of arm movement​
	- It is easiest to model characters when no limbs are meet with the main body​
- These reference images are sometimes referred to as “Character Turnarounds”​
	- Turnarounds can be used as concept art, but primarily serve a practical purpose​
	- Different media have different turnaround requirements. For example, for 2D animation you may find turnarounds of characters in many angles with various poses
![[Pasted image 20250430155943.png]]

## Poses
![[Pasted image 20250430160013.png]]
![[Pasted image 20250430160028.png]]

## Orthographic Perspective
Avoid perspective in your reference drawings, instead opt for a “flat” orthographic projection​. Elements which are further from the viewer should not appear smaller than elements which are closer​.
![[Pasted image 20250430160131.png]]
## Height and Scale
![[Pasted image 20250430160156.png]]
It’s can also be a good idea to indicate the height of the character in some way, either by sharing it with the 3d artist directly, embedding it as additional information in the turnaround, or by placing a reference object (such as a doorframe) with a known height​.

It is possible to scale objects within game engines, but keep in mind that many modern game engines use the volume and scale of objects in physics calculations​
Therefore, it is good practice to model the character (or any 3D object) such that when the object has a scale of (1.0,1.0,1.0) it matches its real-life counterpart.​

## Non-Humanoid Characters
The process is the same for non-humanoid models so long as you can capture the shape of the character​:
![[Pasted image 20250430160259.png]]
## Splitting the Turnaround
To use the turnaround within a 3D-Modelling software such as Blender, we need to split it into individual reference image files​:
![[Pasted image 20250430160339.png]]

You can use your favorite image editing software to do this, or by simply taking snippets using “Snipping Tool” on Windows.​

The character does not need to be perfectly centered in the images, as we will be adjusting the position of the images within Blender.​