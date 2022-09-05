package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = "SELECT DISTINCT c.id, c.title, sc.sub_category_id, sc.sub_category_title from category c Inner Join sub_category sc ON sc.category_id = c.id WHERE sc.sub_category_title LIKE %:search% OR c.title LIKE %:search%", nativeQuery = true)
    List<Category> findSearchItems(String search);


}
