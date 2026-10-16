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
