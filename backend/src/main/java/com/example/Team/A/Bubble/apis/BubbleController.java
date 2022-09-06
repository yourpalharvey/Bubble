package com.example.Team.A.Bubble.apis;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Team.A.Bubble.models.StreamsModel;
import com.example.Team.A.Bubble.service.BubbleService;
import com.example.Team.A.Bubble.service.StreamsService;
import org.springframework.http.ResponseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import com.example.Team.A.Bubble.dto.Bubbles;
import com.example.Team.A.Bubble.models.BubbleModel;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/bubble")
@RequiredArgsConstructor
@ResponseBody
public class BubbleController {

    @NonNull
    private final BubbleService bubbleService;

    // get all bubbles
    @RequestMapping(method = RequestMethod.GET)
    public List<BubbleModel> getAllBubbles() {
        return bubbleService.getAllBubbles().stream().map(BubbleModel::new).collect(Collectors.toList());
    }

    // add a bubble
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BubbleModel> addBubble(@RequestBody BubbleModel bubble) {
        BubbleModel newBubble = new BubbleModel(bubbleService.addBubble(bubble));
        return ResponseEntity.ok(newBubble);
    }

    // get Bubbles where tagid is x
    @RequestMapping(path = "/category/{id}",method = RequestMethod.GET)
    public List<BubbleModel> getBubblesInCategory(@PathVariable(value = "id") int id) {
        return bubbleService.getBubblesByCategoryId(id).stream().map(BubbleModel::new).collect(Collectors.toList());
    }

    // get bubbles by id
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Bubbles getBubblesById(@PathVariable(value = "id") int id) {
        return bubbleService.getBubbleById(id);
    }

    @RequestMapping(path = "/tag/{id}", method = RequestMethod.GET)
    public List<BubbleModel> getBubbleFromTag(@PathVariable(value = "id") int id)
    {
        return bubbleService.getBubblesByTag(id).stream().map(BubbleModel::new).collect(Collectors.toList());
    }

    
}