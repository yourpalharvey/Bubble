package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.dto.Category;
import com.example.Team.A.Bubble.dto.SubCategory;
import com.example.Team.A.Bubble.repositories.SubCategoryRepository;
import com.example.Team.A.Bubble.service.SubCategoryService;
import com.fasterxml.jackson.databind.util.ArrayBuilders;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubCategoryServiceImplementation implements SubCategoryService {
    @NonNull
    private final SubCategoryRepository subCategoryRepository;

    @Override
    public List<SubCategory> getAllRecords() {

        return subCategoryRepository.findAll();
    }
}
