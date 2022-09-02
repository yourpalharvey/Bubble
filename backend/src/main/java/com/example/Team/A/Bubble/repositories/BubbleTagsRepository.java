package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.BubbleTags;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BubbleTagsRepository extends JpaRepository<BubbleTags, Integer> {
    
    // get all BubbleTags
    @Query(value = "SELECT * FROM bubble_tag;", nativeQuery = true)
    List<BubbleTags> getAllBubbleTags();
}
