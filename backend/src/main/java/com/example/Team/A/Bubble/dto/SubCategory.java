package com.example.Team.A.Bubble.dto;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "sub_category")
@Data
public class SubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @Column(name = "sub_category_id")
    private Integer subCategoryId;

    @Column(name = "sub_category_title")
    private String subCategoryTitle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

}
