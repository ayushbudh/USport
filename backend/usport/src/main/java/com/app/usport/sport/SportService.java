package com.app.usport.sport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SportService {
    private SportRepository sportRepository;

    @Autowired
    public SportService(SportRepository sportRepository) {
        this.sportRepository = sportRepository;
    }

    public List<Sport> getAllSports() {
        return sportRepository.getAllSports();
    }

    public Sport getSport(String id) {
        return sportRepository.getSport(id);
    }

    public List<Sport> getSportsForField(String fieldId){
        return sportRepository.getSportsForField(fieldId);
    }
    public List<Sport> getSportsForUserMetric(String userMetricId){
        return sportRepository.getSportsForUserMetric(userMetricId);
    }
}