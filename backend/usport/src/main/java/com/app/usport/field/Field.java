package com.app.usport.field;

public class Field {
    private int fieldID;
    private int fieldHeight;
    private int fieldWidth;
    private int minimumPlayers;
    private boolean trainersAvailable;
    private int addressId;

    public Field(int fieldID, int addressId ,int fieldHeight, int fieldWidth, int minimumPlayers, boolean trainersAvailable) {
        this.fieldID = fieldID;
        this.fieldHeight = fieldHeight;
        this.fieldWidth = fieldWidth;
        this.minimumPlayers = minimumPlayers;
        this.trainersAvailable = trainersAvailable;
        this.addressId = addressId;
    }

    public int getFieldID() {
        return fieldID;
    }

    public void setFieldID(int fieldID) {
        this.fieldID = fieldID;
    }

    public int getFieldHeight() {
        return fieldHeight;
    }

    public void setFieldHeight(int fieldHeight) {
        this.fieldHeight = fieldHeight;
    }

    public int getFieldWidth() {
        return fieldWidth;
    }

    public void setFieldWidth(int fieldWidth) {
        this.fieldWidth = fieldWidth;
    }

    public int getMinimumPlayers() {
        return minimumPlayers;
    }

    public void setMinimumPlayers(int minimumPlayers) {
        this.minimumPlayers = minimumPlayers;
    }

    public boolean isTrainersAvailable() {
        return trainersAvailable;
    }

    public void setTrainersAvailable(boolean trainersAvailable) {
        this.trainersAvailable = trainersAvailable;
    }
    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }
}
