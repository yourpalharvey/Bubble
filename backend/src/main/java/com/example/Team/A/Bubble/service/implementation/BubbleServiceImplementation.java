package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.service.BubbleService;
import com.example.Team.A.Bubble.dto.Bubbles;
import com.example.Team.A.Bubble.models.BubbleModel;
import com.example.Team.A.Bubble.repositories.BubblesRepository;

import org.springframework.stereotype.Service;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BubbleServiceImplementation  implements BubbleService{
    
    @NonNull
    private final BubblesRepository bubblesRepository;

    @Override
    public List<Bubbles> getAllBubbles() {
        return bubblesRepository.getAllBubbles();
    }

    @Override
    public Bubbles addBubble(BubbleModel bubble) {
        List<Bubbles> existing = bubblesRepository.findAll();
        int newId = existing.get(existing.size() - 1).getId() + 1;

        Bubbles newBubble = new Bubbles();
        newBubble.setId(newId);
        newBubble.setCategory_id(bubble.getCategory_id());
        newBubble.setImage(bubble.getImage());
        newBubble.setTitle(bubble.getTitle());

        System.out.println(newBubble);

        bubblesRepository.save(newBubble);
        return newBubble;
    }

    @Override
    public List<Bubbles> getBubblesByCategoryId(int id)
    {
        return bubblesRepository.getBubbleByCategoryId(id);
    }

    @Override
    public Bubbles getBubbleById(int id)
    {
        return bubblesRepository.getBubbleById(id);
    }

    @Override
    public List<Bubbles> getBubblesByTag(int id)
    {
        return bubblesRepository.getBubbleByTag(id);
    }

}
