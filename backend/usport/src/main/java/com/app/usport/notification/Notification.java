package com.app.usport.notification;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;
import java.sql.Time;

public class Notification {
    private int id;
    private int fromUserId;
    private int toUserId;
    private String message;
    private String date;
    private String time;
    private int state;
    private String type;
    private boolean isUpcomingGame;

    public Notification(int id, @JsonProperty("from_user_id") int fromUserId,
                        @JsonProperty("to_user_id") int toUserId,
                        @JsonProperty("message") String message,
                        @JsonProperty("date") String date,
                        @JsonProperty("time") String time,
                        @JsonProperty("state") int state,
                        @JsonProperty("type") String type,
                        @JsonProperty("is_upcoming_game") boolean isUpcomingGame) {
        this.id = id;
        this.fromUserId = fromUserId;
        this.toUserId = toUserId;
        this.message = message;
        this.date = date;
        this.time = time;
        this.state = state;
        this.type = type;
        this.isUpcomingGame = isUpcomingGame;
    }

    public int getId(){
        return this.id;
    }
    public void setId(int id){
        this.id = id;
    }

    public int getFromUserId(){
        return this.fromUserId;
    }
    public void setFromUserId(int userID){
        this.fromUserId = fromUserId;
    }

    public int getToUserId(){
        return this.toUserId;
    }
    public void setToUserId(int userID){
        this.toUserId = toUserId;
    }

    public String getMessage(){
        return this.message;
    }
    public void setMessage(String message){
        this.message = message;
    }

    public String getDate(){ return this.date;}
    public void setDate(String date){ this.date = date;}

    public String getTime(){ return this.time;}
    public void setTime(String time){ this.time = time;}

    public int getState() { return this.state; }
    public void setState(int state) { this.state = state; }

    public String getType(){
        return this.type;
    }
    public void setType(String notificationType){
        this.type = notificationType;
    }

    public boolean getIsUpcomingGame() { return this.isUpcomingGame; }
    public void setIsUpcomingGame(boolean isUpcomingGame) { this.isUpcomingGame = isUpcomingGame; }
}


