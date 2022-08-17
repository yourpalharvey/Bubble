package com.example.Team.A.Bubble.exceptions;

public class UsernameException extends RuntimeException{
    public UsernameException(String errorCode, String errorMessage) {
        super(String.format(errorCode + ". " + errorMessage));
    }

    public UsernameException(String errorMessage) {
        super(errorMessage);
    }
}