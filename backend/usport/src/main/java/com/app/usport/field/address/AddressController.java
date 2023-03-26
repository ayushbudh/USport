package com.app.usport.field.address;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/address")
@CrossOrigin
public class AddressController {
    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }
    @GetMapping("/GetAddress")
    public Address getAddress(@RequestParam int addressID)
    {
        return addressService.getAddress(addressID);
    }

    @PostMapping("/addAddress")
    public String add(@RequestBody Address address)
    {
        addressService.createAddress(address);
        System.out.println(address);
        return "New address created!";
    }



}
