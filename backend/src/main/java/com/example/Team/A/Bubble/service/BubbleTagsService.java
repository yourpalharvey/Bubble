package com.example.Team.A.Bubble.service;

import java.util.List;
import com.example.Team.A.Bubble.dto.BubbleTags;
import com.example.Team.A.Bubble.models.BubbleTagsModel;

public interface BubbleTagsService {
    
    // get all bubbleTags
    List<BubbleTags> getAllBubbleTags();
}