package com.app.usport.message;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MessageRepository {
    private final JdbcTemplate jdbcTemplate;
    private Message message;

    @Autowired
    public MessageRepository(JdbcTemplate jdbcTemplate)
    {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Message> getAll(){
        String sql = "SELECT * FROM message;";
        return jdbcTemplate.query(sql, mapChatWithDB());
    }

    public List<Integer> getListOfChats(int currentUserId) {
        String sql = "SELECT DISTINCT group_chat_id FROM message WHERE from_user_id = ?";
        List<Integer> chatList = new ArrayList<>();
        jdbcTemplate.query(sql, new Object[]{currentUserId}, (rs, rowNum) -> {
            chatList.add(rs.getInt("group_chat_id"));
            return null;
        });
        return chatList;
    }

    public void sendMessage(Message message) {
        String sql = "INSERT INTO message (group_chat_id, message_text, from_user_id, to_user_id, send_date) VALUES (?, ?, ?, ?, ?);";
        jdbcTemplate.update(sql, message.getGroupChatID(), message.getMessage(), message.getFromUserID(), message.getToUserID(), message.getSendDate());
    }

    private RowMapper<Message> mapChatWithDB() {
        return (resultSet, i) -> {
            return new Message(
                    resultSet.getInt("id"),
                    resultSet.getInt("group_chat_id"),
                    resultSet.getString("message_text"),
                    resultSet.getInt("from_user_id"),
                    resultSet.getInt("to_user_id"),
                    resultSet.getDate("send_date").toLocalDate()
            );
        };
    }



}
