package com.app.usport.field.address;

public class Address {
    private int addressID;
    private String streetAddress;
    private String city;
    private String state;
    private int zipCode;
    private String country;


    public Address(int addressID, String streetAddress, String city, String state, int zipCode, String country)
    {
        this.addressID = addressID;
        this.streetAddress= streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }

    public void setAddressID(int addressID) {
        this.addressID = addressID;
    }

    public int getAddressID() {
        return addressID;
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
