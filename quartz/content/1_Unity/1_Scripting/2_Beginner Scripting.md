---
title: Beginner Scripting
date: 2025-11-26
categories:
  - unity
author: Ross Popovs
tags:
  - resources
  - scripting
  - unity
---
# Preface


> [!NOTE] Video Loading
> Allow a few seconds for youtube video previews to load on this page


This guide is a modification of [Unity's official Beginner Scripting tutorial series]( https://learn.unity.com/course/beginner-scripting?version=2019.3). In combines all of the lessons into one page and fixes minor bugs so that all of the code examples work in Unity 6. Some lessons have been substituted.


Before beginning, make sure to [configure your default script editor](https://learn.unity.com/tutorial/set-your-default-script-editor-ide)

---

# Scripts as Behavior Components

> [!NOTE] Script differs from video
> The script for this lesson has been modified to work with the new Unity Input System.


![](https://youtu.be/Z0Z7xc18CcA)

ExampleBehaviourScript.cs
`````cs
using UnityEngine;  
using System.Collections;  
using UnityEngine.InputSystem;  
  
public class ExampleBehaviourScript : MonoBehaviour  
{  
	void Update()  
	{  
		if (Keyboard.current.rKey.wasPressedThisFrame)  
		{  
			GetComponent<Renderer> ().material.color = Color.red;  
		}  
		if (Keyboard.current.gKey.wasPressedThisFrame)  
		{  
			GetComponent<Renderer>().material.color = Color.green;  
		}  
		if (Keyboard.current.bKey.wasPressedThisFrame)  
		{  
			GetComponent<Renderer>().material.color = Color.blue;  
		}  
	}  
}
`````


---

# Variables and Functions

![](https://youtu.be/-c1RsydH2nA?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

VariablesAndFunctions.cs
```cs
using UnityEngine;
using System.Collections;

public class VariablesAndFunctions : MonoBehaviour
{   
    int myInt = 5;
    
    
    void Start ()
    {
        myInt = MultiplyByTwo(myInt);
        Debug.Log (myInt);
    }
    
    
    int MultiplyByTwo (int number)
    {
        int result;
        result = number * 2;
        return result;
    }
}
```

---

# Conventions and Syntax

![](https://youtu.be/0mks0QaWCNQ?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

BasicSyntax.cs
```csharp
using UnityEngine;
using System.Collections;

public class BasicSyntax : MonoBehaviour
{
    void Start ()
    {
        //this line is there to tell me the x position of my object

        /*Hi there!
         * this is two lines!
         * */
        Debug.Log(transform.position.x);
        
        if(transform.position.y <= 5f)
        {
            Debug.Log ("I'm about to hit the ground!");
        }
    }
}
```

---

# If Statements

![](https://youtu.be/PQihrWCOSic?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

IfStatements.cs
```csharp
using UnityEngine;
using System.Collections;

public class IfStatements : MonoBehaviour
{
    float coffeeTemperature = 85.0f;
    float hotLimitTemperature = 70.0f;
    float coldLimitTemperature = 40.0f;
    

    void Update ()
    {
        if(Input.GetKeyDown(Keyboard.current.spaceKey.wasPressedThisFrame))
            TemperatureTest();
        
        coffeeTemperature -= Time.deltaTime * 5f;
    }
    
    
    void TemperatureTest ()
    {
        // If the coffee's temperature is greater than the hottest drinking temperature...
        if(coffeeTemperature > hotLimitTemperature)
        {
            // ... do this.
            print("Coffee is too hot.");
        }
        // If it isn't, but the coffee temperature is less than the coldest drinking temperature...
        else if(coffeeTemperature < coldLimitTemperature)
        {
            // ... do this.
            print("Coffee is too cold.");
        }
        // If it is neither of those then...
        else
        {
            // ... do this.
            print("Coffee is just right.");
        }
    }
}
```

---

# Loops

![](https://youtu.be/Jefkb3Gm7vE?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

## ForLoop.cs
```csharp
using UnityEngine;
using System.Collections;

public class ForLoop : MonoBehaviour
{
    int numEnemies = 3;
    
    
    void Start ()
    {
        for(int i = 0; i < numEnemies; i++)
        {
            Debug.Log("Creating enemy number: " + i);
        }
    }
}
```

## WhileLoop.cs
```csharp
using UnityEngine;
using System.Collections;

public class WhileLoop : MonoBehaviour
{
    int cupsInTheSink = 4;
    
    
    void Start ()
    {
        while(cupsInTheSink > 0)
        {
            Debug.Log ("I've washed a cup!");
            cupsInTheSink--;
        }
    }
}
```

## DoWhileLoop.cs
```csharp
using UnityEngine;
using System.Collections;

public class DoWhileLoop : MonoBehaviour 
{
    void Start()
    {
        bool shouldContinue = false;
        
        do
        {
            print ("Hello World");
            
        }while(shouldContinue == true);
    }
}
```

## ForeachLoop.cs
```csharp
using UnityEngine;
using System.Collections;

public class ForeachLoop : MonoBehaviour 
{   
    void Start () 
    {
        string[] strings = new string[3];
        
        strings[0] = "First string";
        strings[1] = "Second string";
        strings[2] = "Third string";
        
        foreach(string item in strings)
        {
            print (item);
        }
    }
}
```

---

# Scope and Access Modifiers

![](https://youtu.be/_0oBLCJcpCs?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

## ScopeAndAccessModifiers.cs
```csharp
using UnityEngine;
using System.Collections;

public class ScopeAndAccessModifiers : MonoBehaviour
{
    public int alpha = 5;
    
    
    private int beta = 0;
    private int gamma = 5;
    
    
    private AnotherClass myOtherClass;
    
    
    void Start ()
    {
        alpha = 29;
        
        myOtherClass = new AnotherClass();
        myOtherClass.FruitMachine(alpha, myOtherClass.apples);
    }
    
    
    void Example (int pens, int crayons)
    {
        int answer;
        answer = pens * crayons * alpha;
        Debug.Log(answer);
    }
    
    
    void Update ()
    {
        Debug.Log("Alpha is set to: " + alpha);
    }
}
```

## AnotherClass.cs
```csharp
using UnityEngine;
using System.Collections;

public class AnotherClass
{
    public int apples;
    public int bananas;
    
    
    private int stapler;
    private int sellotape;
    
    
    public void FruitMachine (int a, int b)
    {
        int answer;
        answer = a + b;
        Debug.Log("Fruit total: " + answer);
    }
    
    
    private void OfficeSort (int a, int b)
    {
        int answer;
        answer = a + b;
        Debug.Log("Office Supplies total: " + answer);
    }
}
```

---

# Awake() and Start()

![](https://youtu.be/4QdjoV63wjM?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

AwakeAndStart.cs
```csharp
using UnityEngine;
using System.Collections;

public class AwakeAndStart : MonoBehaviour
{
    void Awake ()
    {
        Debug.Log("Awake called.");
    }
    
    
    void Start ()
    {
        Debug.Log("Start called.");
    }
}
```

---

# Update and FixedUpdate()

![](https://youtu.be/u42aWzAIAqg?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

UpdateAndFixedUpdate.cs
```csharp
using UnityEngine;
using System.Collections;

public class UpdateAndFixedUpdate : MonoBehaviour
{
    void FixedUpdate ()
    {
        Debug.Log("FixedUpdate time :" + Time.deltaTime);
    }
    
    
    void Update ()
    {
        Debug.Log("Update time :" + Time.deltaTime);
    }
}
```

---
# Vector Maths

![](https://youtu.be/e3z91RqZPAk?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

For more on these topics, see the Unity Manual:

**Vector2**
[https://docs.unity3d.com/ScriptReference/Vector2.html](https://docs.unity3d.com/ScriptReference/Vector2.html)

**Vector3**
[https://docs.unity3d.com/ScriptReference/Vector3.html](https://docs.unity3d.com/ScriptReference/Vector3.html)

**Vector3.magnitude**
[https://docs.unity3d.com/ScriptReference/Vector3-magnitude.html](https://docs.unity3d.com/ScriptReference/Vector3-magnitude.html)

**Vector3.Dot**
[https://docs.unity3d.com/ScriptReference/Vector3.Dot.html](https://docs.unity3d.com/ScriptReference/Vector3.Dot.html)

---

# Enabling and Disabling Components

![](https://youtu.be/PCdg3cnQfZ4?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

EnableComponents.cs
```csharp
using UnityEngine;
using System.Collections;

public class EnableComponents : MonoBehaviour
{
    private Light myLight;
    
    
    void Start ()
    {
        myLight = GetComponent<Light>();
    }
    
    
    void Update ()
    {
        if(Input.GetKeyUp(KeyCode.Space))
        {
            myLight.enabled = !myLight.enabled;
        }
    }
}
```

---

# Activating GameObjects

![](https://youtu.be/MhPFB-rAdlg?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

ActiveObjects.cs
```csharp
using UnityEngine;
using System.Collections;

public class ActiveObjects : MonoBehaviour
{
    void Start ()
    {
        gameObject.SetActive(false);
    }
}
```

CheckState.cs
```csharp
using UnityEngine;
using System.Collections;

public class CheckState : MonoBehaviour
{
    public GameObject myObject;
    
    
    void Start ()
    {
        Debug.Log("Active Self: " + myObject.activeSelf);
        Debug.Log("Active in Hierarchy" + myObject.activeInHierarchy);
    }
}
```

---

# Translate and Rotate

> [!NOTE] Script differs from video
> The script for this lesson has been modified to work with the new Unity Input System.

![](https://youtu.be/32JkMANaMpk?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

TransformFunctions.cs
```csharp
using UnityEngine;
using System.Collections;
using UnityEngine.InputSystem;

public class TransformFunctions : MonoBehaviour
{
    public float moveSpeed = 10f;
    public float turnSpeed = 50f;
    
    
    void Update ()
    {
        if(Keyboard.current.upArrowKey.wasPressedThisFrame)
            transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
        
        if(Keyboard.current.dowmArrowKey.wasPressedThisFrame)
            transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
        
        if(Keyboard.current.leftArrowKey.wasPressedThisFrame)
            transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);
        
        if(Keyboard.current.rightArrowKey.wasPressedThisFrame)
            transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);
    }
}
```

---

# LookAt()

![](https://youtu.be/cAAqf5J7_9w?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

CameraLookAt.cs
```csharp
using UnityEngine;
using System.Collections;

public class CameraLookAt : MonoBehaviour
{
    public Transform target;
    
    void Update ()
    {
        transform.LookAt(target);
    }
}
```

---

# Linear Interpolation (Lerp)

When making games it can sometimes be useful to linearly interpolate between two values. This is done with a function called Lerp. Linearly interpolating is finding a value that is some percentage between two given values. For example, we could linearly interpolate between the numbers 3 and 5 by 50% to get the number 4. This is because 4 is 50% of the way between 3 and 5.

In Unity there are several Lerp functions that can be used for different types. For the example we have just used, the equivalent would be the Mathf.Lerp function and would look like this:

```csharp
// In this case, result = 4
float result = Mathf.Lerp (3f, 5f, 0.5f);
```

The Mathf.Lerp function takes 3 float parameters: one representing the value to interpolate from; another representing the value to interpolate to and a final float representing how far to interpolate. In this case, the interpolation value is 0.5 which means 50%. If it was 0, the function would return the ‘from’ value and if it was 1 the function would return the ‘to’ value.

Other examples of Lerp functions include Color.Lerp and Vector3.Lerp. These work in exactly the same way as Mathf.Lerp but the ‘from’ and ‘to’ values are of type Color and Vector3 respectively. The third parameter in each case is still a float representing how much to interpolate. The result of these functions is finding a colour that is some blend of two given colours and a vector that is some percentage of the way between the two given vectors.

Let’s look at another example:

```csharp
Vector3 from = new Vector3 (1f, 2f, 3f);
Vector3 to = new Vector3 (5f, 6f, 7f);

// Here result = (4, 5, 6)
Vector3 result = Vector3.Lerp (from, to, 0.75f);
```

In this case the result is (4, 5, 6) because 4 is 75% of the way between 1 and 5; 5 is 75% of the way between 2 and 6 and 6 is 75% of the way between 3 and 7.

The same principle is applied when using Color.Lerp. In the Color struct, colours are represented by 4 floats representing red, blue, green and alpha. When using Lerp, these floats are interpolated just as with Mathf.Lerp and Vector3.Lerp.

Under some circumstances Lerp functions can be used to smooth a value over time. Consider the following piece of code:

```csharp
void Update ()
{
    light.intensity = Mathf.Lerp(light.intensity, 8f, 0.5f);
}
```

If the intensity of the light starts off at 0 then after the first update it will be set to 4. The next frame it will be set to 6, then to 7, then to 7.5 and so on. Thus over several frames, the lights intensity will tend towards 8 but the rate of its change will slow as it approaches its target. Note that this happens over the course of several frames. If we wanted this to not be frame rate dependent then we could use the following code:

```csharp
void Update ()
{
    light.intensity = Mathf.Lerp(light.intensity, 8f, 0.5f * Time.deltaTime);
}
```

This would mean the change to intensity would happen per second instead of per frame.

Please note that when smoothing a value it is often best to use the SmoothDamp function. Only use Lerp for smoothing if you are sure of the effect you want.

---

# Destroy()

> [!NOTE] Scripts differs from video
> The scripts for this lesson has been modified to work with the new Unity Input System.

![](https://youtu.be/pRDj3jss5t8?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

DestroyBasic.cs
```csharp
using UnityEngine;
using System.Collections;

public class DestroyBasic : MonoBehaviour
{
    void Update ()
    {
        if(Keyboard.current.spaceKey.wasPressedThisFrame)
        {
            Destroy(gameObject);
        }
    }
}
```

DestroyOther.cs
```csharp
using UnityEngine;
using System.Collections;

public class DestroyOther : MonoBehaviour
{
    public GameObject other;
    
    
    void Update ()
    {
        if(Keyboard.current.spaceKey.wasPressedThisFrame)
        {
            Destroy(other);
        }
    }
}
```

DestroyComponent.cs
```csharp
using UnityEngine;
using System.Collections;

public class DestroyComponent : MonoBehaviour
{
    void Update ()
    {
        if(Keyboard.current.spaceKey.wasPressedThisFrame)
        {
            Destroy(GetComponent<MeshRenderer>());
        }
    }
}
```

---

# Object Mouse Interaction

Detecting mouse events on GameObjects requires a little bit more setup in Unity 6:
- The object you are interacting with must have a collider component
- Your scene must have an Event System object (**Create**>**UI**>**Event System**)
- Your camera must have Physics (2D) Raycaster component

MouseClick.cs
```cs
using UnityEngine;  
using System.Collections;  
using UnityEngine.EventSystems;  
  
public class MouseClick : MonoBehaviour, IPointerClickHandler  
{  
  
	private Rigidbody2D rb;  
	  
	private void Awake()  
	{  
		rb = GetComponent<Rigidbody2D>();  
	}  
	  
	public void OnPointerClick(PointerEventData eventData)  
	{  
		Debug.Log("Object Clicked!");  
		rb.AddForce(Vector3.up * 500f);  
	}  
}
```

The above example is for clicking, using the `IPointerClickHandler`

You can find examples for other handlers (such as PointerEnter, PointerExit, Drag and Drop) from this page: https://docs.unity3d.com/2019.1/Documentation/ScriptReference/EventSystems.IPointerClickHandler.html

The concept is the same for all handlers: Implement the correct interface (see line 5) and add the correct function. You can add multiple handlers to the same script.

---

# GetComponent<>()

![](https://youtu.be/xbDKC4zP9XY?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

AnotherScript.cs
```csharp
using UnityEngine;
using System.Collections;

public class AnotherScript : MonoBehaviour
{
    public int playerScore = 9001;
}
```

YetAnotherScript.cs
```csharp
using UnityEngine;
using System.Collections;

public class YetAnotherScript : MonoBehaviour
{
    public int numberOfPlayerDeaths = 3;
}
```

UsingOtherComponents.cs
```csharp
using UnityEngine;
using System.Collections;

public class UsingOtherComponents : MonoBehaviour
{
    public GameObject otherGameObject;
    
    
    private AnotherScript anotherScript;
    private YetAnotherScript yetAnotherScript;
    private BoxCollider boxCol;
    
    
    void Awake ()
    {
        anotherScript = GetComponent<AnotherScript>();
        yetAnotherScript = otherGameObject.GetComponent<YetAnotherScript>();
        boxCol = otherGameObject.GetComponent<BoxCollider>();
    }
    
    
    void Start ()
    {
        boxCol.size = new Vector3(3,3,3);
        Debug.Log("The player's score is " + anotherScript.playerScore);
        Debug.Log("The player has died " + yetAnotherScript.numberOfPlayerDeaths + " times");
    }
}
```

# DeltaTime

> [!NOTE] Script differs from video
> The script for this lesson has been modified to work with the new Unity Input System.

![](https://youtu.be/Gcoj3llfzSw?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

UsingDeltaTime.cs
```cs
using UnityEngine;  
using UnityEngine.InputSystem;  
  
public class UsingDeltaTime : MonoBehaviour  
{  
	public float speed = 8f;  
	public float countdown = 3.0f;  
	  
	void Update()  
	{  
		countdown -= Time.deltaTime;  
		  
		if (countdown <= 0.0f)  
		{  
			GetComponent<Light>().enabled = true;  
		}  
		  
		if (Keyboard.current.rightArrowKey.wasPressedThisFrame)  
		{  
			transform.position += new Vector3(speed * Time.deltaTime, 0.0f, 0.0f);  
		}  
	}  
}
```

# Data Types

![](https://youtu.be/IVcx-tSxjys?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

DatatypeScript.cs
```csharp
using UnityEngine;
using System.Collections;

public class DatatypeScript : MonoBehaviour 
{
    void Start () 
    {
        //Value type variable
        Vector3 pos = transform.position;
        pos = new Vector3(0, 2, 0);
        
        //Reference type variable
        Transform tran = transform;
        tran.position = new Vector3(0, 2, 0);
    }
}
```


---

# Classes and Structs

![](https://youtu.be/cd_7gI9cEuw)

CAS.cs (Basic Class Example)
```cs
using UnityEngine;  
  
public class CAS : MonoBehaviour  
	{  
	public class MyClass  
		{  
			public int Health;  
			public int Level;  
			public int Experience;  
		}  
	  
	void Start()  
	{  
		MyClass Player = new MyClass();  
		  
		Player.Health = 100;  
		Player.Level = 5;  
		Player.Experience = 100;  
		  
		Debug.Log(Player.Health);  
		Debug.Log(Player.Level);  
		Debug.Log(Player.Experience);  
	}  
  
}
```

CAS.cs (Class Example with Constructor)
```cs
using UnityEngine;  
  
public class CAS : MonoBehaviour  
{  
	public class MyClass  
	{  
		public MyClass(int hp, int lvl, int xp)  
		{  
			Health = hp;  
			Level = lvl;  
			Experience = xp;  
		}  
		public int Health;  
		public int Level;  
		public int Experience;  
	}  
	  
	void Start()  
	{  
		MyClass Player = new MyClass(100, 5, 100);  
		  
		Debug.Log(Player.Health);  
		Debug.Log(Player.Level);  
		Debug.Log(Player.Experience);  
	}  
  
}
```

# Instantiate

> [!NOTE] Script differs from video
> The script for this lesson has been modified to work with the new Unity Input System.

![](https://youtu.be/Q3u0x8VRJS4?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

UsingInstantiate.cs
```csharp
using UnityEngine;
using System.Collections;

public class UsingInstantiate : MonoBehaviour
{
    public Rigidbody rocketPrefab;
    public Transform barrelEnd;
    
    
    void Update ()
    {
        if(Keyboard.current.spaceKey.wasPressedThisFrame)
        {
            Rigidbody rocketInstance;
            rocketInstance = Instantiate(rocketPrefab, barrelEnd.position, barrelEnd.rotation) as Rigidbody;
            rocketInstance.AddForce(barrelEnd.forward * 5000);
        }
    }
}
```

RocketDestruction.cs
```csharp
using UnityEngine;
using System.Collections;

public class RocketDestruction : MonoBehaviour
{
    void Start()
    {
        Destroy (gameObject, 1.5f);
    }
}
```

---

# Arrays

![](https://youtu.be/Zn4BDIXhy-M?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

```csharp
using UnityEngine;
using System.Collections;

public class Arrays : MonoBehaviour
{
    public GameObject[] players;

    void Start ()
    {
        players = GameObject.FindGameObjectsWithTag("Player");
        
        for(int i = 0; i < players.Length; i++)
        {
            Debug.Log("Player Number "+i+" is named "+players[i].name);
        }
    }
}
```

---

# Invoke

![](https://youtu.be/-YgM4DXGeq4?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

InvokeScript.cs
```csharp
using UnityEngine;
using System.Collections;

public class InvokeScript : MonoBehaviour 
{
    public GameObject target;
    
    
    void Start()
    {
        Invoke ("SpawnObject", 2);
    }
    
    void SpawnObject()
    {
        Instantiate(target, new Vector3(0, 2, 0), Quaternion.identity);
    }
}
```

InvokeRepeating.cs
```csharp
using UnityEngine;
using System.Collections;

public class InvokeRepeating : MonoBehaviour 
{
    public GameObject target;
    
    
    void Start()
    {
        InvokeRepeating("SpawnObject", 2, 1);
    }
    
    void SpawnObject()
    {
        float x = Random.Range(-2.0f, 2.0f);
        float z = Random.Range(-2.0f, 2.0f);
        Instantiate(target, new Vector3(x, 2, z), Quaternion.identity);
    }
}
```

# Enumeration (Enums)

![](https://youtu.be/L2E2aB1CMYw?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

CardinalDirection.cs
```csharp
using UnityEngine;
using System.Collections;

public class CardinalDirection : MonoBehaviour 
{
    enum Direction {North, East, South, West};

        void Start () 
    {
        Direction myDirection;
        
        myDirection = Direction.North;
    }
    
    Direction ReverseDirection (Direction dir)
    {
        if(dir == Direction.North)
            dir = Direction.South;
        else if(dir == Direction.South)
            dir = Direction.North;
        else if(dir == Direction.East)
            dir = Direction.West;
        else if(dir == Direction.West)
            dir = Direction.East;
        
        return dir;     
    }
}
```

---

# Switch Statements

![](https://youtu.be/-PWvI3q6_OE?list=PLX2vGYjWbI0S9-X2Q021GUtolTqbUBB9B)

ConversationScript.cs
```csharp
using UnityEngine;
using System.Collections;

public class ConversationScript : MonoBehaviour 
{
    public int intelligence = 5;
    
    
    void Greet()
    {
        switch (intelligence)
        {
        case 5:
            print ("Why hello there good sir! Let me teach you about Trigonometry!");
            break;
        case 4:
            print ("Hello and good day!");
            break;
        case 3:
            print ("Whadya want?");
            break;
        case 2:
            print ("Grog SMASH!");
            break;
        case 1:
            print ("Ulg, glib, Pblblblblb");
            break;
        default:
            print ("Incorrect intelligence level.");
            break;
        }
    }
}
```