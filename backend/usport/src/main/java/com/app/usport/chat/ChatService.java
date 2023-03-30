package com.app.usport.chat;

import com.app.usport.field.Field;
import com.app.usport.user.User;
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

    public ChatService() {
        messages = new ArrayList<>();
    }

    public Chat sendMessage(Chat chat) {
        chat.setChatID(messages.size()+1);
        chat.setSendDate(LocalDate.now());
        messages.add(chat);
        return chat;
    }

    public List<Chat> getAllMessages() {
        return messages;
    }
}

