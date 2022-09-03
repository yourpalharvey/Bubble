package com.example.Team.A.Bubble.service.implementation;

import com.example.Team.A.Bubble.dto.Category;
import com.example.Team.A.Bubble.repositories.CategoryRepository;
import com.example.Team.A.Bubble.service.CategoryService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.buf.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImplementation implements CategoryService {

    @NonNull
    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllRecords(String search) {

        if(null != search){
            return categoryRepository.findSearchItems(search);
        }
        else {
            return categoryRepository.findAll();
        }
    }
}
