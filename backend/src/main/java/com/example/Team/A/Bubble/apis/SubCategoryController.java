package com.example.Team.A.Bubble.apis;

import com.example.Team.A.Bubble.models.CategoryModel;
import com.example.Team.A.Bubble.models.SubCategoryModel;
import com.example.Team.A.Bubble.service.SubCategoryService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/subCategories")
@RequiredArgsConstructor
@ResponseBody
public class SubCategoryController {
    @NonNull
    private final SubCategoryService subCategoryService;

    @RequestMapping(method = RequestMethod.GET)
    public List<SubCategoryModel> fetchAllRecords(){
        return subCategoryService.getAllRecords().stream().map(SubCategoryModel::new).collect(Collectors.toList());
    }
}
