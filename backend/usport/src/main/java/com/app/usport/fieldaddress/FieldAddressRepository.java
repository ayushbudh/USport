package com.app.usport.fieldaddress;

import com.app.usport.exception.ApiRequestException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FieldAddressRepository {

    private final JdbcTemplate jdbcTemplate;

    public FieldAddressRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<FieldAddress> getAllFields() {
        String sql = "SELECT * FROM public.field_address";
        try {
            return jdbcTemplate.query(sql, mapAddressWithDB());
        }catch (Exception e) {
            throw new ApiRequestException(e.toString());
        }
    }

    public FieldAddress getAddress(int id) {
        String sql = "SELECT * FROM public.field_address WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{id}, mapAddressWithDB());
        }catch (Exception e) {
            throw new ApiRequestException(e.toString());
        }
    }
    // TODO: Consider both lower case and upper case letters as case insensitive while searching
    public List<FieldAddress> searchAddress(String streetName) {
        try{
            String sql = "SELECT * FROM public.field_address WHERE street LIKE ?";
            String searchString = "%" + streetName + "%";
            return jdbcTemplate.query(sql, new Object[]{searchString}, mapAddressWithDB());
        }catch (Exception e) {
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<FieldAddress> mapAddressWithDB() {
        return (resultSet, i) -> {
            return new FieldAddress(
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
