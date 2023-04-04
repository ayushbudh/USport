package com.app.usport.address;

import com.app.usport.field.Field;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AddressRepository {

    private final JdbcTemplate jdbcTemplate;

    public AddressRepository(JdbcTemplate jdbcTemplate)
    {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Address getAddress(int addressID) {
        String sql = "SELECT * FROM public.field_address WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{addressID}, mapAddressWithDB());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Address> getSimilarAddress(String streetName) {
        String sql = "SELECT * FROM public.field_address WHERE street LIKE ?";
        String searchString = "%" + streetName + "%";
        return jdbcTemplate.query(sql, new Object[]{searchString}, mapAddressWithDB());
    }


    private RowMapper<Address> mapAddressWithDB() {
        return (resultSet, i) -> {
            return new Address(
                    resultSet.getInt("id"),
                    resultSet.getString("street"),
                    resultSet.getString("city"),
                    resultSet.getString("state"),
                    resultSet.getInt("zip"),
                    resultSet.getString("country")
            );
        };
    }
}
