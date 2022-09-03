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

    // get bubble tags by bubble id
    @Query(value = "SELECT * FROM bubble_tag WHERE bubble_id = :id ;", nativeQuery = true)
    List<BubbleTags> getBubbleTagsByBubbleId(int id);

    @Query(value = "SELECT bubble_id FROM bubble_tag WHERE tag_id = :id ;", nativeQuery = true)
    List<Integer> getBubbleIdsFromTagId(int id);
}
