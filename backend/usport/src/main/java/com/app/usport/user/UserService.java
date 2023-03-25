package com.app.usport.user;

import com.app.usport.field.Field;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
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

    //Only for testing, will delete this part later:
//    public User getUser(int id)
//    {
//        for (User user : users) {
//            if (user.getId() == id) {
//                return user;
//            }
//        }
//        return null;
//    }
}
