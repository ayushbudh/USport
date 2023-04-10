package com.app.usport.sport;

import com.app.usport.user.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/sport")
@CrossOrigin
public class SportController {
    private final SportService sportService;

    @Autowired
    public SportController(SportService sportService){
        this.sportService = sportService;
    }

    @GetMapping("")
    public List<Sport> list(@RequestParam Map<String, String> params){
        if(params.get("fieldId") != null){
            return sportService.getSportsForField(params.get("fieldId"));
        }
        if(params.get("userMetricId") != null){
            return sportService.getSportsForUserMetric(params.get("userMetricId"));
        }
        return sportService.getAllSports();
    }

    @GetMapping(path = "/{id}")
    public Sport getSport(
            @PathVariable("id") String id) {
        return sportService.getSport(id);
    }

    @GetMapping(path = "/{userMetricId}")
    public List<Sport> getSportsForUserMetric(@PathVariable("userMetricId") String userMetricId){
        return sportService.getSportsForUserMetric(userMetricId);
    }
}
