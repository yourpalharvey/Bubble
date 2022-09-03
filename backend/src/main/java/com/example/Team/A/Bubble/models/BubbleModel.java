package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.Bubbles;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class BubbleModel {

    private int id;
    private String title;
    private int category_id;
    private String image;
    


    public BubbleModel(Bubbles bubble)
    {
        this.id = bubble.getId();
        this.title = bubble.getTitle();
        this.category_id = bubble.getCategory_id();
        this.image = bubble.getImage();
        

    }

}