import axios from 'axios';

class UserAccountService{

    getUserAccounts(){
        return axios.get('http://localhost:8080/api/user');
    }

    searchUser(query){
        return axios.get('http://localhost:8080/api/user/search?query=' + query);
    }
}

const userAccountService = new UserAccountService();

export default userAccountService;