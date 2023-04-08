package com.app.usport.sport;

public class Sport {
    private int id;
    private String sportName;
    private String sportType;
    private String sportKind;

    public Sport(int id, String sportName, String sportType, String sportKind) {
        this.id = id;
        this.sportName = sportName;
        this.sportType = sportType;
        this.sportKind = sportKind;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSportName() {
        return sportName;
    }

    public void setSportName(String sportName) {
        this.sportName = sportName;
    }

    public String getSportType() {
        return sportType;
    }

    public void setSportType(String sportType) {
        this.sportType = sportType;
    }

    public String getSportKind() {
        return sportKind;
    }

    public void setSportKind(String sportKind) {
        this.sportKind = sportKind;
    }
}
