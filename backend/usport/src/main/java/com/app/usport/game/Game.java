package com.app.usport.game;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public class Game {
    private int id;
    private int sportId;
    private int fieldId;
    private String reservationDate;


    public Game(int id,
                @JsonProperty("sport_id") int sportId,
                @JsonProperty("field_id") int fieldId,
                @JsonProperty("reservation_date") String reservationDate) {
        this.id = id;
        this.sportId = sportId;
        this.fieldId = fieldId;
        this.reservationDate = reservationDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSportId() {
        return sportId;
    }

    public void setSportId(int sportId) {
        this.sportId = sportId;
    }

    public int getFieldId() {
        return fieldId;
    }

    public void setFieldId(int fieldId) {
        this.fieldId = fieldId;
    }

    public String getReservationDate(){
        return this.reservationDate;
    }
    public void setReservationDate(String reservationDate){
        this.reservationDate = reservationDate;
    }
//    public LocalDateTime getStartTime() {
//        return startTime;
//    }
//
//    public void setStartTime(LocalDateTime startTime) {
//        this.startTime = startTime;
//    }
//
//    public LocalDateTime getEndTime() {
//        return endTime;
//    }
//
//    public void setEndTime(LocalDateTime endTime) {
//        this.endTime = endTime;
//    }
}

