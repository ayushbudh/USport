package com.app.usport.usermetric;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserMetricService {
    private UserMetricRepository userMetricRepository;
    @Autowired
    public UserMetricService(UserMetricRepository userMetricRepository){
        this.userMetricRepository = userMetricRepository;
    }

    UserMetric getUserMetric(String userId) {
       return this.userMetricRepository.getUserMetric(userId);
    }
}