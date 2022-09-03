package com.example.Team.A.Bubble.apis;

// import org.json.JSONObject;
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
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.service.StreamsService;
import com.example.Team.A.Bubble.service.UsersService;

import org.json.JSONObject;
import org.springframework.http.HttpStatus;
// import org.springframework.http.HttpStatus;
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
        StreamsModel newStream = new StreamsModel(streamsService.addStream(stream));
        System.out.println(newStream);
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

    // delete stream
    @RequestMapping(value = "/delete/{signalId}", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteStreamBySignalId(@PathVariable(value = "signalId") String signal) {
        return ResponseEntity.ok(streamsService.deleteStream(signal));
    }

    // get buble from signalId
    @RequestMapping(value = "/get/bubble-from-stream/{id}", method = RequestMethod.GET)
    public ResponseEntity<Integer> getBubbleIdBySignalId(@PathVariable(value = "id") String signal)
    {
        return ResponseEntity.ok(streamsService.getBubbleIdBySignal(signal));
    }

    // get user from signalId
    @RequestMapping(value = "/get/user/{id}", method = RequestMethod.GET)
    public ResponseEntity<String> getUserFromSignal(@PathVariable(value = "id") String signal)
    {
        int userId = streamsService.getUserFromSignal(signal);
        JSONObject returnObj = new JSONObject();
        returnObj.append("username", userId);
        return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
    }

    
}
