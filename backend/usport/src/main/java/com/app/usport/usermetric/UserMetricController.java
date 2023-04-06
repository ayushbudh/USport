package com.app.usport.usermetric;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user_metric")
@CrossOrigin
public class UserMetricController {

    private final UserMetricService userMetricService;
    public UserMetricController(UserMetricService userMetricService) {
        this.userMetricService = userMetricService;
    }

    @GetMapping(path = "/{userId}")
    public UserMetric getUserMetric(@PathVariable("userId") String userId){
        return userMetricService.getUserMetric(userId);
    }
}
