package com.app.usport.address;


import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/SearchAddress")
    public List<Address> searchAddress(String streetName)
    {
        return addressService.getSimilarAddress(streetName);
    }

    @PostMapping("/addAddress")
    public String add(@RequestBody Address address)
    {
        addressService.createAddress(address);
        System.out.println(address);
        return "New address created!";
    }



}
