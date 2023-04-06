package com.app.usport.game;

import java.time.LocalDateTime;

public class Game {
    private int id;
    private int sportId;
    private int fieldId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    public Game(int id, int sportId, int fieldId, LocalDateTime startTime, LocalDateTime endTime) {
        this.id = id;
        this.sportId = sportId;
        this.fieldId = fieldId;
        this.startTime = startTime;
        this.endTime = endTime;
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

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }
}

