package com.app.usport.notification;

import com.app.usport.exception.ApiRequestException;
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
        if(userId.equals("-1")) throw new ApiRequestException("No request parameter \"userId\" passed!");
        return notificationService.getUserNotifications(userId);
    }

    @PostMapping("/create")
    public void add(@RequestBody Notification notification){
        notificationService.createNotification(notification);
    }
}