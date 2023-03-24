package com.app.usport.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<User> list(){
        return userService.getAllUsers();
    }

    @PostMapping("/create")
    public String add(@RequestBody User user){
        userService.createUser(user);
        return "New user created!";
    }
}