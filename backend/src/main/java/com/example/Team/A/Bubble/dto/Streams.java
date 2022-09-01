package com.example.Team.A.Bubble.dto;
import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "streams")
@Data
public class Streams {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @Column(name = "id")
    private int id;

    @Column(name = "signal")
    private String signal;

    @Column(name = "bubbleId")
    private int bubbleId;

    @Column(name = "userId")
    private int userId;

    @Column(name = "image")
    private String image;

}
