package com.app.usport.areavailable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreAvailableService {
    private AreAvailableRepository areAvailableRepository;

    @Autowired
    public AreAvailableService(AreAvailableRepository areAvailableRepository){
        this.areAvailableRepository = areAvailableRepository;
    }
    public List<AreAvailable> getAvailableSports(String fieldId){
        return areAvailableRepository.getAvailableSports(fieldId);
    }

}
