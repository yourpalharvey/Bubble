package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.Bubbles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BubblesRepository extends JpaRepository<Bubbles, Integer>{

    // get all bubbles
    @Query(value = "SELECT * FROM bubbles;", nativeQuery = true)
    List<Bubbles> getAllBubbles();
    
}
