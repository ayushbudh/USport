package com.app.usport.fieldaddress;


import com.app.usport.exception.ApiRequestException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/field_address")
@CrossOrigin
public class FieldAddressController {
    private final FieldAddressService fieldAddressService;

    public FieldAddressController(FieldAddressService fieldAddressService) {
        this.fieldAddressService = fieldAddressService;
    }

    @GetMapping("")
    public List<FieldAddress> list() {
        return fieldAddressService.getAllFields();
    }

    // TODO: Handle MethodArgumentTypeMismatchException
    @GetMapping(path = "/{id}")
    public FieldAddress getAddress(@PathVariable("id") int id) {
        return fieldAddressService.getAddress(id);
    }

    @GetMapping("/search")
    public List<FieldAddress> searchAddress(@RequestParam(value = "query", defaultValue = "") String query) {
        if(query.trim().length() == 0) throw new ApiRequestException("Enter valid query");
        return fieldAddressService.searchAddress(query);
    }
}
