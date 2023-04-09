package com.app.usport.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/chat")
public class MessageController {

    private final SimpMessagingTemplate messagingTemplate;
    private final MessageService messageService;

    // This is only for testing replace with a suitable default value when integrating with rest of app
    private static final int DEFAULT_GROUP_CHAT_ID = 123;

    @Autowired
    public MessageController(SimpMessagingTemplate messagingTemplate, MessageService messageService) {
        this.messagingTemplate = messagingTemplate;
        this.messageService = messageService;
    }

    @MessageMapping("/chat")
    public void sendMessage(@Payload Message message) {
//        System.out.println("Received message: " + message.getMessage() + " from " + message.getFromUserID());
        int groupChatId = message.getGroupChatID() != 0 ? message.getGroupChatID() : DEFAULT_GROUP_CHAT_ID;
        message.setToUserID(2);
        messageService.sendMessage(message);
        messagingTemplate.convertAndSend("/topic/messages/" + groupChatId, message);
    }
}
