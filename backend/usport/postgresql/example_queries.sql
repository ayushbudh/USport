-- get messages & people that sent message for a group chat (can be 1-on-1 or many-many) 
SELECT c.*, ua.first_name, ua.last_name 
FROM chat c, user_account ua 
WHERE c.group_chat_id=1 AND c.from_user_id=ua.id;

-- get group chats for a single user
SELECT DISTINCT group_chat_id FROM chat WHERE from_user_id=1;