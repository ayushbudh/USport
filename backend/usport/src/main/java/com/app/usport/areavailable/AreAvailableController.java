package com.app.usport.areavailable;

import com.app.usport.user.UserAccount;
import com.app.usport.user.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/are_available")
@CrossOrigin
public class AreAvailableController {
    private final AreAvailableService areAvailableService;

    @Autowired
    public AreAvailableController(AreAvailableService areAvailableService) {
        this.areAvailableService = areAvailableService;
    }

    @GetMapping(path = "/{fieldId}")
    public List<AreAvailable> getAvailableSports(
            @PathVariable("fieldId") String fieldId) {
        return areAvailableService.getAvailableSports(fieldId);
    }
}
