package com.app.usport.usermetric;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserMetric {
    private int id;
    private int userId;
    private int rating;
    private String bio;
    private String levelOfExperience;

    public UserMetric(int id,
                      @JsonProperty("user_id") int userId,
                      @JsonProperty("rating") int rating,
                      @JsonProperty("bio") String bio,
                      @JsonProperty("level_of_expertise") String levelOfExperience) {
        this.id = id;
        this.userId = userId;
        this.rating = rating;
        this.bio = bio;
        this.levelOfExperience = levelOfExperience;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getLevelOfExperience() {
        return levelOfExperience;
    }

    public void setLevelOfExperience(String levelOfExperience) {
        this.levelOfExperience = levelOfExperience;
    }
}
