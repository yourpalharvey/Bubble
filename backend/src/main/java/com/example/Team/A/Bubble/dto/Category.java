package com.example.Team.A.Bubble.dto;
import lombok.Data;
import javax.persistence.*;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "category")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "title")
    private String title;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Tags> tags;
}
