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
    private String password;
    private String email;
    private String dob;

    public UsersModel(Users users) {
        this.id = users.getId();
        this.username = users.getUsername();
        // this.firstName = users.getFirstName();
        // this.lastName = users.getLastName();
        this.password = users.getPassword();
        this.email = users.getEmail();
        this.dob = users.getDob();
    }
}


