package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.Streams;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class StreamsModel {

    private int id;
    private String signalId;
    private int bubbleId;
    private int userId;
    private String image;

    public StreamsModel(Streams stream)
    {
        this.id = stream.getId();
        this.signalId = stream.getSignalId();
        this.bubbleId = stream.getBubbleId();
        this.userId = stream.getUserId();
        this.image = stream.getImage();
    }
    
}
