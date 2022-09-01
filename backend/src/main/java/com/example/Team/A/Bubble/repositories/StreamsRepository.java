package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.Streams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StreamsRepository extends JpaRepository<Streams, Integer> {

    // get all streams associated with a bubble
    @Query(value = "SELECT * FROM streams s WHERE s.bubble_id = :bubbleId ;", nativeQuery = true)
    List<Streams> getBubbleStreams(Integer bubbleId);

    // add stream
    // @Query(value = "INSERT INTO streams WHERE signal = :signal AND bubble_id = :bubbleId AND user_id = :userId AND image =:image ;", nativeQuery = true)
    // Streams addStream(String signal, int bubbleId, int userId, String image);

    // get individual stream
    @Query(value = "SELECT * FROM streams s WHERE s.id = :id ;", nativeQuery = true)
    Streams getStream(Integer id);
    
}
