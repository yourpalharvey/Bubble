package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.Users;
import com.fasterxml.jackson.databind.util.BeanUtil;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.Column;
import java.util.Objects;

@Data
@NoArgsConstructor
public class UsersModel {

    private int id;
    private String username;
    private String password;
    private String email;
    private String dob;
    private String token;
    private Boolean auth;
    private boolean isChanged;
    // private String firstName;
    // private String lastName;

    public UsersModel(Users users) {
        this.id = users.getId();
        this.username = users.getUsername();
        this.password = users.getPassword();
        this.email = users.getEmail();
        this.dob = users.getDob();
        this.token = users.getToken();
        this.auth = users.getAuth();
        // this.firstName = users.getFirstName();
        // this.lastName = users.getLastName();
    }
}


