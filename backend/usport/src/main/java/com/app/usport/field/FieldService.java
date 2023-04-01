package com.app.usport.field;

import com.app.usport.address.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FieldService {
    private ArrayList<Field> fields;
    private final AddressService addressService;

    @Autowired // Injects a FieldRepository bean into this field
    private FieldRepository fieldRepository;

    public FieldService(AddressService addressService) {
        fields = new ArrayList<>();
        this.addressService = addressService;
    }

    public Field createField(Field field) {
        fieldRepository.createField(field);
        return field;
    }

    public List<Field> getAllFields() {
        // Uses the FieldRepository object to fetch all fields from the database
        return fieldRepository.getAllFields();
    }

    public Field getField(int id) {
        return fieldRepository.getField(id);
    }
}
