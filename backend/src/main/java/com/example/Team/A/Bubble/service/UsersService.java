package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.UsersModel;

import java.util.List;

public interface UsersService {
    List<Users> getAllRecords();

    boolean createUser(String username, String password, String email, String dob);
    Users signIn(SignInModel signInModel);
    Users forgetPassword(ForgetPasswordModel forgetPasswordModel);
    boolean checkUsernameIsAvailable(String username);
    boolean checkEmailIsAvailable(String email);
}
