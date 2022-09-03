package com.example.Team.A.Bubble.service;

import com.example.Team.A.Bubble.dto.Streams;
import com.example.Team.A.Bubble.dto.Users;
import com.example.Team.A.Bubble.models.StreamsModel;

import java.util.List;

public interface StreamsService {

    List<Streams> getBubbleStreams(Integer bubbleId);

    Streams addStream(StreamsModel stream);
    Streams getStream(Integer id);
    Integer getBubbleIdBySignal(String signal);

    Boolean deleteStream(String signal);
    int getUserFromSignal(String signal);
    
}
