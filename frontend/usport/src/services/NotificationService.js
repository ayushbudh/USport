import axios from 'axios';

class NotificationService{

    getUserNotifications(userId){
        return axios.get('http://localhost:8080/api/notification?userId=' + userId);
    }
}

const notificationService = new NotificationService();

export default notificationService;
