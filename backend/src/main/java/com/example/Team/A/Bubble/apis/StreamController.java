package com.example.Team.A.Bubble.apis;

import org.json.JSONObject;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Team.A.Bubble.models.StreamsModel;
import com.example.Team.A.Bubble.service.StreamsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/streams")
@RequiredArgsConstructor
@ResponseBody
public class StreamController {

    @NonNull
    private final StreamsService streamsService;

    @RequestMapping(method = RequestMethod.GET)
    public String testStreamController() {
        return "Hello world!";
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<StreamsModel> addStreamController(@RequestBody StreamsModel stream) {
        System.out.println("\n\n\n\nSent");
        System.out.println(stream.getSignal());
        System.out.println(stream.getBubbleId());
        System.out.println(stream.getUserId());
        System.out.println(stream.getImage());
        System.out.println("\n\n\n\n");
        StreamsModel newStream = new StreamsModel(streamsService.addStream(stream));
        System.out.println("\n\n\n\nSent");
        System.out.println(newStream);
        System.out.println("\n\n\n\n");
        return ResponseEntity.ok(newStream);
    }


    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public ResponseEntity<StreamsModel> getStreamController(@PathVariable(value = "id") Integer id) {
        return ResponseEntity.ok(new StreamsModel(streamsService.getStream(id)));
    }


    // works when empty
    @RequestMapping(value = "/get/bubble/{id}", method = RequestMethod.GET)
    public List<StreamsModel> getBubbleController(@PathVariable(value = "id") Integer id) {
        return streamsService.getBubbleStreams(id).stream().map(StreamsModel::new).collect(Collectors.toList());
    }


    
}
