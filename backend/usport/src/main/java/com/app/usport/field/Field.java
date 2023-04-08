package com.app.usport.field;

public class Field {
    private int id;
    private String name;
    private int addressId;
    private int length;
    private int width;
    private int minimumPlayers;
    private boolean trainersAvailable;

    public Field(){
        this.id = 0;
        this.name = "";
        this.addressId = 0;
        this.length = 0;
        this.width = 0;
        this.minimumPlayers = 0;
        this.trainersAvailable = false;
    }
    public Field(int id, String name, int addressId ,int length,
                 int width, int minimumPlayers, boolean trainersAvailable) {
        this.id = id;
        this.name = name;
        this.addressId = addressId;
        this.length = length;
        this.width = width;
        this.minimumPlayers = minimumPlayers;
        this.trainersAvailable = trainersAvailable;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name;}

    public int getLength() {
        return this.length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getWidth() {
        return this.width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getMinimumPlayers() {
        return this.minimumPlayers;
    }

    public void setMinimumPlayers(int minimumPlayers) {
        this.minimumPlayers = minimumPlayers;
    }

    public boolean isTrainersAvailable() {
        return this.trainersAvailable;
    }

    public void setTrainersAvailable(boolean trainersAvailable) {
        this.trainersAvailable = trainersAvailable;
    }
    public int getAddressId() {
        return this.addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }
}
