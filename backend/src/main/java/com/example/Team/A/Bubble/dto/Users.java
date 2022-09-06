package com.example.Team.A.Bubble.dto;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @Column(name = "id")
    private Integer id;

    @Column(name = "username")
    private String username;

    // @Column(name = "firstName")
    // private String firstName;

    // @Column(name = "lastName")
    // private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "dob")
    private String dob;

    @Column(name = "token")
    private String token;

    @Column(name = "auth")
    private Boolean auth;



}
