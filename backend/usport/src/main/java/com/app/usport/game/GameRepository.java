package com.app.usport.game;

import com.app.usport.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class GameRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public GameRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createGame(Game game){
        // insert data
        String sql = "INSERT INTO game " +
                "(sport_id, field_id, reservation_datetime " +
                ") VALUES " +
                "(" + game.getSportId() + ", " + game.getFieldId() +
                ", \'" + game.getReservationDate() + "\');";

        try{
            jdbcTemplate.update(sql);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

}
