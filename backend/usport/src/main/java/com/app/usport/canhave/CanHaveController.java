package com.app.usport.canhave;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/can_have")
@CrossOrigin
public class CanHaveController {

    private final CanHaveService canHaveService;

    @Autowired
    public CanHaveController(CanHaveService canHaveService) {
        this.canHaveService = canHaveService;
    }

    @GetMapping(path = "/{userMetricId}")
    public List<CanHave> getUserMetricSports(
            @PathVariable("userMetricId") String userMetricId){
        return canHaveService.getUserMetricSports(userMetricId);
    }

    // TODO: Add post mapping for handling sport addition to user profile
}