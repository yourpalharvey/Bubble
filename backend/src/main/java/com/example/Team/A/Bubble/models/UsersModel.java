package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.Users;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@NoArgsConstructor
public class UsersModel {

    private int id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public UsersModel(Users users) {
        this.id = users.getId();
        this.userName = users.getUserName();
        this.firstName = users.getFirstName();
        this.lastName = users.getLastName();
        this.email = users.getEmail();
        this.password = users.getPassword();

    }
}


