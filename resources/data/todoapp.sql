DROP TABLE IF EXISTS todo CASCADE;

CREATE SEQUENCE todo_id_seq;

CREATE TABLE todo (
    id bigint DEFAULT nextval('todo_id_seq'::regclass) NOT NULL,
    title character varying(255) NOT NULL,
    description text DEFAULT NULL,
    completed boolean DEFAULT false,
    recorded_at timestamp with time zone DEFAULT NOW()
);

ALTER SEQUENCE todo_id_seq OWNED BY todo.id;
ALTER TABLE todo ADD CONSTRAINT todo_pkey PRIMARY KEY (id);

--
-- Dummy Data
INSERT INTO todo(title, completed) VALUES ('Learn Javascript Basics', true);
INSERT INTO todo(title, completed) VALUES ('Learn Angular', true);
INSERT INTO todo(title, completed) VALUES ('Learn Webpack', false);
INSERT INTO todo(title, completed) VALUES ('Learn ES6+ features', false);
