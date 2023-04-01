package com.app.usport.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FieldRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public FieldRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private Field field;

    // Add this method to check if the address ID exists
    public boolean addressExists(int addressId) {
        String sql = "SELECT COUNT(*) FROM public.field_address WHERE id = ?";
        int count = jdbcTemplate.queryForObject(sql, Integer.class, addressId);
        return count > 0;
    }

    // Update this method to use the addressExists method
    public void createField(Field field) {
        if (!addressExists(field.getAddressId())) {
            throw new IllegalArgumentException("Invalid address ID: " + field.getAddressId());
        }
        String sql = "INSERT INTO public.field (address_id, length, width, minimumplayers, trainers_available) " +
                "VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, field.getAddressId(), field.getFieldHeight(), field.getFieldWidth(), field.getMinimumPlayers(), field.isTrainersAvailable());
    }


    //public Field(int fieldID, int fieldHeight, int fieldWidth, int minimumPlayers, boolean trainersAvailable)
    public List<Field> getAllFields() {
        String sql = "SELECT * FROM field;";
        return jdbcTemplate.query(sql, mapFieldWithDB());
    }
    public Field getField(int id) {
        String sql = "SELECT * FROM public.field WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{id}, mapFieldWithDB());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    private RowMapper<Field> mapFieldWithDB() {
        return (resultSet, i) -> {
            return new Field(
                    resultSet.getInt("id"),
                    resultSet.getInt("address_id"),
                    resultSet.getInt("length"),
                    resultSet.getInt("width"),
                    resultSet.getInt("minimumplayers"),
                    resultSet.getBoolean("trainers_available")
            );
        };
    }
}
