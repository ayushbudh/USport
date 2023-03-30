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

    @GetMapping("")
    public List<Notification> list(@RequestParam(value = "userId", defaultValue = "-1") String userId){
        if(userId.equals("-1")) return new ArrayList<Notification>();
        return notificationService.getUserNotifications(userId);
    }

    @PostMapping("/create")
    public String add(@RequestBody Notification notification){
        if(notificationService.createNotification(notification)) return "Notification created!";
        return "Notification couldn't be created!";
    }
}