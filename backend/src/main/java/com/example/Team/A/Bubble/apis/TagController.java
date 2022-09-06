package com.example.Team.A.Bubble.apis;


import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Team.A.Bubble.models.TagsModel;
import com.example.Team.A.Bubble.service.TagsService;

import org.json.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/tags")
@RequiredArgsConstructor
@ResponseBody
public class TagController {

    @NonNull
    private final TagsService tagsService;

    @RequestMapping(method = RequestMethod.GET)
    public List<TagsModel> getAllTags(){
        // JSONObject returnObj = new JSONObject();
        return tagsService.getAllTags().stream().map(TagsModel::new).collect(Collectors.toList());
        // returnObj.append("cats", tags.toString());
        // return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<String> getTitleById(@PathVariable(value = "id") int id)
    {
        JSONObject returnObj = new JSONObject();
        returnObj.append("title", tagsService.getTitleById(id));
        return new ResponseEntity<String>(returnObj.toString(), HttpStatus.OK);
    }
}
