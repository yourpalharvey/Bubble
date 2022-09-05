package com.example.Team.A.Bubble.apis;

import com.example.Team.A.Bubble.models.CategoryModel;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.service.CategoryService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/categories")

@RequiredArgsConstructor
@ResponseBody
public class CategoryController {

    @NonNull
    private final CategoryService categoryService;

    @RequestMapping(method = RequestMethod.GET)
    public List<CategoryModel> fetchAllRecords(@RequestParam(required = false) String search){
        return categoryService.getAllRecords(search).stream().map(CategoryModel::new).collect(Collectors.toList());
    }

}
