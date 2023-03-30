package com.app.usport.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
@Service
public class UserAccountService {
    private UserAccountRepository userAccountRepository;
    @Autowired
    public UserAccountService(UserAccountRepository userAccountRepository){
        this.userAccountRepository = userAccountRepository;
    }

    public List<UserAccount> getAllUsers() {
        return userAccountRepository.getAll();
    }

    public UserAccount getUser(int userId){
        return userAccountRepository.getUser(userId);
    }

    public List<UserAccount> searchUser(String query){
        return userAccountRepository.searchUser(query);
    }
}
