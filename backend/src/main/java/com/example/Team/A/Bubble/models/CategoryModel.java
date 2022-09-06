package com.example.Team.A.Bubble.models;

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
    List<TagsModel> tags;

    public CategoryModel(Category category)
    {
        this.id = category.getId();
        this.title = category.getTitle();
        this.tags = !ObjectUtils.isEmpty(category.getTags()) ?
                category.getTags().stream().map(TagsModel::new).collect(Collectors.toList()) : null;
    }
}
