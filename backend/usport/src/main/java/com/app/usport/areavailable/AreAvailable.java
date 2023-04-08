package com.app.usport.areavailable;

public class AreAvailable {
    private int id;
    private int fieldId;
    private int sportId;

    public AreAvailable(int id, int fieldId, int sportId) {
        this.id = id;
        this.fieldId = fieldId;
        this.sportId = sportId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFieldId() {
        return fieldId;
    }

    public void setFieldId(int fieldId) {
        this.fieldId = fieldId;
    }

    public int getSportId() {
        return sportId;
    }

    public void setSportId(int sportId) {
        this.sportId = sportId;
    }
}
