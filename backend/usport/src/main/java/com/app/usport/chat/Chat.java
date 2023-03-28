package com.app.usport.chat;

public class Chat {
    private int ChatID;
    private int groupChatID;
    private String message;
    private int fromUserID;
    private int sendDate;
    private int readDate;

    public Chat(int ChatID, int groupChatID, String message, int fromUserID, int sendDate, int readDate)
    {
        this.ChatID = ChatID;
        this.groupChatID = groupChatID;
        this.message = message;
        this.fromUserID = fromUserID;
        this.sendDate = sendDate;
        this.readDate = readDate;
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

    public void setSendDate(int sendDate) {
        this.sendDate = sendDate;
    }

    public int getSendDate() {
        return sendDate;
    }

    public void setReadDate(int readDate) {
        this.readDate = readDate;
    }

    public int getReadDate() {
        return readDate;
    }
}
