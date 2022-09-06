package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.Tags;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TagsRepository extends JpaRepository<Tags, Integer>{

    @Query(value = "SELECT * FROM tags;", nativeQuery = true)
    List<Tags> getAllTags();

    @Query(value = "SELECT title FROM tags WHERE id = :id ;", nativeQuery = true)
    String getTitleById(int id);
    
}
