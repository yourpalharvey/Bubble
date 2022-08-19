package com.example.Team.A.Bubble.apis;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Team.A.Bubble.models.Bubble;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;

@RestController
@RequestMapping("/create-bubble")
public class bubbleController {

    @RequestMapping(method = RequestMethod.POST)
    public String createBubble(@RequestBody String json) {

        try {
            // construct mapper
            ObjectMapper mapper = new ObjectMapper();

            // build object
            Bubble bubble = mapper.readValue(json, Bubble.class);

            // send to SQL

            return bubble.getTitle();
        } catch (Exception e) {
            e.printStackTrace();
            return "Error";
        }

    }

    @RequestMapping(path="/add-tags/{id}", method=RequestMethod.POST)
    public boolean addTags(@RequestBody String json, @PathVariable("id") int id) {
        try {
            
            // get JSON object
            JSONObject object = new JSONObject(json);
            
            // get data from json request
            String tag1, tag2, tag3;
            try {
                tag1 = object.getString("tag1");
            } catch (Exception e) {
                e.printStackTrace();
                tag1 = "";
            }
            try {
                tag2 = object.getString("tag2");
            } catch (Exception e) {
                e.printStackTrace();
                tag2 = "";
            }
            try {
                tag3 = object.getString("tag3");
            } catch (Exception e) {
                e.printStackTrace();
                tag3 = "";
            }

            String[] tags = {tag1, tag2, tag3};
            
            // send to SQL, get back boolean and return that bool
            

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            
            return false;
        }
    }



    
}
