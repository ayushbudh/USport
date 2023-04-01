package com.app.usport.message;

import java.time.LocalDate;

public class Message {
    private int ChatID;
    private int groupChatID;
    private String message;
    private int fromUserID;
    private int toUserID;
    private LocalDate sendDate;
    private LocalDate readDate;

    public Message(int ChatID, int groupChatID, String message, int fromUserID, int toUserID, LocalDate sendDate, LocalDate readDate)
    {
        this.ChatID = ChatID;
        this.groupChatID = groupChatID;
        this.message = message;
        this.fromUserID = fromUserID;
        this.sendDate = sendDate;
        this.readDate = readDate;
        this.toUserID = toUserID;
    }



    public void setChatID(int chatID) {
        ChatID = chatID;
    }

    public int getChatID() {
        return ChatID;
    }

    public void setGroupChatID(int groupChatID) {
        this.groupChatID = groupChatID;
    }

    public int getGroupChatID() {
        return groupChatID;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setFromUserID(int fromUserID) {
        this.fromUserID = fromUserID;
    }

    public int getFromUserID() {
        return fromUserID;
    }

    public void setToUserID(int toUserID) {
        this.toUserID = toUserID;
    }

    public int getToUserID() {
        return toUserID;
    }

    public void setSendDate(LocalDate sendDate) {
        this.sendDate = sendDate;
    }

    public LocalDate getSendDate() {
        return sendDate;
    }

    public void setReadDate(LocalDate readDate) {
        this.readDate = readDate;
    }

    public LocalDate getReadDate() {
        return readDate;
    }
}
