package com.example.Team.A.Bubble.dto;
import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "bubbles")
@Data

public class Bubbles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="title")
    private String title;

    @Column(name="category_id")
    private int category_id;

    @Column(name="image")
    private String image;
    
}
