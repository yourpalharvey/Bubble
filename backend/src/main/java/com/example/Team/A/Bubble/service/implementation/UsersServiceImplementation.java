package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.exceptions.UsernameException;
import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.TokenModel;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.repositories.UsersRepository;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
// JWT imports
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

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
    public Users createUser(UsersModel usersModel) {
        Users user = new Users();

        List<Users> users = usersRepository.findAll();
        if (users.stream().anyMatch(users1 -> Objects.equals(users1.getUsername(), usersModel.getUsername()))){
            throw new UsernameException("Username already exists");
        }
        user.setUsername(usersModel.getUsername());
        user.setPassword(usersModel.getPassword());
        user.setEmail(usersModel.getEmail());
        user.setDob(usersModel.getDob());
        // user.setFirstName(usersModel.getFirstName());
        // user.setLastName(usersModel.getLastName());

        usersRepository.save(user);

        return user;
    }

    @Override
    public Users signIn(SignInModel signInModel) {
        Users user = usersRepository.findByUserNameAndPassword(signInModel.getUsername(), signInModel.getPassword());

        if (null != user){
            // if User is not null, find id
            int userID = user.getId();

            // use id to create JWT
            try {
                Algorithm algorithm = Algorithm.HMAC256("secret");
                String token = JWT.create()
                    .withIssuer("auth0")
                    .withClaim("userID", userID)
                    .sign(algorithm);

                // return token
                user.setToken(token);
                return user;
            } catch (JWTCreationException exception){
                System.out.println(exception);
                //Invalid Signing configuration / Couldn't convert Claims.
            }

            // return Token
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
    public Users isAuth(TokenModel tokenModel) {
        String token = tokenModel.getToken();
        // decode JWT
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret"); //use more secure key
            JWTVerifier verifier = JWT.require(algorithm)
                .withIssuer("auth0")
                .build(); //Reusable verifier instance
            DecodedJWT jwt = verifier.verify(token);

            // user id
            int userid = jwt.getClaim("userID").asInt();

            // find user by id
            Users user = usersRepository.findUserById(userid);

            // add getAuth = true;
            user.setAuth(true);

            // if user != null, return true
            return user;
        } catch (JWTVerificationException exception){
            //Invalid signature/claims
            return new Users();
        }
    }
}
