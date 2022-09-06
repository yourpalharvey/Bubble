package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.Tags;
import com.example.Team.A.Bubble.repositories.TagsRepository;
import com.fasterxml.jackson.databind.util.BeanUtil;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.Column;

import java.util.List;
import java.util.Objects;

@Data
@NoArgsConstructor
public class TagsModel {

    private int id;
    private String title;
    private int category_id;
    private String image;

    public TagsModel(Tags tags) {
        this.id = tags.getId();
        this.title = tags.getTitle();
        this.category_id = tags.getCategory_id();
        this.image = tags.getImage();
        
    }
}


