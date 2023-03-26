package com.app.usport.user;

import org.apache.catalina.User;
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

    // TODO: Redo this with a better approach for non-existing user accounts
    @GetMapping(path = "/{userId}")
    public UserAccount getUser(
            @PathVariable("userId") int userId) {
        return userAccountService.getUser(userId);
    }

    @GetMapping("/search")
    public List<UserAccount> searchUser(@RequestParam(value = "query", defaultValue = "") String query) {
        return userAccountService.searchUser(query);
    }
}