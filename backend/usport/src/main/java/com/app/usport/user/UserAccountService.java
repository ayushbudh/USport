package com.app.usport.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    public UserAccount getUser(String uid){
        return userAccountRepository.getUser(uid);
    }

    public List<UserAccount> searchUser(String query){
        return userAccountRepository.searchUser(query);
    }

    public void createUserAccount(UserAccount userAccount){
        this.userAccountRepository.createUserAccount(userAccount);
    }

    public UserAccount getUserById(int id) {
        return userAccountRepository.getUserById(id);
    }
}