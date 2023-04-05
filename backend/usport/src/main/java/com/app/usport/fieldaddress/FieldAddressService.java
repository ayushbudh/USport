package com.app.usport.fieldaddress;

import com.app.usport.notification.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FieldAddressService {

    private FieldAddressRepository fieldAddressRepository;

    @Autowired
    public FieldAddressService(FieldAddressRepository fieldAddressRepository) {
        this.fieldAddressRepository = fieldAddressRepository;
    }

    public List<FieldAddress> getAllFields() {
        return fieldAddressRepository.getAllFields();
    }

    public FieldAddress getAddress(int id) {
        return fieldAddressRepository.getAddress(id);
    }

    public List<FieldAddress> searchAddress(String streetName) {
        return fieldAddressRepository.searchAddress(streetName);
    }
}
