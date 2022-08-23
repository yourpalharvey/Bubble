package com.example.Team.A.Bubble.apis;

import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
@RequiredArgsConstructor
@ResponseBody
public class UsersController {

    @NonNull
    private final UsersService usersService;

    @RequestMapping(method = RequestMethod.GET)
    public List<UsersModel> fetchAllRecords(){
        return usersService.getAllRecords().stream().map(UsersModel::new).collect(Collectors.toList());
    }

    @RequestMapping(method = RequestMethod.POST)
    public boolean signUpUser(@RequestBody String json){
        try {
            // get data from json
            JSONObject object = new JSONObject(json);
            String username = object.getString("username");
            String password = object.getString("password");
            String dob = object.getString("age");
            String email = object.getString("email");
            
            return usersService.createUser(username, password, email, dob);
        } catch (Exception e) {
            return false;
        }
    
    }

    @RequestMapping(value = "/signIn", method = RequestMethod.POST)
    public ResponseEntity<UsersModel> signInUser(@RequestBody SignInModel signInModel){
        return ResponseEntity.ok(new UsersModel(usersService.signIn(signInModel)));
    }

    @RequestMapping(value = "/forgetPassword", method = RequestMethod.PUT)
    public ResponseEntity<UsersModel> signInUser(@RequestBody ForgetPasswordModel forgetPasswordModel){
        return ResponseEntity.ok(new UsersModel(usersService.forgetPassword(forgetPasswordModel)));
    }

    @RequestMapping(value = "/check-username", method = RequestMethod.POST)
    public boolean checkUsername(@RequestBody String json) {
        try {
            // get data from json
            JSONObject object = new JSONObject(json);
            String username = object.getString("username");
            
            // return from username
            return usersService.checkUsernameIsAvailable(username);
        } catch (Exception e) {
            return false;
        }
    }
}
