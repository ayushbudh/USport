import axios from 'axios';

class CanHaveService{

    addUserSport(requestBody){
        return axios.post('http://localhost:8080/api/can_have/add', requestBody);
    }
    
}

const canHaveService = new CanHaveService();

export default canHaveService;
