package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.Users;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@NoArgsConstructor
public class UsersModel {

    private int id;
    private String username;
    // private String firstName;
    // private String lastName;
    private String email;
    private String password;
    private String dob;

    public UsersModel(Users users) {
        this.id = users.getId();
        this.username = users.getUsername();
        this.email = users.getEmail();
        this.password = users.getPassword();
        this.dob = users.getDob();
    }
}


