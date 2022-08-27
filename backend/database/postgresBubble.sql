-- CREATE DATABASE bubble;


-- DROP TABLE IF EXISTS category;
-- DROP TABLE IF EXISTS sub_category;
DROP TABLE IF EXISTS first_tag;
DROP TABLE IF EXISTS second_tag;
DROP TABLE IF EXISTS third_tag;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bubbles;

CREATE TABLE category(

    category_title varchar(25)
);
ALTER TABLE category ADD COLUMN category_id SERIAL PRIMARY KEY;

CREATE TABLE sub_category(

                             sub_category_title varchar(25),
                             category_id int NOT NULL,
                             CONSTRAINT fk_category
                                 FOREIGN KEY(category_id)
                                     REFERENCES category (category_id)
);

ALTER TABLE sub_category ADD COLUMN sub_category_id SERIAL PRIMARY KEY;

CREATE TABLE first_tag(

                          category_id int NOT NULL,
                          sub_category_id int NOT NULL,
                          CONSTRAINT fk_category
                              FOREIGN KEY(category_id)
                                  REFERENCES category (category_id),
--     CONSTRAINT FOREIGN KEY (category_id) REFERENCES category (category_id),
                          CONSTRAINT fk_sub_category
                              FOREIGN KEY(sub_category_id)
                                  REFERENCES sub_category (sub_category_id)
--     CONSTRAINT FOREIGN KEY (sub_category_id) REFERENCES sub_category (sub_category_id)
);

ALTER TABLE first_tag ADD COLUMN first_tag_id SERIAL PRIMARY KEY;

CREATE TABLE second_tag(

                           category_id int NOT NULL,
                           sub_category_id int NOT NULL,
                           CONSTRAINT fk_category
                               FOREIGN KEY(category_id)
                                   REFERENCES category (category_id),
--     CONSTRAINT FOREIGN KEY (category_id) REFERENCES category (category_id),
                           CONSTRAINT fk_sub_category
                               FOREIGN KEY(sub_category_id)
                                   REFERENCES sub_category (sub_category_id)
--     CONSTRAINT FOREIGN KEY (sub_category_id) REFERENCES sub_category (sub_category_id)
);

ALTER TABLE second_tag ADD COLUMN second_tag_id SERIAL PRIMARY KEY;

CREATE TABLE third_tag(

                          category_id int NOT NULL,
                          sub_category_id int NOT NULL,
                          CONSTRAINT fk_category
                              FOREIGN KEY(category_id)
                                  REFERENCES category (category_id),
--     CONSTRAINT FOREIGN KEY (category_id) REFERENCES category (category_id),
                          CONSTRAINT fk_sub_category
                              FOREIGN KEY(sub_category_id)
                                  REFERENCES sub_category (sub_category_id)
--     CONSTRAINT FOREIGN KEY (sub_category_id) REFERENCES sub_category (sub_category_id)
);

ALTER TABLE third_tag ADD COLUMN third_tag_id SERIAL PRIMARY KEY;

CREATE TABLE users (

                       username varchar(25),
                       password varchar(25),
                       email varchar(25),
                       dob DATE,
                       token varchar(25),
                       auth boolean
);

ALTER TABLE users ADD COLUMN id SERIAL PRIMARY KEY;

CREATE TABLE bubbles(

                        bubble_title varchar(25),
                        category_id varchar(25),
                        first_tag_id int NOT NULL,
                        second_tag_id int NOT NULL,
                        third_tag_id int NOT NULL,
                        CONSTRAINT fk_category
                            FOREIGN KEY(category_id)
                                REFERENCES category (category_id),
--     CONSTRAINT FOREIGN KEY (category_id) REFERENCES category (category_id),
                        CONSTRAINT fk_first_tag
                            FOREIGN KEY(first_tag_id)
                                REFERENCES first_tag (first_tag_id),
--     CONSTRAINT FOREIGN KEY (first_tag_id) REFERENCES first_tag (first_tag_id),
                        CONSTRAINT fk_second_tag
                            FOREIGN KEY(second_tag_id)
                                REFERENCES second_tag (second_tag_id),
--     CONSTRAINT FOREIGN KEY (second_tag_id) REFERENCES second_tag (second_tag_id),
                        CONSTRAINT fk_third_tag
                            FOREIGN KEY(third_tag_id)
                                REFERENCES third_tag (third_tag_id)
--     CONSTRAINT FOREIGN KEY (third_tag_id) REFERENCES third_tag (third_tag_id)
);

ALTER TABLE bubbles ADD COLUMN bubble_id SERIAL PRIMARY KEY;

INSERT into users(username, password, email, dob)
VALUES ('Mahad1','hello1','hello1@gmail.com','1998-07-24'),
       ('Ahmed2','Hello2','hello2@gmail.com','1999-08-25'),
       ('Hamza3','Hello3','hello3@gmail.com','1999-08-26');

Select *
from users
