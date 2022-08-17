package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

}

