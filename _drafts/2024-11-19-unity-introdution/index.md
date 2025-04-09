---
title: "Unity 2D - Introduction"
date: 2024-11-19
categories: 
  - "unity"
tags: 
  - "2d"
  - "introduction"
  - "scripting"
  - "unity"
draft: true
---

\[shp-icon icon="unity-label"\]

#### `[icon name="computer"]` Lab Note

This guide can be followed while using the GDA Computer Suite. Sections which are unique to the computer suite are marked with `[icon name="computer"]`

* * *

# Why Unity?

- Large and active community of professionals and hobbyists

- Used widely in many creative industry

- Cross-platform development

- Rich 2D and 3D capabilities

- Real-time experiences for AR, VR, mobile, desktop and web (Not limited to just games!)

- Continuous updates with LTS (Long Term Support) versions

- Free for students and personal use!

# Launching Unity

`[icon name="computer"]` The lab PCs are pre-installed with Unity 2022.3.34f

- **If you're using a later version (Unity 6 or above), your interface may differ from this guide but the content will still be relevant.**

- Type "Unity" into the Windows search box

- **`[icon name="computer"]` Important if using the Computer Lab: Click on “Unity 2022.3.34f1” not “Unity Hub”. This will still open the Unity Hub launcher, but will preload the editor into the launcher for you.**

- Once open, Unity Hub will ask you to sign in. If you don't have an account, create one with your student email.

# Creating your first project

![[images/image.png]]

- Create a new Unity project through Unity Hub

![[images/image-1.png]]

- Choose the **2D (URP)** template

- Set your project name

- `[icon name="computer"]` Computer Suite: Save the project anywhere on the PC EXCEPT for your Desktop or any other folder under your OneDrive. If you are not sure save your projects to your Downloads folder for now.

## Built-in Renderer/ URP/ HDRP

![[images/image-2.png]]

**Built-In Renderer**  
\- General Purpose + Legacy  
\- This project type is being phased out

![[images/image-4.png]]

**Universal Render Pipeline (URP)**  
\- Modern go-to option  
\- Artist-friendly features  
\- Best for cross-platform  
\- **Best for most cases and is the recommended option for most projects**

![[images/image-5.png]]

**High Definition Render Pipeline (HDRP)**  
\- Advanced graphical features intended for high-end hardware  
\- Difficult to fully utilise  
\- Ask if you need this for your project

## The Unity Interface

![[images/image-6-1024x551.png]]

**Hierarchy**: Displays all the game objects in the current scene. It shows a tree-like structure where you can manage the organization and parent-child relationships of objects.

**Scene**: A visual representation of the game world. This is where you can move, manipulate, and arrange objects in the 3D or 2D space.

**Inspector**: Shows detailed properties and settings for the currently selected game object, component, or asset. You can modify values like position, rotation, and script variables here.

**Project**: Contains all the assets, scripts, and resources for your project. It’s organized into folders and allows you to manage the project’s files.

## Moving within the Scene (2D)

- Zoom In/Out
    
- Panning
    
- Focusing
    

`[icon name="`computer-mouse`"]` Zoom in/out with the mouse wheel

`[icon name="`computer-mouse`"]` Pan the scene by holding right click

`[icon name="f"]` Select an object and press F to instantly focus on it

# GameObjects and Components

- GameObjects: Fundamental objects within Unity  
    Represent props, characters, scenery. Can have a model or be empty.
    - Don’t have any inherent functionality by themselves but act as containers for Components - blocks of logic which add functionality to the GameObjects.

- Unity has hundreds of built-in Components, but in many cases, we might need to write our own Script Components with C#

## Creating your first GameObject

![[images/image-9.png]]

- Right-click within the Hierarchy window to bring up options for a new GameObject

- Create a square: 2D Object -> Sprites -> Square  
    You now have a square:

![[images/image-11.png]]

## Inspector Window

- Select the Square by clicking on it in the Hierarchy

- Now check the Inspector window on the right which will show the components attached toour Square GameObject

- **Transform**: All GameObjects include a Transform component which defines the position, rotation, and scale of the object

- **Sprite Renderer**: Our Square comes with a Sprite Renderer

- **Material**: All rendered objects have an attached Material which defines  the object’s appearance.

![[images/image-12.png]]

## Scenes

- Environment of GameObjects  
    Allows you to break down your project into separate environments  
    Simpler projects can exist in one scene

- For more advanced projects, you can use scenes to organise your project by content or state. eg:  
    \- \[Main Menu Scene\]  
    \- \[Level 1\]  
    \- \[Level 2\]  
    \- Or \[Hub World\], \[Building 1\], \[Building 2\], etc

- For big projects, scenes are essential for organisation, performance, and robustness!

- When you ‘save’ your Unity project, you are saving the currently loaded scene file

## Properties

- We can interact with components and scripts through their properties.

- If you are ever unsure what a property does, hover over it!

![[images/image-15.png]]

- _Tip: Googling “Unity Sprite Renderer” or any other Component will often give you the documentation page for the component as one ofthe first results.  
    Don’t worry about the details for now though!_

<figure>

![[images/image-16.png]]

<figcaption>

https://docs.unity3d.com/Manual/class-SpriteRenderer.html

</figcaption>

</figure>

# Simple 2D Character

- At this point, all we have is a square... Which is a bit boring.

- Lets create a simple character sprite to replace our boring square!

- Have a go with AvatarsInPixels Chibi Maker

- Don't spend too long on this please!

![[images/image-17.png]]

- Save your sprite by right-clicking and selecting "Save Image As..."

## Import your sprite

- File organisation is key!

- Create a “Sprites” folder within your project

![[images/image-18.png]]

- Importing assets is easy! Simply drag the file into the Sprites folder within the Project Window:

![[images/image-19.png]]

#### File Organisation Best Practices

File organization is crucial in game development because it ensures that assets, scripts, and other resources are easy to locate and manage. Proper organization improves workflow efficiency, reduces the risk of errors, and makes it easier for teams to collaborate.  
See https://unity.com/how-to/organizing-your-project for file structure examples and advice

![[images/image-22.png]]

## Replace the sprite source

Select the Square to focus on it, then replace the Sprite property on the Sprite Renderer by dragging our character sprite to it:

## Adding Physics

- Unity has a powerful physics engine

- Physics simulations are quite expensive – not everything needs to be simulated, especially if it’s not doing anything.

![[images/unity-intro-5.gif]]

![[images/unity-intro-6.gif]]

![[images/unity-intro-7.gif]]

### Rigidbodies

- Add a Rigidbody 2D component to your character:

![[images/image-23.png]]

![[images/image-24.png]]

- Launch the game by pressing thestart button at the top of the screen

- See what happens!

### Play Mode

![[images/image-25.png]]

- Allows you to run the current version of your game within the Unity editor

- **Be aware – any changes to the game that you make within play mode are not saved when you exit it**

- _Suggestion: To make it more obvious when you are in play mode, you can change the colour of the tint that is applied to the editor when in play mode_

### Adding a second physics object

- Lets add a floor to our scene!

- Zoom out so you can see the entirety of the camera bounds:

![[images/image-27.png]]

- Then add a floor to your scene by creating another Square object and stretching it across the bottom of the view:

![[images/image-28.png]]

### Colliders

- Though Rigidbodies are affected by physics, to interact with another object both require an additional Collider component.

- Add a Box Collider 2D component to your character and the floor, then try playing the scene again!

![[images/image-29.png]]

# Your First Script

- So its time to start coding!

- Don’t freak out just yet! it may be unfamiliar, but it will get easier through practice and exposure. Remember, not all of it will be obvious to begin with, and you are expected to ask for help!

- Set up your scripting environment:
    - Within your Assets folder, create a new folder for Scripts
    
    - Select your default Script Editor
    
    - At the top of the screen, go to **Edit -> Preferences**
    
    - Select the External Tools tab
    
    - Set your External Script Editor to **Rider**
    
    - Don’t change any other settings at this moment

![[images/image-32.png]]

- Time to create your own script!

- Within your Scripts folder, create a new script by right-clicking and selecting Create -> C# Script

- Name your Script “BasicMovementScript”:

![[images/image-33.png]]

- Convention recommends pascal case for script names
    - E.g. PlayerController, CameraEffectsSystem, LevelOneProperties

- **It is possible to rename scripts once they are created but requires extra steps, so make sure you like the name before confirming**

- **Double-click the script to open it within Rider**

##  JetBrains Rider

- You may be familiar with using Visual Studio as a coding solution for Unity

- **JetBrains Rider** has very quickly become the recommended software:
    - Tight integration with Unity
    
    - Open Unity projects directly from Rider
    
    - Access Unity-specific features like the Unity Console, Unity Remote, and Unity Test Runner from within Rider
    
    - Powerful refactoring tools
    
    - Version control integration!
    
    - Free license for educational purposes!

### Initial Setup

- When you first open Rider, it will present you with a few options. Here are the recommended ones:

![[images/image-36.png]]

- Select Visual Studio

![[images/image-37.png]]

- Select Visual Studio

![[images/image-38-1024x417.png]]

- Skip these and press "Agree"

### Default Unity Script

- You should now see this. What you are looking at is default code which unity generates any time you create a new script:

![[images/image-39-1024x549.png]]

C#

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicMovementScript : MonoBehaviour
{  
  // Start is called before the first frame update   
  void Start()  
    {           
   
    } 
    
  // Update is called once per frame   
  void Update()   
    {          
    
    }
}
```

- Don't worry about the first 3 lines for the moment

### Script Structure

![[images/image-40-1024x464.png]]

- Standard structure of a Unity script:

- A **monobehaviour** class is a special type of class that is managed by the Unity Engine. You can only have one per script file.

- A monobehaviour class can have any number of functions in which you can write code. Unity generates two important unique functions for you: Start and Update.

![[images/image-41-1024x420.png]]

### Start() and Update() Functions

- Unity has several unique Event Functions, Start() and Update() being two of them:

![[images/image-42-1024x274.png]]

Add the script to your player as a new Component (in the same way that you would add any other components)

Try putting `Debug.Log("Hello World");` into each of the functions one at a time and press play. Have a look at the console panel, what happens?

By default, the Console panel can be found to the right of the Project panel:

![[images/image-68-1024x519.png]]

### Movement Code

- I will be introducing some pre-written code

- I recommend typing the code manually into your script instead of copy-pasting as it will help you process the code better and spot common mistakes

- If you do not understand the actual code don’t worry, just look at the text in the yellow box which explains what the code does **or ask me to explain the code in more detail.**

Copy this script so that your BasicMovementScript matches this. Again, resist the temptation to copy and paste:

C#

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicMovementScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.right);
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.left);
        }
    }
}
```

#### Code Explanation

In each frame, the code checks if the right arrow is being pressed. If it is, we take the current position of the player and move right by one unit. This is then repeated for left movement.

- Rider saves your scripts automatically.

### Left and Right movement with speed

C#

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicMovementScript : MonoBehaviour
{
    public float speed = 0.1f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.right * speed);
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.left * speed);
        }
    }
}

```

- On line 7, we create a new variable called 'speed'. Variables are values which you can use in your code at a later stage

- On lines 20 and 25, we utilise this new speed variable by adding it as a multiplier to our Vector3.right and Vector3.left directional units.

#### Code Explanation

The same logic applies, except now instead of adding a whole unit of Vector3.Right every frame, we are multiplying it to only get a fraction of it. This will give us the effect of slower movement

- For example, if we multiply Vector3.Right by our speed (currently set to 0.1), we get the same direction, but 1/10th the distance.

![[images/image-43.png]]

### Flipping the Character

C#

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicMovementScript : MonoBehaviour
{
    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.right * speed);

            GetComponent<SpriteRenderer>().flipX = true;
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.left * speed);
            
           GetComponent<SpriteRenderer>().flipX = false;
        }
    }
}

```

#### Code Explanation

New code adds to simple lines. On line 22, we get the Sprite Renderer component of the player, and set the 'flipX' property of it to true (meaning it is enabled). We do the same on line 24, but disable the flip (set to false). This means that when the character moves right, they are flipped and looking to the right. And when the character moves left, they are no longer flipped (looking left.)

## Variables Explained

- `[icon name="`triangle-exclamation`"]` **Warning: The following bit gets quite.. Computer Sciency.**

- **Please try to understand each section before moving on and go over it multiple times if you need to.**

- **PLEASE flag me down if confused as I can explain it more clearly on-paper!**

![[images/image-44-1024x543.png]]

Below is a slideshow. Please review each slide one by one.

![[images/image-45.png]]

![[images/image-48-1024x569.png]]

![[images/image-49-1024x561.png]]

![[images/image-50-1024x562.png]]

![[images/image-51-1024x560.png]]

![[images/image-52-1024x560.png]]

![[images/image-53-1024x562.png]]

![[images/image-54-1024x567.png]]

## Caching

C#

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicMovementScript : MonoBehaviour
{
    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.right * speed);

            GetComponent<SpriteRenderer>().flipX = true;
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            Rigidbody2D rigidbody = GetComponent<Rigidbody2D>();
            rigidbody.MovePosition(transform.position + Vector3.left * speed);
            
           GetComponent<SpriteRenderer>().flipX = false;
        }
    }
}

```

- What is in common between the 4 highlighted lines?

- We are running a function called 'GetComponent'

- It seems quite innocent, and is super helpful! It can give us a reference to any other component that is on the same object as our script.

- **What if I told you that it's actually quite expensive to run GetComponent?**

- As we are assuming that the rigidbody component will always exist on the player, why create a new variable, run an expensive function, and set a new reference to the rigidbody every single frame?

- **The way we have this set up right now is inefficient.**

- You won’t see much of a difference with just one script. But imagine if you did this on 20 scripts, all of which are on the character.What if you have 100 NPCs all running similar scripts?

- Luckily this is very easy to fix.

- So, what if instead of doing that, we create the box once, put something into it once, and then just use it throughout the code whenever we want?

- This would be a lot more efficient as we only need to do the expensive bit once! So let's do exactly that:

C#

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicMovementScript : MonoBehaviour
{
    public float speed;
    private Rigidbody2D rb;
    private SpriteRenderer sr;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        sr = GetComponent<SpriteRenderer>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            rb.MovePosition(transform.position + Vector3.right * speed);

            sr.flipX = true;
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            rb.MovePosition(transform.position + Vector3.left * speed);
            
            sr.flipX = false;
        }
    }
}

```

- Lines 8 and 9: Instead of getting the components every frame, we create two new variables to hold _references_ to each component instead.

- Lines 14 and 15: Run GetComponent within Start() to get the reference and set them to the variables. This is ok, as we are only doing it once (remember that code within Start() runs only once at the start)

- Lines 23-25 and 29-31: Use our new variables instead of the old method. We can interact with components even through their reference!

This whole process (of taking values only once, or very infrequently, then saving them in a variable) is called **Caching** and not doing this is a common mistake in games programming.

Computer science part over (for now!)

Lets do something creative again.

## Parenting Objects

- For the next part, we will need to create an item for our player to hold.

- Use Piskel (www.piskelapp.com) or a software of your choice to create a 2D pixel sprite
    - In Piskel make sure to download “single frame as PNG file”

- The item can be anything, as long as it can be attached to the player. For example, I made a sword:

![[images/image-55.png]]

- Again, please don’t spend too long on this!

- Then, import your item and create an object for it the same way you did for your character.

- Scale and position the item on your player in whatever way makes the most sense for your object:

![[images/image-57.png]]

- You may have noticed that when you import low-resolution sprites and then scale them up, they end up blurry. This is due to the Filter Mode on the asset import settings.

- To change this, select your asset in the Project panel, then in the inspector change the Filter Mode from ‘Bilinear’ to ‘Point’. Remember to hit apply!

![[images/image-58.png]]

![[images/image-59.png]]

- Parenting allows us to group objects together.

- For example, if the player is holding an item, we would want the item object to be a ‘child’ of the player object.

- To set the item as a child of the character, drag the item on top of the character in the hierarchy:

- The item is now a child of the character, meaning it will follow any transformation (movement, rotation, scaling) of the parent:

## Creating a room

- We don’t have much of a game yet… Let's add some depth to our game by adding a bouncy ball which the player tries to keep in the air

- Before that, let's add some walls and a ceiling so the ball (and player) don’t fall out of bounds!

- You can duplicate your “Floor” object to achieve this:

![[images/image-60.png]]

### Using Parenting to group objects

- Parenting is also used to group objects together (by having them all be children of an empty gameobject)

- By grouping objects within the hierarchy, we define structure which helps us manage and navigate through our scenes when they become more complex. It also allows us to move and manipulate entire groups of objects at a time.

- To group objects together, select each object you want to group (hold shift to select multiple objects), right click and select “Create Empty Parent”:

- An empty game object has no components other than a transform (this means it is invisible in game). It is a node in the scene hierarchy that can be used to organize and manage other objects within the scene.

## Create a ball

- Create a new circle sprite by right-clicking in your hierarchy and selecting 2D Object > Sprites > Circle

- Add a Rigidbody2D and a Circle Collider 2D to the circle

- Press play and try to interact with the ball

<figure>

![[images/image-62.png]]

<figcaption>

Does this happen?

</figcaption>

</figure>

### Rigidbody Constraints

- By default, rigidbodies are free to be affected by forces in all directions. We can limit the momentum of rigidbody objects by utilising constraints:

- In 2D, you can freeze the object in the x axis (left to right), y axis (up and down) or both

- You can also freeze the rotation of the object. In 2D, naturally, the object can only rotate on one axis.

- Play around with this to see how it works!

- Before moving on, freeze the rotations of both the character and the ball.

![[images/image-63.png]]

### Physics Materials

- A Physics material is an asset which holds basic properties of how an object should interact with the world

- In a 2D, those properties are Friction and Bounciness

- In the Materials folder next to your Ball Material, create a new Physics Material 2D asset by right-clicking and selectingCreate -> 2D -> Physics Material 2D

- Name it “Bouncy Physics Material”

![[images/image-64.png]]

- Now apply the physics material to our ball withing the Rigidbody2D component we added earlier:

- We can apply the material by dragging it into the “Material” field on the Rigidbody component.

- Alternatively, clicking on the circle to the right of the field will give us an option of all the Physics Material assets that we have in our project.

![[images/image-66.png]]

### Play God!

- By default, our Physics Material has a Friction value of 0.4and a Bounciness value of 0

- Press play and see how nothing interesting happens :(

![[images/image-67.png]]

- Now set the bounciness to a value between 0 and 1, for example 0.8
    - _Fun fact, the real life ““bounciness””(coefficient of restitution) of a basketball is around 0.75_

- Press play again.. That’s more promising!

- Play around with these two values and see how it affects the physics of the ball.

- What happens when you input 1 for the bounciness? 

- What happens when you input a value larger than 1?

- What if we replace the Circle Collider with a different collider?

This concludes your first deep-dive into Unity!
