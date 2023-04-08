package com.app.usport.field;

import com.app.usport.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
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
        try{
            String sql = "SELECT COUNT(*) FROM public.field_address WHERE id = ?";
            int count = jdbcTemplate.queryForObject(sql, Integer.class, addressId);
            return count > 0;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    // Update this method to use the addressExists method
    public void createField(Field field) {
        if (!addressExists(field.getAddressId())) {
            throw new ApiRequestException("Invalid address ID: " + field.getAddressId());
        }
        String sql = "INSERT INTO public.field (address_id, length, width, minimumplayers, trainers_available) " +
                "VALUES (?, ?, ?, ?, ?)";
        try{
            jdbcTemplate.update(sql, field.getAddressId(), field.getLength(), field.getWidth(), field.getMinimumPlayers(), field.isTrainersAvailable());
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    public List<Field> getAllFields() {
        try{
            String sql = "SELECT * FROM field;";
            List<Field> result = jdbcTemplate.query(sql, mapFieldWithDB());
            return result;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }
    public Field getField(String id) {
        try{
            String sql = "SELECT * FROM field WHERE id=" + String.valueOf(id);
            List<Field> result = jdbcTemplate.query(sql, mapFieldWithDB());
            return result.get(0);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<Field> mapFieldWithDB() {
        return (resultSet, i) -> {
            return new Field(
                    resultSet.getInt("id"),
                    resultSet.getString("name"),
                    resultSet.getInt("address_id"),
                    resultSet.getInt("length"),
                    resultSet.getInt("width"),
                    resultSet.getInt("minimumplayers"),
                    resultSet.getBoolean("trainers_available")
            );
        };
    }
}
