package com.app.usport.canhave;

import com.app.usport.exception.ApiRequestException;
import com.app.usport.user.UserAccount;
import com.app.usport.usermetric.UserMetric;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class CanHaveRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CanHaveRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<CanHave> getUserMetricSports(String userMetricId){
        try{
            String sql = "SELECT * FROM can_have WHERE user_metric_id=\'" + userMetricId + "\';";
            List<CanHave> result = jdbcTemplate.query(sql, mapCanHaveFromDb());
            return result;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    public void addUserSport(CanHave canHave){
        // insert data
        String sql = "INSERT INTO can_have " +
                "(user_metric_id, skill_id) VALUES " +
                "(" + canHave.getUserMetricId() + ", "
                + canHave.getSkillId() + ");";

        try{
            jdbcTemplate.update(sql);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<CanHave> mapCanHaveFromDb() {
        return (resultSet, i) -> {
            return new CanHave(
                    resultSet.getInt("id"),
                    resultSet.getInt("user_metric_id"),
                    resultSet.getInt("skill_id")
            );
        };
    }
}
