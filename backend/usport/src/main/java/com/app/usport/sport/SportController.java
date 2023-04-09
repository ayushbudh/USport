package com.app.usport.sport;

import com.app.usport.user.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public List<Sport> list(@RequestParam(value = "fieldId", defaultValue = "") String fieldId){
        if(fieldId.equals("")){
            return sportService.getAllSports();
        }
        return sportService.getSportsForField(fieldId);
    }

    @GetMapping(path = "/{id}")
    public Sport getUser(
            @PathVariable("id") String id) {
        return sportService.getSport(id);
    }
}
