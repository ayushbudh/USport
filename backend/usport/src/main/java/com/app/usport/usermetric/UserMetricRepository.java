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

    public UserMetric createUserMetric(UserMetric userMetric){
        // insert data
        String sql = "INSERT INTO user_metric " +
                "(user_id, rating, bio, levelofexpertise) " +
                "VALUES " +
                "(" + userMetric.getUserId() + ", " + userMetric.getRating()
                + ", " + "\'" + userMetric.getBio().trim() +  "\'" +
                ", \'" + userMetric.getLevelOfExperience().trim() + "\');";
        try{
            jdbcTemplate.update(sql);
            return getUserMetric(String.valueOf(userMetric.getUserId()));
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    public List<UserMetric> getTopUserMetrics() {
        String sql = "SELECT * FROM user_metric ORDER BY rating DESC LIMIT 15";
        List<UserMetric> userMetrics = jdbcTemplate.query(sql, mapUserMetricFromDb());
        return userMetrics;
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
