package com.app.usport.notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NotificationService {
    private NotificationRepository notificationRepository;

    @Autowired
    public NotificationService(NotificationRepository notificationRepository){
        this.notificationRepository = notificationRepository;
    }

    public List<Notification> getUserNotifications(String userId) {
        return this.notificationRepository.getUserNotifications(userId);
    }

    public void createNotification(Notification notification){
        this.notificationRepository.createNotification(notification);
    }

}

