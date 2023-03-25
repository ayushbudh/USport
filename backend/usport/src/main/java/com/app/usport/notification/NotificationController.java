package com.app.usport.notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.util.MultiValueMap;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/notification")
@CrossOrigin
public class NotificationController {

    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/all")
    public List<Notification> list(){
        return notificationService.getAllNotifications();
    }

    @PostMapping("/create")
    public String add(@RequestBody Notification notification){
        notificationService.createNotification(notification);
        System.out.println(notification);
        return "New notification created!";
    }
}