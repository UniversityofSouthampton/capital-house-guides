---
title: Exporting to Unity
author: Ross Popovs
---
# In Unity

Before you start, it is good practice to make a folder for your model imports if you do not have one already (see [Best practices for organizing your Unity project](https://unity.com/how-to/organizing-your-project))

# In Blender
1. Recommended: Join objects into one mesh (select all then Ctrl+J) unless you need it for rigging etc. This makes it easier to handle in Unity
2. Set the origin of your mesh to a desired location (likely the center of the object). In Object Mode open the Object tab at the top, the Set Origin.
   
   ![[2_Blender/0_Core/attachments/Untitled 1.png]]
3. Center object to world origin (0,0,0). This can be done with Alt + G in Object Mode.

# Exporting to FBX:

Unity supports .blend files, exporting the model automatically through blender when the .blend file is imported, however:

- This only works if Blender is installed, meaning if someone in your team doesn't have blender this won't method work
- You don't have controls over the settings when exporting.

**Therefore .FBX is recommended!**

## Set Export Directions
Set forward and up directions. You can use the directions gizmo in the top-right corner to easily determine which direction is the front of your object and which is up:

![[2_Blender/0_Core/attachments/Untitled 2.png]]Now just press Export FBX and bring your model into Unity

## If Normals appear inside out

- Make sure object scale is not negative
- Re-calculate normals (In Edit Mode -> A -> Shift+N)
- Re-Export your model
## If Textures don't show
- pack textures into blend file (File -> External Data -> Pack Resources)
- when exporting, set path mode to copy and tick embed textures:

  ![[2_Blender/0_Core/attachments/Untitled 3.png]]
- extract textures in Unity:

  ![[2_Blender/0_Core/attachments/Untitled 4.png]]
# Good practices within Unity
Create an empty parent as a "wrapper" for the imported mesh. This allows you to change the rotation of the mesh without affecting the transform of the parent object:

![[2_Blender/0_Core/attachments/Untitled 5.png]]
"Horse Mesh" is the imported model, "Horse" is an empty parent object.