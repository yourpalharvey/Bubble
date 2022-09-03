package com.example.Team.A.Bubble.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.example.Team.A.Bubble.dto.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>
{
    // get all categories
    @Query(value = "SELCT * FROM category;", nativeQuery = true)
    List<Category> getAllCategories();
}
