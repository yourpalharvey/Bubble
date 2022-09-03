CREATE DATABASE  IF NOT EXISTS `bubble`;
USE `bubble`;

DROP TABLE IF EXISTS `category`;
DROP TABLE IF EXISTS `sub_category`;
DROP TABLE IF EXISTS `first_tag`;
DROP TABLE IF EXISTS `second_tag`;
DROP TABLE IF EXISTS `third_tag`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `bubbles`;

CREATE TABLE `category`(
  `category_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `category_title` varchar(25)
);

CREATE TABLE `sub_category`(
  `sub_category_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `sub_category_title` varchar(25),
  `category_id` int NOT NULL,
  CONSTRAINT FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
);

CREATE TABLE `first_tag`(
  `first_tag_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  CONSTRAINT FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`sub_category_id`)
);

CREATE TABLE `second_tag`(
  `second_tag_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  CONSTRAINT FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`sub_category_id`)
);

CREATE TABLE `third_tag`(
  `third_tag_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  CONSTRAINT FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`sub_category_id`)
);

CREATE TABLE `users` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(25),
  `password` varchar(25),
  `email` varchar(25),
  `dob` DATE
  );

CREATE TABLE `bubbles`(
    `bubble_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `bubble_title` varchar(25),
    `category_id` varchar(25),
    `first_tag_id` int NOT NULL,
    `second_tag_id` int NOT NULL,
    `third_tag_id` int NOT NULL,
    CONSTRAINT FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
    CONSTRAINT FOREIGN KEY (`first_tag_id`) REFERENCES `first_tag` (`first_tag_id`),
    CONSTRAINT FOREIGN KEY (`second_tag_id`) REFERENCES `second_tag` (`second_tag_id`),
    CONSTRAINT FOREIGN KEY (`third_tag_id`) REFERENCES `third_tag` (`third_tag_id`)
);

insert into category(category_title)
Values('music');
insert into category(category_title)
Values('sport');
insert into category(category_title)
Values('art');
insert into category(category_title)
Values('theatre');

insert into sub_category(sub_category_title, category_id)
Values('Rock', 1);
insert into sub_category(sub_category_title, category_id)
Values('pop', 1);
insert into sub_category(sub_category_title, category_id)
Values('jazz', 1);
insert into sub_category(sub_category_title, category_id)
Values('hip hop', 1);

insert into sub_category(sub_category_title, category_id)
Values('rugby', 2);
insert into sub_category(sub_category_title, category_id)
Values('football', 2);
insert into sub_category(sub_category_title, category_id)
Values('surfing', 2);
insert into sub_category(sub_category_title, category_id)
Values('go karting', 2);

insert into sub_category(sub_category_title, category_id)
Values('fine art', 3);
insert into sub_category(sub_category_title, category_id)
Values('experimental', 3);
insert into sub_category(sub_category_title, category_id)
Values('modern art', 3);

insert into sub_category(sub_category_title, category_id)
Values('musical', 4);
insert into sub_category(sub_category_title, category_id)
Values('spoken word', 4);
insert into sub_category(sub_category_title, category_id)
Values('outdoor theatre', 4);

Select * 
from users