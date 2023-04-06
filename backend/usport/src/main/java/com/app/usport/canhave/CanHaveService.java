package com.app.usport.canhave;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CanHaveService {
    private CanHaveRepository canHaveRepository;

    @Autowired
    public CanHaveService(CanHaveRepository canHaveRepository) {
        this.canHaveRepository = canHaveRepository;
    }

    public List<CanHave> getUserMetricSports(String userMetricId) {
        return canHaveRepository.getUserMetricSports(userMetricId);
    }
}
