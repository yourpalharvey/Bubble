package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Bubbles;
import com.example.Team.A.Bubble.models.BubbleModel;

import java.util.List;

public interface BubbleService {

    List<Bubbles> getAllBubbles();

    Bubbles addBubble(BubbleModel bubble);
    
}
