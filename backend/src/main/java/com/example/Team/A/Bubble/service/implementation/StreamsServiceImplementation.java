package com.example.Team.A.Bubble.service.implementation;

import org.springframework.stereotype.Service;
import com.example.Team.A.Bubble.service.StreamsService;
import com.example.Team.A.Bubble.repositories.StreamsRepository;
import com.example.Team.A.Bubble.dto.Streams;
import com.example.Team.A.Bubble.models.StreamsModel;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StreamsServiceImplementation implements StreamsService{

    @NonNull
    private final StreamsRepository streamsRepository;

    @Override
    public List<Streams> getBubbleStreams(Integer bubbleId) {
        return streamsRepository.getBubbleStreams(bubbleId);
    }

    @Override
    public Streams addStream(StreamsModel stream) {
        return streamsRepository.addStream(stream.getSignal(), stream.getBubbleId(), stream.getUserId(), stream.getImage());
    }

    @Override
    public Streams getStream(Integer id) {
        return streamsRepository.getStream(id);
    }

    
}
