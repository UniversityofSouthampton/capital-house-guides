---
title: Flat Games in Unity
date: 2026-10-14
categories:
  - unity
tags:
  - 2d
  - scripting
  - unity
  - flatgame
author: Ross Popovs
---
# A recipe for flat games
![[Pasted image 20261014131600.png]]




This guide provides you with pre-made scripts and instructions for creating your own flat game in Unity 2D.

# Setting up the project

1. Start with a blank Unity project (2D URP Template)

2. Navigate to Project Settings (Edit -> Project Settings)

3. Find the setting for 'Active Input Handling' (Player -> Other Settings) and set the option to Both. This will prompt you to restart the editor

![[Pasted image 20261014135350.png]]

4. In the assets panel, right click and create a new folder named "Scripts"

5. [Download the template scripts]([Flat game scripts](https://sotonac-my.sharepoint.com/:f:/g/personal/rp1y23_soton_ac_uk/IgCUP4X1jm8ESqUh91T23N9ZAZyX5bXplgCwbZT43di7v_c?e=oboxLA)) and drag them into the Scripts folder
   ![[Pasted image 20261014153942.png]]

6. Create a Square Sprite by right-clicking in the Hierarchy (2d Objects -> Sprites -> Square)
7. Rename it to "Player"
8. In the Sprite Renderer component, set the Order in Layer to 1
9. Create a second square sprite and name it "Background"
10. Import your image assets by dragging them into the Assets folder
11. You can change the image of the player and the background through the Sprite Controller

# Flat Game Scripts
I have written 3 scripts which will allow to create a basic flat game - I strongly encourage you to open them up, inspect them, and to mess around. Don't worry about breaking anything, as you can always just copy and paste the below code to reset the scripts!

Each script comes with a couple of technical questions to think about and try out within your project!

## PlayerMove.cs

Add this to your player to add basic movement with the WASD keys.

> [!NOTE] Technical Questions - open the script and try these out in your editor!
> 1. The speed is limited between 0 and 10 in the inspector, by looking at the code, how may you increase/decrease this limit?
> 2. What would happen if you set the speed to a negative number?
> 3. How could you re-bind the keys for this script?


Raw C# (For copy-pasting)

```
using UnityEngine;  
  
public class PlayerMovement : MonoBehaviour  
{  
//Set up a new "float" variable  
//Variables declarations follow pattern [Scope] [Type] [Name] = [Default Value]  
[Range(0,10)]  
public float speed = 10;  
  
// Start is called once before the first execution of Update after the MonoBehaviour is created  
void Start()  
{  
  
}  
  
// Update is called once per frame  
void Update()  
{  
//Remember, all the code within the Update block runs every frame  
  
//Create new variable to hold the amount of movement the player will take this frame. Vector2 is a data type that holds two values x and y.  
Vector2 movementThisFrame = new Vector2();  
  
//If we are pressing the A key..  
if(Input.GetKey(KeyCode.A))  
{  
//Add Vector2.left (-1,0) to the movement this frame  
movementThisFrame = movementThisFrame + Vector2.left;  
}  
  
//If we are pressing the D key..  
if(Input.GetKey(KeyCode.D))  
{  
//Add Vector2.right (1,0) to the movement this frame  
movementThisFrame = movementThisFrame + Vector2.right;  
}  
  
//If we are pressing the W key..  
if(Input.GetKey(KeyCode.W))  
{  
//Add Vector2.up (0,1) to the movement this frame  
movementThisFrame = movementThisFrame + Vector2.up;  
}  
  
//If we are pressing the S key..  
if(Input.GetKey(KeyCode.S))  
{  
//Add Vector2.down (0,-1) to the movement this frame  
movementThisFrame = movementThisFrame + Vector2.down;  
}  
  
//Normalize the movement variable  
movementThisFrame = movementThisFrame.normalized;  
  
//Multiply by Time.deltaTime  
//Smooths movement out in case of fluctuations in framerate  
movementThisFrame = movementThisFrame * Time.deltaTime;  
  
//Multiply by speed  
movementThisFrame = movementThisFrame * speed;  
  
//Translate this object by the value of the 'movementThisFrame' variable  
transform.Translate(movementThisFrame);  
}  
}
```

## CameraFollow.cs

Add this script to your camera to make it follow the player.
In the inspector, drag your player object from the hierarchy into the "Follow Target" field so that it looks like this:
![[Pasted image 20261014160053.png]]

The camera will now follow the player (or whichever object you select)

> [!NOTE] Technical Questions - open the script and try these out in your editor!
> 1. Why are we adding an offset every frame? What would happen if you just set the position of the camera to the player?
> 2. Why have I used LateUpdate instead of Update? Try both and see if you can tell the subtle difference.

Raw C# (For copy-pasting)
```
using UnityEngine;  
  
public class CameraFollow : MonoBehaviour  
{  
//Create a variable (to be set through the inspector) which will hold the target that the camera should follow  
[Tooltip("The object which the camera will follow. Usually the player")]  
public GameObject followTarget;  
  
//Create a variable to hold the offset between the camera and the target  
private Vector3 objectCamOffset;  
  
// Start is called once before the first execution of Update after the MonoBehaviour is created  
void Start()  
{  
//Set the original offset between camera and follow target  
objectCamOffset = this.transform.position - followTarget.transform.position;  
}  
  
// LateUpdate is called at the end of each frame  
void LateUpdate()  
{  
//Set the position of the camera at the end of each frame  
transform.position = followTarget.transform.position + objectCamOffset;  
}  
}
```

## SpritesheetAnimation.cs

This script will allow for any object to have two spritesheet animations - one for idle and one for moving.

You can use individual images that you import, or if you have a spreadsheet, [you can follow this guide on how to separate a spritesheet into individual images](https://docs.unity3d.com/6000.6/Documentation/Manual/sprite/sprite-editor/use-editor.html).

![[Pasted image 20261014160655.png]]
**Time Between Frames**: How quickly the script changes between one frame and the next
**Idle Frames**: A list of images to use for the idle animation when the player is not moving. You can add or remove elements from this list with the + and - buttons.
**Movement Frames**: Same as above but for when the player is moving.
**Flip Player in Direction**: If enabled, will automatically flip the sprite depending on the direction that the player is moving in.

> [!NOTE] Note
> This script is more advanced, but I still encourage you to inspect it - what part of the script is responsible for changing the sprites? What part of the script is responsible for flipping the character?

Raw C# (for copy-pasting) 
```
using System.Collections.Generic;  
using UnityEngine;  
  
[RequireComponent(typeof(SpriteRenderer))]  
public class SpritesheetAnimation : MonoBehaviour  
{  
[Header("Animation Settings")]  
public float timeBetweenFrames = 0.2f;  
  
[Header("Idle Animation")]  
public List<Sprite> idleFrames;  
  
[Header("Movement Animation")]  
public List<Sprite> movementFrames;  
public bool flipPlayerInDirection;  
  
private SpriteRenderer _spriteRendererComponent;  
  
private int _currentIdleFrame;  
private int _currentMovementFrame;  
  
private float _timeSinceLastFrame;  
  
private Vector3 _positionLastFrame;  
  
// Start is called once before the first execution of Update after the MonoBehaviour is created  
void Start()  
{  
_spriteRendererComponent = GetComponent<SpriteRenderer>();  
_positionLastFrame = transform.position;  
}  
  
// Update is called once per frame  
void Update()  
{  
if (_timeSinceLastFrame >= timeBetweenFrames)  
{  
_timeSinceLastFrame = 0;  
  
if (Vector3.Distance(transform.position, _positionLastFrame) == 0)  
{  
NextIdleFrame();  
}  
else  
{  
NextMovementFrame();  
if (flipPlayerInDirection)  
{  
if (transform.position.x >= _positionLastFrame.x)  
{  
_spriteRendererComponent.flipX = false;  
}  
else  
{  
_spriteRendererComponent.flipX = true;  
}  
}  
}  
}  
  
_timeSinceLastFrame += Time.deltaTime;  
_positionLastFrame = transform.position;  
}  
  
private void NextIdleFrame()  
{  
_currentIdleFrame = _currentIdleFrame + 1;  
if (_currentIdleFrame > idleFrames.Count - 1)  
{  
_currentIdleFrame = 0;  
}  
_spriteRendererComponent.sprite = idleFrames[_currentIdleFrame];  
}  
private void NextMovementFrame()  
{  
_currentMovementFrame = _currentMovementFrame + 1;  
if (_currentMovementFrame > movementFrames.Count - 1)  
{  
_currentMovementFrame = 0;  
}  
_spriteRendererComponent.sprite = movementFrames[_currentMovementFrame];  
}  
}
```


