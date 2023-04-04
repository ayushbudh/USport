package com.app.usport.address;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddressService {

    ArrayList<Address> addresses;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    public AddressRepository getAddressRepository() {
        return addressRepository;
    }

    public AddressService()
    {
        addresses = new ArrayList<>();
    }

    public Address createAddress(Address address) {
        for (Address addresses: addresses)
        {
            if(address.getStreetAddress().equals(addresses.getStreetAddress())
                    && address.getCity().equals(addresses.getCity())
                    && address.getCountry().equals(addresses.getCountry())) {
                return null;
            }
        }
        address.setAddressID((addresses.size()+1));
        addresses.add(address);

        return address;

    }

    public Address getAddress(int addressID) {
        return addressRepository.getAddress(addressID);
    }

    public List<Address> getSimilarAddress(String streetName)
    {
        return addressRepository.getSimilarAddress(streetName);
    }
}
