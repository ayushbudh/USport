package com.app.usport.user;

import java.sql.Blob;

public class UserAccount {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private boolean isSocialAccount;
    private Blob profileImg;

    public UserAccount(){
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.isSocialAccount = false;
    }

    public UserAccount(int id, String firstName, String lastName,
                       String email, String password, boolean isSocialAccount) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isSocialAccount = isSocialAccount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

}
