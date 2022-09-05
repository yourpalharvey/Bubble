package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.SubCategory;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.ObjectUtils;

@Data
@NoArgsConstructor
public class SubCategoryModel {

    private int subCategoryId;
    private String subCategoryTitle;
    private int categoryId;

    public SubCategoryModel(SubCategory subCategory){
        this.subCategoryId = subCategory.getSubCategoryId();
        this.subCategoryTitle = subCategory.getSubCategoryTitle();
        this.categoryId = !ObjectUtils.isEmpty(subCategory.getCategory()) ?
                subCategory.getCategory().getId() : null;
    }
}
