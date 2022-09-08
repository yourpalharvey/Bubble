package com.example.Team.A.Bubble.models;

import com.example.Team.A.Bubble.dto.Streams;
import lombok.Data;

@Data
public class StreamsModel {

    private int id;
    private String signalId;
    private int bubbleId;
    private int userId;
    private String bubbleImage;

    public StreamsModel(Streams stream)
    {
        this.id = stream.getId();
        this.signalId = stream.getSignalId();
        this.bubbleId = stream.getBubbleId();
        this.userId = stream.getUserId();
        this.bubbleImage = stream.getBubbleImage();
    }
    
}
