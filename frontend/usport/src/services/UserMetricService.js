import axios from 'axios';

class UserMetricService{

    getUserMetric(userId){
        return axios.get('http://localhost:8080/api/user_metric/' + userId);
    }

    createUserMetric(requestBody){
        return axios.post('http://localhost:8080/api/user_metric/create', requestBody);
    }
    
}

const userMetricService = new UserMetricService();

export default userMetricService;
