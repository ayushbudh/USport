package com.app.usport.message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

//Incomplete implementation below
@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public MessageService(MessageRepository messageRepository, SimpMessagingTemplate messagingTemplate) {
        this.messageRepository = messageRepository;
        this.messagingTemplate = messagingTemplate;
    }

    public Message sendMessage(Message message) {
        message.setSendDate(LocalDate.now());
        messageRepository.sendMessage(message);

        if (message.getGroupChatID() != 0) {
            sendMessageToGroupChat(message);
        } else if (message.getToUserID() != 0) {
            sendMessageToUser(message);
        }

        return message;
    }

    public void sendMessageToGroupChat(Message message) {
        int groupChatId = message.getGroupChatID();
        String destination = "/topic/groupchat/" + groupChatId;
        messagingTemplate.convertAndSend(destination, message);
    }

    public void sendMessageToUser(Message message) {
        int userId = message.getToUserID();
        String destination = "/user/" + userId + "/queue/messages";
        messagingTemplate.convertAndSend(destination, message);
    }

    public List<Message> getAllMessages() {
        List<Message> allMessages = messageRepository.getAll();
        Set<Integer> uniqueMessageIds = new HashSet<>();
        List<Message> uniqueMessages = new ArrayList<>();

        for (Message message : allMessages) {
            if (!uniqueMessageIds.contains(message.getChatID())) {
                uniqueMessageIds.add(message.getChatID());
                uniqueMessages.add(message);
            }
        }

        return uniqueMessages;
    }

}

