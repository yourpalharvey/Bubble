package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    @Query(value = "SELECT * FROM users u WHERE u.username = :username AND u.password = :password", nativeQuery = true)
    Users findByUserNameAndPassword(String username, String password);

    @Query(value = "SELECT * FROM users u WHERE u.email = :email", nativeQuery = true)
    Users findByEmail(String email);

    @Query(value = "SELECT * FROM users u WHERE u.username = :username ;", nativeQuery = true)
    Users findByUserName(String username);

    @Query(value = "INSERT INTO users u WHERE u.username = :username AND u.password = :password AND u.email = :email AND u.dob = :dob ;", nativeQuery = true)
    Users insertUser(String username, String password, String email, String dob);

    @Query(value = "SELECT * FROM users u where u.id = :id ;", nativeQuery = true)
    Users findUserById(int id);

    @Query(value = "SELECT username FROM users where id = :id ;", nativeQuery = true)
    String findUsernameById(int id);

}

