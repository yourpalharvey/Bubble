CREATE DATABASE  IF NOT EXISTS `bubble`;
USE `bubble`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(25),
  `firstName` varchar(25),
  `lastName` varchar(25),
  `email` varchar(25),
  `password` varchar(25)
  );

DROP TABLE IF EXISTS `bubbles`;
CREATE TABLE `bubbles`(
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(25),
    `category` varchar(25),
    `tag1` varchar(25),
    `tag2` varchar(25),
    `tag3` varchar(25)
);