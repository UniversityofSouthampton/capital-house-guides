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
