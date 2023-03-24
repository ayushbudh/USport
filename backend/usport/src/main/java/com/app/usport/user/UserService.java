package com.app.usport.user;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    ArrayList<User> users;
    public UserService(){
        users = new ArrayList<>();
    }
    public User createUser(User user) {
        user.setId(users.size()+1);
        users.add(user);
        return user;
    }

    public List<User> getAllUsers() {
        return users;
    }
}
