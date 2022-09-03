package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.exceptions.ResourceNotFoundException;
import com.example.Team.A.Bubble.exceptions.UsernameException;
import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.TokenModel;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.repositories.UsersRepository;
import com.example.Team.A.Bubble.service.UsersService;
import com.example.Team.A.Bubble.util.PasswordGenerator;
import com.fasterxml.jackson.databind.util.BeanUtil;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
// JWT imports
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Objects;
import java.util.Properties;

@Service
@RequiredArgsConstructor
public class UsersServiceImplementation implements UsersService {

    @NonNull
    private final UsersRepository usersRepository;

    public List<Users> getAllRecords() {
        return usersRepository.findAll();
    }

    @Override
    public Users createAndUpdateUser(UsersModel usersModel, Integer id) {
        Users user;

        List<Users> users = usersRepository.findAll();

        if (id != null) {
            user = usersRepository.findUserById(id);

            if (user != null) {
                user = processUser(usersModel, user, users, usersModel.isChanged());
            } else {
                throw new ResourceNotFoundException(HttpStatus.NOT_FOUND.getReasonPhrase());
            }
        } else {
            user = new Users();
            user = processUser(usersModel, user, users, true);

            Properties props = new Properties();
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");

            JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
            mailSender.setHost("smtp.gmail.com");
            mailSender.setPort(587);
            mailSender.setUsername("teambubble44@gmail.com");
            mailSender.setPassword("tygpbkadibcbqrkq");

            try {
                MimeMessage message = mailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message, true);

                if (user.getEmail() != null){
                    helper.setTo(user.getEmail());
                    helper.setSubject("Welcome!");
                    helper.setText("Your account has been verified\n" +
                            "\n" +
                            "Hi, " + " " + user.getUsername() + "\n" + "\n" +
                            "Congratulations, your account has been created!\n" +
                            "As always, if you have any questions please don’t hesitate to reach out to us via email at team44bubble@gmail.com\n" +
                            "\n" +
                            "Thanks\n" +
                            "Team Bubble");

                    mailSender.setJavaMailProperties(props);
                    mailSender.send(message);
                }

            } catch (Exception exception) {
                exception.printStackTrace();
            }
        }
        // user.setFirstName(usersModel.getFirstName());
        // user.setLastName(usersModel.getLastName());


        return user;
    }

    @Override
    public Users signIn(SignInModel signInModel) {
        Users user = usersRepository.findByUserNameAndPassword(signInModel.getUsername(), signInModel.getPassword());

        if (null != user) {
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
            } catch (JWTCreationException exception) {
                System.out.println(exception);
                //Invalid Signing configuration / Couldn't convert Claims.
            }

            // return Token
            return user;
        } else
            throw new RuntimeException("User Not Found");
    }

    @Override
    public Users forgetPassword(ForgetPasswordModel forgetPasswordModel) {
        Users user = usersRepository.findByEmail(forgetPasswordModel.getEmail());
        usersRepository.save(user);

        user.setPassword(new PasswordGenerator().generateRandomPassword());

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername("teambubble44@gmail.com");
        mailSender.setPassword("tygpbkadibcbqrkq");

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            if (user.getEmail() != null){
                helper.setTo(user.getEmail());
                helper.setSubject("Password Reset");
                helper.setText("Dear, " + " " + user.getUsername() + "\n" + "\n" +
                        "We have received the request to reset the password for your account.\n \n" +
                        "Your New Password is: " + " " + " " + user.getPassword() +
                        "\n \n" +
                        "If you did not request your password to be reset, Please contact us immediately via email at team44bubble@gmail.com" + "\n" + "\n" +
                        "Thanks\n" +
                        "Team Bubble");

                mailSender.setJavaMailProperties(props);
                mailSender.send(message);
            }

        } catch (Exception exception) {
            exception.printStackTrace();
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
        } catch (JWTVerificationException exception) {
            //Invalid signature/claims
            return new Users();
        }
    }

    public boolean checkUserName(List<Users> list, String userName) {
        return list.stream().anyMatch(users1 -> Objects.equals(users1.getUsername(), userName));
    }

    public Users processUser(UsersModel usersModel, Users user, List<Users> users, boolean isChanged) {

        if (isChanged){
            if (checkUserName(users, usersModel.getUsername())) {
                throw new ResourceNotFoundException("UserName Already exists");
            }
        }
        user.setUsername(usersModel.getUsername());
        user.setPassword(usersModel.getPassword());
        user.setEmail(usersModel.getEmail());
        user.setDob(usersModel.getDob());

        usersRepository.save(user);

        return user;
    }

    @Override
    public String getUsernameFromId(int id)
    {
        return usersRepository.findUsernameById(id);
    }
}
