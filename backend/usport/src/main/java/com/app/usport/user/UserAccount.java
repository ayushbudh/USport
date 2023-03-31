package com.app.usport.user;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Blob;

public class UserAccount {
    private int id;
    private String uid;
    private String firstName;
    private String lastName;
    private String email;
    private int age;
    private boolean isSocialAccount;
    private Blob profileImg;

    public UserAccount(){
        this.id = 0;
        this.uid = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.age = 0;
        this.isSocialAccount = false;
    }

    public UserAccount(int id,
                       @JsonProperty("uid") String uid,
                       @JsonProperty("first_name") String firstName,
                       @JsonProperty("last_name") String lastName,
                       @JsonProperty("email") String email,
                       @JsonProperty("age") int age,
                       @JsonProperty("is_social_account") boolean isSocialAccount) {
        this.id = id;
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.isSocialAccount = isSocialAccount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUID() {
        return uid;
    }

    public void setUID(String uid) {
        this.uid = uid;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean getIsSocialAccount() {
        return this.isSocialAccount;
    }

    public void setIsSocialAccount(boolean isSocialAccount) {
        this.isSocialAccount = isSocialAccount;
    }
}
