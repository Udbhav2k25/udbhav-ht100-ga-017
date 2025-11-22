CREATE DATABASE the_agentic_marketer;
\c the_agentic_marketer;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(200),
    role VARCHAR(50)
);

CREATE TABLE campaign (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user(id),
    copy TEXT,
    image_url VARCHAR(200)
);

CREATE TABLE analytics (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user(id),
    one_shot_rate FLOAT,
    hallucination_rate FLOAT
);