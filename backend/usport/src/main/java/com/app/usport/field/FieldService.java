package com.app.usport.field;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FieldService {
    ArrayList<Field> fields;

    public FieldService()
    {
        fields = new ArrayList<>();
    }

    public Field createField(Field field) {
        field.setFieldID(fields.size()+1);
        fields.add(field);
        return field;
    }

    public List<Field> getAllFields() {
        return fields;
    }
}
