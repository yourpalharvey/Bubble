package com.example.Team.A.Bubble.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.Team.A.Bubble.dto.Category;
import com.example.Team.A.Bubble.dto.Category;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class CategoryModel {

    private int id;
    private String title;

    public CategoryModel(Category category)
    {
        this.id = category.getId();
        this.title = category.getTitle();
    private int categoryId;
    private String categoryTitle;
    private List<SubCategoryModel> subCategoryModels;

    public CategoryModel(Category category){
        this.categoryId = category.getCategoryId();
        this.categoryTitle = category.getCategoryTitle();
        this.subCategoryModels = !ObjectUtils.isEmpty(category.getSubCategories()) ?
                category.getSubCategories().stream().map(SubCategoryModel::new).collect(Collectors.toList()) : null;
    }
}
