package com.app.usport.fieldaddress;

public class FieldAddress {
    private int id;
    private String streetAddress;
    private String city;
    private String state;
    private int zipCode;
    private String country;


    public FieldAddress(int id, String streetAddress, String city, String state, int zipCode, String country)
    {
        this.id = id;
        this.streetAddress= streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setStreetAddress(String streetAddress)
    {
        this.streetAddress = streetAddress;
    }

    public String getStreetAddress()
    {
        return streetAddress;
    }

    public void setCity(String city)
    {
        this.city = city;
    }

    public String getCity() {
        return city;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCountry() {
        return country;
    }
}
