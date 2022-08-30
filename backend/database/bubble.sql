DROP DATABASE IF EXISTS `bubble`;

CREATE DATABASE  IF NOT EXISTS `bubble`;

USE `bubble`;

DROP TABLE IF EXISTS `category`;
DROP TABLE IF EXISTS `sub_category`;
DROP TABLE IF EXISTS `first_tag`;
DROP TABLE IF EXISTS `second_tag`;
DROP TABLE IF EXISTS `third_tag`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `bubbles`;
DROP TABLE IF EXISTS `master_category`;
DROP TABLE IF EXISTS `tag`;
DROP TABLE IF EXISTS `bubble_tag`;
DROP TABLE IF EXISTS `streams`;

CREATE TABLE `users` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(25),
  `password` varchar(25),
  `email` varchar(25),
  `dob` DATE
);

CREATE TABLE `master_category` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25)
);

CREATE TABLE `category` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25),
  `master_id` int,
  FOREIGN KEY (master_id) REFERENCES master_category(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `bubbles` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25),
  `category` int,
  FOREIGN KEY (category) REFERENCES category(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `streams` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `signal_id` int NOT NULL,
  `bubble` int,
  `user` int,
  FOREIGN KEY (bubble) REFERENCES bubbles(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (user) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `tags` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25)
);

CREATE TABLE `bubble_tag` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `bubble` int NOT NULL,
  `tag` int NOT NULL,
  FOREIGN KEY (bubble) REFERENCES bubbles(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (tag) REFERENCES tags(id) ON DELETE CASCADE ON UPDATE CASCADE
);


Select * 
from users