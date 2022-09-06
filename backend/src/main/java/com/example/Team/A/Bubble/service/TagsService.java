package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Tags;
import java.util.List;

public interface TagsService {
    List<Tags> getAllTags();    
    String getTitleById(int id);
}
