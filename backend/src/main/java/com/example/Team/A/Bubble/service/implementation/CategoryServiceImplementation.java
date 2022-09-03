package com.example.Team.A.Bubble.service.implementation;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import java.util.List;
import org.springframework.stereotype.Service;

import com.example.Team.A.Bubble.dto.Category;
import com.example.Team.A.Bubble.repositories.CategoryRepository;
import com.example.Team.A.Bubble.service.CategoryService;


@Service
@RequiredArgsConstructor
public class CategoryServiceImplementation implements CategoryService
{
    @NonNull
    private final CategoryRepository categoryRepository;
    
    @Override
    public List<Category> getAllCategories()
    {
        return categoryRepository.findAll();
    }
}
