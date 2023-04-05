import axios from 'axios';

class FieldAddressService{

    getFieldAddresses(){
        return axios.get("http://localhost:8080/api/field_address");
    }
    
}

const fieldAddressService = new FieldAddressService();

export default fieldAddressService;
