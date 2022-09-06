package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Bubbles;
import com.example.Team.A.Bubble.models.BubbleModel;

import java.util.List;

public interface BubbleService {

    List<Bubbles> getAllBubbles();
    List<Bubbles> getBubblesByCategoryId(int id);
    Bubbles getBubbleById(int id);
    List<Bubbles> getBubblesByTag(int id);

    Bubbles addBubble(BubbleModel bubble);
    
}
