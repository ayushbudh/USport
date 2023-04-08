import axios from 'axios';

class FieldService{

    getFields(){
        return axios.get('http://localhost:8080/api/field');
    }

    getFieldAddress(addressId){
        return axios.get('http://localhost:8080/api/field_address?addressId='+addressId);
    }
}

const fieldService = new FieldService();

export default fieldService;
