package com.example.Team.A.Bubble.exceptions;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(String errorCode, String errorMessage) {
        super(String.format(errorCode + ". " + errorMessage));
    }

    public ResourceNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
