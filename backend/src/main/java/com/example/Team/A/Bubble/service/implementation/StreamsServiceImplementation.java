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
    public Streams addStream(StreamsModel streamsModel) {

        List<Streams> existing = streamsRepository.findAll();
        int newId = existing.get(existing.size() -1).getId() + 1;
        
        
        Streams stream = new Streams();
        stream.setId(newId);
        stream.setSignalId(streamsModel.getSignalId());
        stream.setBubbleId(streamsModel.getBubbleId());
        stream.setUserId(streamsModel.getUserId());
        stream.setImage(streamsModel.getImage());

        System.out.println(stream);
        
        streamsRepository.save(stream);
        return stream;
    }

    @Override
    public Streams getStream(Integer id) {
        return streamsRepository.getStream(id);
    }

    
}
