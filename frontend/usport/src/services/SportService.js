import axios from 'axios';

class SporService{

    getSportsForField(fieldId){
        return axios.get('http://localhost:8080/api/sport?fieldId='+fieldId);
    }
}

const sporService = new SporService();

export default sporService;
