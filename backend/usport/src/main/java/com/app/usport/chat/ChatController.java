package com.app.usport.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin
public class ChatController {

    private final ChatService chatService;
    @Autowired
    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    //TODO need to change the senddate to make it show proper send time for the message
    @PostMapping("/send")
    public String sendMessage(@RequestBody Chat chat) {
        chatService.sendMessage(chat);
        return "Message sent successfully";
    }

    @GetMapping("/recieve")
    public List<Chat> getMessages()
    {
        return chatService.getAllMessages();
    }

}
