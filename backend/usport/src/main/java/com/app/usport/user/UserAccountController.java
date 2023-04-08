package com.app.usport.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserAccountController {

    private final UserAccountService userAccountService;

    @Autowired
    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    @GetMapping
    public List<UserAccount> list(){
        return userAccountService.getAllUsers();
    }

    @GetMapping(path = "/{uid}")
    public UserAccount getUser(
            @PathVariable("uid") String uid) {
        return userAccountService.getUser(uid);
    }

    @GetMapping("/search")
    public List<UserAccount> searchUser(@RequestParam(value = "query", defaultValue = "") String query) {
        return userAccountService.searchUser(query);
    }

    @PostMapping("/create")
    public void add(@RequestBody UserAccount userAccount){
        userAccountService.createUserAccount(userAccount);
    }
}