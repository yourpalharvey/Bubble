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

    // get bubbles in Category
    @Query(value = "SELECT * FROM bubbles WHERE category_id = :id ;", nativeQuery = true)
    List<Bubbles>getBubbleByCategoryId(int id);

    // get bubble by id
    @Query(nativeQuery = true, value = "SELECT * FROM bubbles WHERE id = :id ;")
    Bubbles getBubbleById(int id);

    // get bubbles by tag
    @Query(nativeQuery = true, value = "SELECT * FROM bubbles WHERE id = (SELECT bubble_id FROM bubble_tag WHERE tag_id = :id ) ;")
    List<Bubbles> getBubbleByTag(int id);
}
