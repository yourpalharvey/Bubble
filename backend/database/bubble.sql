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
  `firstName` varchar(25),
  `lastName` varchar(25),
  `email` varchar(25),
  `password` varchar(25)
  );

CREATE TABLE `bubbles`(
    `bubble_id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `bubble_title` varchar(25),
    `category_id` varchar(25),
    `first_tag` int NOT NULL,
    `second_tag` int NOT NULL,
    `third_tag` int NOT NULL,
    CONSTRAINT FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
);