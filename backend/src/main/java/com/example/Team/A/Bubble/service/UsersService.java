package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.TokenModel;
import com.example.Team.A.Bubble.models.UsersModel;

import java.util.List;

public interface UsersService {
    List<Users> getAllRecords();

    Users createAndUpdateUser(UsersModel usersModel,Integer id);
    Users signIn(SignInModel signInModel);
    Users forgetPassword(ForgetPasswordModel forgetPasswordModel);
    boolean checkUsernameIsAvailable(String username);
    Users isAuth(TokenModel tokenModel);
    String getUsernameFromId(int id);
}
