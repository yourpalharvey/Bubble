package com.example.Team.A.Bubble.service;

import java.util.List;
import com.example.Team.A.Bubble.dto.BubbleTags;
import com.example.Team.A.Bubble.models.BubbleTagsModel;

public interface BubbleTagsService {
    
    // get all bubbleTags
    List<BubbleTags> getAllBubbleTags();

    // get bubble tags by bubbleId
    List<BubbleTags> getBubbleTagsByBubbleId(int id);

    // add bubble Tag
    BubbleTags addBubbleTag(BubbleTagsModel bubbleTag);

    // get BubbleIds from Tag id
    List<Integer> getBubbleIdsByTagId(int id);
}
