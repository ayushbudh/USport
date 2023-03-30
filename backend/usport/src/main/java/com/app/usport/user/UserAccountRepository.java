package com.app.usport.user;

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
        String sql = "SELECT * FROM user_account;";
        return jdbcTemplate.query(sql, mapPlayerFomDb());
    }

    UserAccount getUser(int userId){
        String sql = "SELECT * FROM user_account WHERE id =" + userId + ";";
        List<UserAccount> result = jdbcTemplate.query(sql, mapPlayerFomDb());
        if (result.size() == 0) return new UserAccount();
        return result.get(0);
    }

    List<UserAccount> searchUser(String query){
        query = query.trim();
        if(query.length() == 0) return new ArrayList<UserAccount>();
        StringBuilder pattern = new StringBuilder();
        pattern.append(query.substring(0,1).toUpperCase());
        pattern.append(query.substring(1).toLowerCase());
        String sql = "SELECT * FROM user_account WHERE first_name LIKE '" + pattern + "%'" +
                " OR " + "last_name LIKE '" + pattern + "%';";
        List<UserAccount> result = jdbcTemplate.query(sql, mapPlayerFomDb());
        if (result.size() == 0) return new ArrayList<UserAccount>();
        return result;
    }

    private RowMapper<UserAccount> mapPlayerFomDb() {
        return (resultSet, i) -> {
            return new UserAccount(
                    resultSet.getInt("id"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getString("password"),
                    resultSet.getBoolean("is_social_account")
            );
        };
    }
}
