package com.example.Team.A.Bubble.dto;
import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "bubble_tag")
@Data
public class BubbleTags {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "bubble_id")
    private int bubble_id;

    @Column(name = "tag_id")
    private int tag_id;
}
