package com.app.usport.sport;

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
    public List<Sport> list(){
        return sportService.getAllSports();
    }

    @GetMapping(path = "/{id}")
    public Sport getUser(
            @PathVariable("id") String id) {
        return sportService.getSport(id);
    }
}
