package com.example.Team.A.Bubble.service.implementation;

import org.springframework.stereotype.Service;
import com.example.Team.A.Bubble.service.TagsService;
import com.example.Team.A.Bubble.repositories.TagsRepository;
import com.example.Team.A.Bubble.dto.Tags;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TagsServiceImplementation implements TagsService{

    @NonNull
    private final TagsRepository tagsRepository;

    @Override
    public List<Tags> getAllTags() {
        return tagsRepository.getAllTags();
    }
    
    @Override
    public String getTitleById(int id)
    {
        return tagsRepository.getTitleById(id);
    }
}
