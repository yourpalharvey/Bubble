package com.example.Team.A.Bubble.apis;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import com.example.Team.A.Bubble.dto.Category;
import com.example.Team.A.Bubble.models.CategoryModel;
import com.example.Team.A.Bubble.service.CategoryService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/category")
@RequiredArgsConstructor
@ResponseBody
public class CategoryController {

    @NonNull
    private final CategoryService caetgoryService;

    @RequestMapping(method = RequestMethod.GET)
    public List<CategoryModel> getAllCategories()
    {
        return caetgoryService.getAllCategories().stream().map(CategoryModel::new).collect(Collectors.toList());
    }
    
}
