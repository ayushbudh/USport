package com.app.usport.usermetric;

import com.app.usport.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserMetricRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserMetricRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    UserMetric getUserMetric(String userId){
        try{
            String sql = "SELECT * FROM user_metric WHERE user_id=" + userId + ";";
            List<UserMetric> result = jdbcTemplate.query(sql, mapUserMetricFromDb());
            return result.get(0);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<UserMetric> mapUserMetricFromDb() {
        return (resultSet, i) -> {
            return new UserMetric(
                    resultSet.getInt("id"),
                    resultSet.getInt("user_id"),
                    resultSet.getInt("rating"),
                    resultSet.getString("bio"),
                    resultSet.getString("levelofexpertise")
            );
        };
    }
}
