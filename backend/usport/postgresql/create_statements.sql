CREATE TABLE user_account (
	id serial PRIMARY KEY,
	uid VARCHAR (128) UNIQUE NOT NULL,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	email VARCHAR (255) UNIQUE NOT NULL,
	age int NOT NULL,
	is_social_account BOOLEAN NOT NULL,
	profile_img BYTEA
);

CREATE TABLE user_metric (
	id serial PRIMARY KEY,
	user_id int NOT NULL,
	rating int NOT NULL,
    bio VARCHAR (100) NOT NULL,
	levelOfExpertise VARCHAR (50) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user_account(id)
);

CREATE TABLE sport (
	id serial PRIMARY KEY,
    sport_name VARCHAR (50) NOT NULL,
	sport_type VARCHAR (50) NOT NULL,
    sport_kind VARCHAR (50) NOT NULL
);

CREATE TABLE can_have (
	id serial PRIMARY KEY,
    user_metric_id int NOT NULL,
	skill_id int NOT NULL,
	FOREIGN KEY(user_metric_id) REFERENCES user_metric(id),
	FOREIGN KEY(skill_id) REFERENCES sport(id)
);

CREATE TABLE field_address(
	id serial PRIMARY KEY,
	street VARCHAR (150) NOT NULL,
	country VARCHAR (50) NOT NULL,
	state VARCHAR (20) NOT NULL,
	city VARCHAR (20) NOT NULL,
	zip VARCHAR (10) NOT NULL
);

CREATE TABLE field(
	id serial PRIMARY KEY,
	name VARCHAR (100) NOT NUll,
	address_id int NOT NULL,
	length int NOT NULL,
	width int NOT NULL,
	minimumPlayers int NOT NULL,
	trainers_available boolean,
	FOREIGN KEY(address_id) REFERENCES field_address(id)
);

CREATE TABLE are_available (
	id serial PRIMARY KEY,
    field_id int NOT NULL,
	sport_id int NOT NULL,
	FOREIGN KEY(field_id) REFERENCES field(id),
	FOREIGN KEY(sport_id) REFERENCES sport(id)
);

CREATE TABLE game (
	id serial PRIMARY KEY,
	sport_id int NOT NULL,
	field_id int NOT NULL,
	reservation_datetime tstzrange NOT NULL,
	FOREIGN KEY(sport_id) REFERENCES sport(id),
	FOREIGN KEY(field_id) REFERENCES field(id)
);

CREATE TABLE can_play (
	id serial PRIMARY KEY,
	user_id int NOT NULL,
	game_id int NOT NULL,
	FOREIGN KEY(user_id) REFERENCES user_account(id),
	FOREIGN KEY(game_id) REFERENCES game(id)
);

CREATE TABLE group_chat (
	id serial PRIMARY KEY,
	created_date date NOT NULL,
	created_time time NOT NULL,
	type int NOT NULL,
	description VARCHAR (100) NOT NULL
);

CREATE TABLE message (
    id serial PRIMARY KEY,
    from_user_id int NOT NULL,
    to_user_id int NOT NULL,
    group_chat_id int NOT NULL,
    send_date date NOT NULL,
    message_text VARCHAR (160) NOT NULL,
    FOREIGN KEY(from_user_id) REFERENCES user_account(id),
    FOREIGN KEY(to_user_id) REFERENCES user_account(id),
    FOREIGN KEY(group_chat_id) REFERENCES group_chat(id)
);

CREATE TABLE notification (
	id serial PRIMARY KEY,
	from_user_id int NOT NULL,
	to_user_id int NOT NULL,
	message VARCHAR (160) NOT NULL,
	date date NOT NULL,
	time time NOT NULL,
	type int NOT NULL,
	state int NOT NULL,
	is_upcoming_game boolean NOT NULL,
	FOREIGN KEY(from_user_id) REFERENCES user_account(id),
	FOREIGN KEY(to_user_id) REFERENCES user_account(id)
);