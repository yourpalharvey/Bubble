package com.example.Team.A.Bubble.repositories;

import com.example.Team.A.Bubble.dto.Streams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface StreamRepository extends JpaRepository<Streams, Integer> {

    @Query(value = "SELECT * FROM streams WHERE bubble_id = :bubbleId ;")
    List<Streams> getBubbleStreams(Integer bubbleId);

    @Query(value = "SELECT * FROM streams s WHERE s.id = :id ;")
    Streams getStream(Integer id);

    @Query(nativeQuery = true, value = "SELECT bubble_id FROM streams WHERE signal_id = :signal ;")
    Integer getBubbleIdBySignal(String signal);

    @Query(value = "DELETE FROM streams WHERE signal_id = :signalName ")
    void deleteStream(String signalName);
    
}
