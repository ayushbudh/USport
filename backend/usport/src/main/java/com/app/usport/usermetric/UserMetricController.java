package com.app.usport.usermetric;

import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create")
    public UserMetric add(@RequestBody UserMetric userMetric){
        return userMetricService.createUserMetric(userMetric);
    }
}