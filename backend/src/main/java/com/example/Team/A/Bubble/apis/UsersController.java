package com.example.Team.A.Bubble.apis;

import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.TokenModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
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
    public ResponseEntity<UsersModel> signUpUser(@RequestBody UsersModel usersModel) {
        return ResponseEntity.ok(new UsersModel(usersService.createAndUpdateUser(usersModel, null)));
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.PUT)
    public ResponseEntity<UsersModel> updateUser(@PathVariable(value = "id") Integer id,
                                                 @RequestBody UsersModel usersModel) {
        return ResponseEntity.ok(new UsersModel(usersService.createAndUpdateUser(usersModel, id)));
    }

    @RequestMapping(value = "/signIn", method = RequestMethod.POST)
    public ResponseEntity<String> signInUser(@RequestBody SignInModel signInModel){
        JSONObject returnObj = new JSONObject();
        returnObj.append("token", new UsersModel(usersService.signIn(signInModel)).getToken().toString());
        return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
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

    @RequestMapping(value = "/isAuth", method = RequestMethod.POST)
    public ResponseEntity<String> isAuthorised(@RequestBody TokenModel token) {
        JSONObject returnObj = new JSONObject();
        returnObj.append("authorised", new UsersModel(usersService.isAuth(token)).getAuth().toString());
        return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
    }

    @RequestMapping(value = "/getUsername", method = RequestMethod.POST)
    public ResponseEntity<String> getUsernameFromToken(@RequestBody TokenModel token) {
        JSONObject returnObj = new JSONObject();
        returnObj.append("username", new UsersModel(usersService.isAuth(token)).getUsername().toString());
        return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
    }

    @RequestMapping(value = "/getId", method = RequestMethod.POST)
    public ResponseEntity<String> getIdFromToken(@RequestBody TokenModel token) {
        JSONObject returnObj = new JSONObject();
        returnObj.append("id", new UsersModel(usersService.isAuth(token)).getId());
        return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
    }

    @RequestMapping(value = "/getUserFromId/{id}", method = RequestMethod.GET)
    public ResponseEntity<String> getUserFromId (@PathVariable( value = "id") int id)
    {
        JSONObject returnObj = new JSONObject();
        returnObj.append("username", usersService.getUsernameFromId(id));
        return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
    }
}
