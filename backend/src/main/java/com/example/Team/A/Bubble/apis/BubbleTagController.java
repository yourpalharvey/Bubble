package com.example.Team.A.Bubble.apis;


import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Team.A.Bubble.models.BubbleTagsModel;
import com.example.Team.A.Bubble.service.BubbleTagsService;

import org.springframework.http.ResponseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/bubble-tag")
@RequiredArgsConstructor
@ResponseBody
public class BubbleTagController {

    @NonNull
    private final BubbleTagsService bubbleTagsService;
    
    // get all bubble Tags
    @RequestMapping(method= RequestMethod.GET)
    public List<BubbleTagsModel> getAllbubbleTags()
    {
        return bubbleTagsService.getAllBubbleTags().stream().map(BubbleTagsModel::new).collect(Collectors.toList());
    }

    // get tags for a bubble id
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public List<BubbleTagsModel> getBubbleTagsByBubbleId(@PathVariable(value = "id") int id)
    {
        return bubbleTagsService.getBubbleTagsByBubbleId(id).stream().map(BubbleTagsModel::new).collect(Collectors.toList());
    }

    // add a new tag for a bubble id
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BubbleTagsModel> addBubbleTag(@RequestBody BubbleTagsModel bubbleTag)
    {
        BubbleTagsModel newBubbleTag = new BubbleTagsModel(bubbleTagsService.addBubbleTag(bubbleTag));
        return ResponseEntity.ok(newBubbleTag);
    }

    // get bubble_ids for tag id
    @RequestMapping(path = "/tag/{id}", method = RequestMethod.GET)
    public List<Integer> getBubbleIdsByTagId(@PathVariable(value = "id") int id)
    {
        return bubbleTagsService.getBubbleIdsByTagId(id); //.stream().map(BubbleTagsModel::new).collect(Collectors.toList());
    }

}
