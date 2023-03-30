package com.app.usport.chat;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.List;

@Repository
public class ChatRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ChatRepository(JdbcTemplate jdbcTemplate)
    {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Chat> getAll(){
        String sql = "SELECT * FROM chat;";
        return jdbcTemplate.query(sql, mapChatWithDB());
    }

    private RowMapper<Chat> mapChatWithDB() {
        return (resultSet, i) -> {
            return new Chat(
                    resultSet.getInt("id"),
                    resultSet.getInt("group_chat_id"),
                    resultSet.getString("message_text"),
                    resultSet.getInt("from_user_id"),
                    resultSet.getDate("send_date").toLocalDate(),
                    resultSet.getDate("read_date").toLocalDate()
            );
        };
    }


}
