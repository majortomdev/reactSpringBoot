package com.majortomdev.reactBootBackend.exception;
//created by joek

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id){
        super("Couldnt find the user with id: "+id);
    }
}
