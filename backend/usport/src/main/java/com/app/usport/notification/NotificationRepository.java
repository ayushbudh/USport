package com.app.usport.notification;

import com.app.usport.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Repository
public class NotificationRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public NotificationRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Notification> getUserNotifications(String userId){
        if(userId.length() == 0) throw new ApiRequestException("Enter a valid user id");
        try{
            String digitsRegex = "[0-9]+";
            Pattern digitsPattern = Pattern.compile(digitsRegex);
            Matcher digitsMatcher = digitsPattern.matcher(userId);
            if(!digitsMatcher.matches()) throw new ApiRequestException("Enter a valid user id");
            String sql = "SELECT * FROM notification WHERE to_user_id=" + String.valueOf(userId);
            List<Notification> result = jdbcTemplate.query(sql, mapNotificationFromDb());
            return result;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    public void createNotification(Notification notification){
        // check if user exists
        String sql1 = "SELECT EXISTS(SELECT * from user_account WHERE id=" + String.valueOf(notification.getFromUserId()) + ") as user_exists;";
        String sql2 = "SELECT EXISTS(SELECT * from user_account WHERE id=" + String.valueOf(notification.getToUserId()) + ") as user_exists;";

        try{
            List<Boolean> result1 = jdbcTemplate.query(sql1, new Object[]{}, (resultSet, i) -> { return resultSet.getBoolean("user_exists");} );
            List<Boolean> result2 = jdbcTemplate.query(sql2, new Object[]{}, (resultSet, i) -> { return resultSet.getBoolean("user_exists");} );
            if(result1.get(0) == false) throw new ApiRequestException( notification.getFromUserId() + " doesn't exists");
            if(result2.get(0) == false) throw new ApiRequestException( notification.getToUserId() + " doesn't exists");
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
        // insert data
        String sql3 = "INSERT INTO notification " +
                "( from_user_id, to_user_id, message, date, " +
                "time, type, state, is_upcoming_game) VALUES " +
                "(" + notification.getFromUserId() + "," + notification.getToUserId()+
                ", \'" + notification.getMessage() + "\', \'" +
                notification.getDate().toString() + "\',\'" +
                notification.getTime().toString() + "\'," + notification.getType() +
                "," + notification.getState() +"," + notification.getIsUpcomingGame() + ");";

        try{
            jdbcTemplate.update(sql3);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<Notification> mapNotificationFromDb() {
        return (resultSet, i) -> {
            return new Notification(
                    resultSet.getInt("id"),
                    resultSet.getInt("from_user_id"),
                    resultSet.getInt("to_user_id"),
                    resultSet.getString("message"),
                    resultSet.getString("date"),
                    resultSet.getString("time"),
                    resultSet.getInt("state"),
                    resultSet.getString("type"),
                    resultSet.getBoolean("is_upcoming_game")
            );
        };
    }
}
