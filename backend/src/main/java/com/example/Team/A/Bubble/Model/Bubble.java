package com.example.Team.A.Bubble.Model;

import com.fasterxml.jackson.annotation.JsonProperty;


public class Bubble {

    @JsonProperty("title")
    private String title;
    @JsonProperty("categoryId")
    private int categoryId;
    private String tag1;
    private String tag2;
    private String tag3;

    // empty constructor
    public Bubble() {
        super();
    }

    public Bubble(String title, int category) {
        this.title = title;
        this.categoryId = category;
        this.tag1 = "";
        this.tag2 = "";
        this.tag3 = "";

    }

    // getters
    public String getTitle() {
        return this.title;
    }
    public int getCategory() {
        return this.categoryId;
    }
    public String getTag1() {
        return this.tag1;
    }
    public String getTag2() {
        return this.tag2;
    }
    public String getTag3() {
        return this.tag3;
    }
    public String[] getTags() {
        String[] output = {this.tag1, this.tag2, this.tag3};
        return output;
    }


    // setters
    public void setTitle(String title){
        this.title = title;
    }
    public void setCategory(int cat){
        this.categoryId = cat;
    }
    public void setTag1(String tag){
        this.tag1 = tag;
    }
    public void setTag2(String tag){
        this.tag2 = tag;
    }
    public void setTag3(String tag){
        this.tag3 = tag;
    }
    public void setTags(String tag1, String tag2, String tag3) {
        setTag1(tag1);
        setTag2(tag2);
        setTag3(tag3);
    }

}
