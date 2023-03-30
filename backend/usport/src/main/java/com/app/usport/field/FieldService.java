package com.app.usport.field;


import com.app.usport.address.AddressService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class FieldService {
    ArrayList<Field> fields;
    private final AddressService addressService;

    public FieldService(AddressService addressService)
    {
        fields = new ArrayList<>();
        this.addressService = addressService;
    }

    public Field createField(Field field) {
//        TODO connect Addresses to Fields through address ID
//        This will check if an address already exists or if it will be newly added
//        Address address = addressService.createAddress(new Address())
        field.setFieldID(fields.size()+1);
        fields.add(field);
        return field;
    }

    public List<Field> getAllFields() {
        return fields;
    }

    public Field getField(int id)
    {
        for (Field field : fields) {
            if (field.getFieldID() == id) {
                return field;
            }
        }
        return null;
    }
}
