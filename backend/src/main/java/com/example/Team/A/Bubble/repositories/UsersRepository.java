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
}

