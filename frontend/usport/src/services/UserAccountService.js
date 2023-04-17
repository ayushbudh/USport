import axios from 'axios';

class UserAccountService{

    getUserAccounts(){
        return axios.get('http://localhost:8080/api/user');
    }

    searchUser(query){
        return axios.get('http://localhost:8080/api/user/search?query=' + query);
    }

    getUser(uid){
        return axios.get('http://localhost:8080/api/user/' + uid);
    }

    addUser(uid, firstName, lastName, email, age, isSocialAccount){
       // store in db
       const requestBody = {
        "uid": uid,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "age": age,
        "is_social_account": isSocialAccount
       };
       return axios.post('http://localhost:8080/api/user/create', requestBody);
    }
}

const userAccountService = new UserAccountService();

export default userAccountService;