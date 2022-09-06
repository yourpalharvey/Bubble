package com.example.Team.A.Bubble.service.implementation;

import org.springframework.stereotype.Service;

import com.example.Team.A.Bubble.dto.BubbleTags;
import com.example.Team.A.Bubble.models.BubbleTagsModel;
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

    @Override
    public List<BubbleTags> getBubbleTagsByBubbleId(int id)
    {
        return bubbleTags.getBubbleTagsByBubbleId(id);
    }

    @Override
    public BubbleTags addBubbleTag(BubbleTagsModel bubbleTag)
    {
        // get id
        List<BubbleTags> existing = bubbleTags.findAll();
        int newId = existing.get(existing.size() - 1).getId() + 1;


        BubbleTags newBubbleTag = new BubbleTags();
        newBubbleTag.setId(newId);
        newBubbleTag.setBubble_id(bubbleTag.getBubble_id());
        newBubbleTag.setTag_id(bubbleTag.getTag_id());

        System.out.println("\n\n\n\n\n");
        System.out.println(newBubbleTag);
        System.out.println("\n\n\n\n\n");
        bubbleTags.save(newBubbleTag);
        return newBubbleTag;
    }

    @Override
    public List<Integer> getBubbleIdsByTagId(int id)
    {
        return bubbleTags.getBubbleIdsFromTagId(id);
    }
    
}
