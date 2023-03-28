package com.app.usport.userMetric;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/userMetric")
@CrossOrigin
public class UserMetricController {

    private final UserMetricService userMetricService;


    public UserMetricController(UserMetricService userMetricService) {
        this.userMetricService = userMetricService;
    }
}
