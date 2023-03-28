package com.app.usport.userMetric;

public class UserMetric {
    private int UserMetricID;
    private int UserID;
    private int rating;
    private String bio;
    private String levelOfExpertise;

    public UserMetric (int UserMetricID, int UserID, int rating, String bio, String levelOfExpertise){
        this.UserMetricID = UserMetricID;
        this.UserID = UserID;
        this.rating = rating;
        this.bio = bio;
        this.levelOfExpertise = levelOfExpertise;
    }

    public UserMetric() {
    }

    public void setUserMetricID(int userMetricID) {
        UserMetricID = userMetricID;
    }

    public int getUserMetricID() {
        return UserMetricID;
    }

    public void setUserID(int userID) {
        UserID = userID;
    }

    public int getUserID() {
        return UserID;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public int getRating() {
        return rating;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getBio() {
        return bio;
    }

    public void setLevelOfExpertise(String levelOfExpertise) {
        this.levelOfExpertise = levelOfExpertise;
    }

    public String getLevelOfExpertise() {
        return levelOfExpertise;
    }
}
