package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.exceptions.UsernameException;
import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.repositories.UsersRepository;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UsersServiceImplementation implements UsersService {

    @NonNull
    private final UsersRepository usersRepository;

    public List<Users> getAllRecords(){
        return usersRepository.findAll();
    }

    @Override
    public boolean createUser(String username, String password, String email, String dob) {
        
        // check username is unique
        Users usernameUnique = usersRepository.findByUserName(username);

        // check email is unique
        Users emailUnique = usersRepository.findByEmail(email);

        // check age
        
        if (usernameUnique == null && emailUnique == null)
        {
            // send data to database
            return true;
        }
        else
        {
            // return error
            return false;
        }
    }

    @Override
    public Users signIn(SignInModel signInModel) {
        Users user = usersRepository.findByUserNameAndPassword(signInModel.getUsername(), signInModel.getPassword());

        if (null != user){
            return user;
        }else
            throw new RuntimeException("User Not Found");
    }

    @Override
    public Users forgetPassword(ForgetPasswordModel forgetPasswordModel) {
        Users user = usersRepository.findByEmail(forgetPasswordModel.getEmail());

        if (null != user){
            user.setPassword(forgetPasswordModel.getPassword());
            usersRepository.save(user);
        }

        return user;
    }

    @Override
    public boolean checkUsernameIsAvailable(String username) {
        
        // find user
        Users user = usersRepository.findByUserName(username);

        // if user is null, return true
        if (user == null) {
            return true;
        }
        
        return false;
    }

    @Override
    public boolean checkEmailIsAvailable(String email)
    {
        Users user = usersRepository.findByEmail(email);

        if (user == null)
        {
            return true;
        }

        return false;
    }
}
