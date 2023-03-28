package com.app.usport.address;

import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AddressService {

    ArrayList<Address> addresses;

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
        for (Address address : addresses) {
            if (address.getAddressID() == addressID) {
                return address;
            }
        }
        return null;
    }
}
