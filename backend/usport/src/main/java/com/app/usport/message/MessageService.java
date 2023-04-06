package com.app.usport.message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

//Incomplete implementation below
@Service
public class MessageService {

    private ArrayList<Message> messages;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    public MessageService() {
        messages = new ArrayList<>();
    }

    public Message sendMessage(Message message) {
//        message.setChatID(messages.size()+1);
        message.setSendDate(LocalDate.now());
        messageRepository.sendMessage(message);
        return message;
    }

    public List<Message> getAllMessages() {
        return messageRepository.getAll();
    }
}

