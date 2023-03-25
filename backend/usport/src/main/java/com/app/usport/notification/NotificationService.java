package com.app.usport.notification;

import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class NotificationService {
    ArrayList<Notification> notifications;
    public NotificationService(){
        notifications = new ArrayList<>();
    }
    public Notification createNotification(Notification notification) {
        notification.setId(notifications.size()+1);
        notifications.add(notification);
        return notification;
    }

    public ArrayList<Notification> getAllNotifications() {
        return notifications;
    }

}

