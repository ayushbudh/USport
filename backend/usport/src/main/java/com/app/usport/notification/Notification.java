package com.app.usport.notification;

public class Notification {
    private int id;
    private int userID;
    private String message;
    private String notificationType;
    private boolean isUpcomingGame;

    public Notification(int userID, String message,
                        String notificationType, boolean isUpcomingGame) {
        this.userID = userID;
        this.message = message;
        this.notificationType = notificationType;
        this.isUpcomingGame = isUpcomingGame;
    }

    public int getId(){
        return this.id;
    }
    public void setId(int id){
        this.id = id;
    }

    public int getUserID(){
        return this.userID;
    }
    public void setUserID(int userID){
        this.userID = userID;
    }

    public String getMessage(){
        return this.message;
    }
    public void setMessage(String message){
        this.message = message;
    }

    public String getNotificationType(){
        return this.notificationType;
    }
    public void setNotificationType(String notificationType){
        this.notificationType = notificationType;
    }
}


