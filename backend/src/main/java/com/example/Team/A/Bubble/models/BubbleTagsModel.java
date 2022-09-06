package com.example.Team.A.Bubble.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.Team.A.Bubble.dto.BubbleTags;

@Data
@NoArgsConstructor
public class BubbleTagsModel {
    
    private int id;
    private int bubble_id;
    private int tag_id;

    public BubbleTagsModel(BubbleTags bubbleTags)
    {
        this.id = bubbleTags.getId();
        this.bubble_id = bubbleTags.getBubble_id();
        this.tag_id = bubbleTags.getTag_id();
    }
}
