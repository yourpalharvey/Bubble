package com.example.Team.A.Bubble.dto;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "tags")
@Data
public class Tags {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @Column(name = "id")
    private Integer id;

    @Column(name = "title")
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(name = "image")
    private String image;
    
}
