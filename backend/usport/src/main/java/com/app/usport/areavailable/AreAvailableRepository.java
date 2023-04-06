package com.app.usport.areavailable;

import com.app.usport.exception.ApiRequestException;
import com.app.usport.user.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AreAvailableRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AreAvailableRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<AreAvailable> getAvailableSports(String fieldId) {
        try{
            String sql = "SELECT * FROM are_available WHERE field_id=" + fieldId + ";";
            List<AreAvailable> result = jdbcTemplate.query(sql, areAvailableFromDb());
            return result;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<AreAvailable> areAvailableFromDb() {
        return (resultSet, i) -> {
            return new AreAvailable(
                    resultSet.getInt("id"),
                    resultSet.getInt("field_id"),
                    resultSet.getInt("sport_id")
            );
        };
    }
}
