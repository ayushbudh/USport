package com.app.usport.chat;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ChatRepository {
    private final JdbcTemplate jdbcTemplate;
    private Chat chat;

    @Autowired
    public ChatRepository(JdbcTemplate jdbcTemplate)
    {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Chat> getAll(){
        String sql = "SELECT * FROM chat;";
        return jdbcTemplate.query(sql, mapChatWithDB());
    }

    public void sendMessage(Chat chat) {
        String sql = "INSERT INTO chat (group_chat_id, message_text, from_user_id, send_date, read_date) VALUES (?, ?, ?, ?, ?);";
        jdbcTemplate.update(sql, chat.getGroupChatID(), chat.getMessage(), chat.getFromUserID(), chat.getSendDate(), chat.getReadDate() == null ? LocalDate.now() : chat.getReadDate());
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
