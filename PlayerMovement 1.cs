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
