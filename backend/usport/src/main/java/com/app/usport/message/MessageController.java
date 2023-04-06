package com.app.usport.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//import org.springframework.messaging.handler.annotation.MessageMapping;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin
public class MessageController {

    private final MessageService messageService;
    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    //TODO need to change the senddate to MessageMapping and to make it show proper send time for the message
    @PostMapping("/send")
    public String sendMessage(@RequestBody Message message) {
        messageService.sendMessage(message);
        return "Message sent successfully";
    }

    //Call this to see all the messages that have been sent for testing purposes.
    @GetMapping("/recieve")
    public List<Message> getMessages()
    {
        return messageService.getAllMessages();
    }

}
