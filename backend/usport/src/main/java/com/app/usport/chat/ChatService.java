package com.app.usport.chat;

import com.app.usport.field.Field;
import com.app.usport.user.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

//Incomplete implementation below
@Service
public class ChatService {

    private ArrayList<Chat> messages;

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    public ChatService() {
        messages = new ArrayList<>();
    }

    public Chat sendMessage(Chat chat) {
//        chat.setChatID(messages.size()+1);
        chat.setSendDate(LocalDate.now());
        chatRepository.sendMessage(chat);
        return chat;
    }

    public List<Chat> getAllMessages() {
        return chatRepository.getAll();
    }
}

