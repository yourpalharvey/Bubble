package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.UsersModel;

import java.util.List;

public interface UsersService {
    List<Users> getAllRecords();

    Users createUser(UsersModel usersModel);
    Users signIn(SignInModel signInModel);
}
