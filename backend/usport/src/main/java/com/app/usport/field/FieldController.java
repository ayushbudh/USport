package com.app.usport.field;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/field")
@CrossOrigin
public class FieldController {

    private final FieldService fieldService;

    @Autowired
    public FieldController(FieldService fieldService) {
        this.fieldService = fieldService;
    }

    @GetMapping("")
    public List<Field> list(){ return fieldService.getAllFields(); }

    @PostMapping("/create")
    public void add(@RequestBody Field field) {
        fieldService.createField(field);
    }

    @GetMapping(path = "/{id}")
    public Field getField(
            @PathVariable("id") String id){
        return fieldService.getField(id);
    }
}
