package com.app.usport.user;

import com.app.usport.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository
public class UserAccountRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserAccountRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<UserAccount> getAll() {
        try{
            String sql = "SELECT * FROM user_account;";
            List<UserAccount> result = jdbcTemplate.query(sql, mapPlayerFomDb());
            return result;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    UserAccount getUser(String uid){
        try{
            String sql = "SELECT * FROM user_account WHERE uid=\'" + uid + "\';";
            List<UserAccount> result = jdbcTemplate.query(sql, mapPlayerFomDb());
            return result.get(0);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    public UserAccount getUserById(int id) {
        try{
            String sql = "SELECT * FROM user_account WHERE id=\'" + id + "\';";
            List<UserAccount> result = jdbcTemplate.query(sql, mapPlayerFomDb());
            return result.get(0);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    List<UserAccount> searchUser(String query){
        try{
            query = query.trim();
            if(query.length() == 0) return getAll();
            StringBuilder pattern = new StringBuilder();
            pattern.append(query.substring(0,1).toUpperCase());
            pattern.append(query.substring(1).toLowerCase());
            String sql = "SELECT * FROM user_account WHERE first_name LIKE '" + pattern + "%'" +
                    " OR " + "last_name LIKE '" + pattern + "%';";
            List<UserAccount> result = jdbcTemplate.query(sql, mapPlayerFomDb());
            return result;
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }


    public void createUserAccount(UserAccount userAccount){
        // insert data
        String sql = "INSERT INTO user_account " +
                "(uid, first_name, last_name, email, " +
                "age, is_social_account) VALUES " +
                "(\'" + userAccount.getUID() + "\', \'" + userAccount.getFirstName().trim()
                + "\', " + "\'" + userAccount.getLastName().trim() +  "\'" +
                ", \'" + userAccount.getEmail().trim() + "\'," +
                userAccount.getAge() + "," +
                userAccount.getIsSocialAccount() + ");";

        try{
            jdbcTemplate.update(sql);
        }catch (Exception e){
            throw new ApiRequestException(e.toString());
        }
    }

    private RowMapper<UserAccount> mapPlayerFomDb() {
        return (resultSet, i) -> {
            return new UserAccount(
                    resultSet.getInt("id"),
                    resultSet.getString("uid"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getInt("age"),
                    resultSet.getBoolean("is_social_account")
            );
        };
    }
}