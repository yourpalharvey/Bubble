package com.example.Team.A.Bubble.dto;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "category")
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "category_title")
    private String categoryTitle;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<SubCategory> subCategories;
}
