package com.example.Team.A.Bubble.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.Team.A.Bubble.dto.Category;

@Data
@NoArgsConstructor
public class CategoryModel {
    
    private int id;
    private String title;

    public CategoryModel(Category category)
    {
        this.id = category.getId();
        this.title = category.getTitle();
    }
}
