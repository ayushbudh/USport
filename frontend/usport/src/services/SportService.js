import axios from 'axios';

class SporService{

    getAllSports(){
        return axios.get('http://localhost:8080/api/sport');
    }

    getSportsForField(fieldId){
        return axios.get('http://localhost:8080/api/sport?fieldId='+fieldId);
    }

    getSportsForUserMetric(userMetricId){
        return axios.get('http://localhost:8080/api/sport?userMetricId='+userMetricId);
    }
}

const sporService = new SporService();

export default sporService;
