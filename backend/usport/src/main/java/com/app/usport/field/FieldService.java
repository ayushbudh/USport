package com.app.usport.field;

import com.app.usport.fieldaddress.FieldAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FieldService {
    private final FieldAddressService fieldAddressService;

    @Autowired // Injects a FieldRepository bean into this field
    private FieldRepository fieldRepository;

    public FieldService(FieldAddressService fieldAddressService) {
        this.fieldAddressService = fieldAddressService;
    }

    public void createField(Field field) {
        fieldRepository.createField(field);
    }

    public List<Field> getAllFields() {
        // Uses the FieldRepository object to fetch all fields from the database
        return fieldRepository.getAllFields();
    }

    public Field getField(String id) {
        return fieldRepository.getField(id);
    }
}
