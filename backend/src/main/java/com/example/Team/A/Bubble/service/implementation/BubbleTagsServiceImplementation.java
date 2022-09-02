package com.example.Team.A.Bubble.service.implementation;

import org.springframework.stereotype.Service;

import com.example.Team.A.Bubble.dto.BubbleTags;
import com.example.Team.A.Bubble.repositories.BubbleTagsRepository;
import com.example.Team.A.Bubble.service.BubbleTagsService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BubbleTagsServiceImplementation  implements BubbleTagsService{

    @NonNull
    private final BubbleTagsRepository bubbleTags;

    @Override
    public List<BubbleTags> getAllBubbleTags() {
        return bubbleTags.getAllBubbleTags();
    }
    
}
