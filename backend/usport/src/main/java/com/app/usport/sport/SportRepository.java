package com.app.usport.sport;

import com.app.usport.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class SportRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public SportRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    Sport getSport(String id){
        try{
            String sql = "SELECT * FROM sport WHERE id=" + id + ";";
            List<Sport> result = jdbcTemplate.query(sql, mapSportFromDb());
            return result.get(0);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    List<Sport> getAllSports(){
        try{
            String sql = "SELECT * FROM sport;";
            List<Sport> result = jdbcTemplate.query(sql, mapSportFromDb());
            return result;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<Sport> mapSportFromDb() {
        return (resultSet, i) -> {
            return new Sport(
                    resultSet.getInt("id"),
                    resultSet.getString("sport_name"),
                    resultSet.getString("sport_type"),
                    resultSet.getString("sport_kind")
            );
        };
    }
}
