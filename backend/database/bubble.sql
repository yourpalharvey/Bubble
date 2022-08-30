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
  `title` varchar(25),
  `image` varchar(50)
);

CREATE TABLE `category` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25),
  `master_id` int,
  `image` varchar(50),
  FOREIGN KEY (master_id) REFERENCES master_category(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `bubbles` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25),
  `category` int,
  `image` varchar(50),
  FOREIGN KEY (category) REFERENCES category(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `streams` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `signal_id` int NOT NULL,
  `bubble` int,
  `user` int,
  `image` varchar(50),
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


-- INSERT INTO `master_category`(`title`, `image`) VALUES ('Sport', '');
-- INSERT INTO `master_category`(`title`, `image`) VALUES ('Music', '');
-- INSERT INTO `master_category`(`title`, `image`) VALUES ('Theatre', '');
-- INSERT INTO `master_category`(`title`, `image`) VALUES ('Art', '');

-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Football', 1, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Rugby', 1, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Tennis', 1, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Pop', 2, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Rock', 2, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Rap', 2, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Musical', 3, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Pantomime', 3, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Opera', 3, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Modern', 4, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Contemporary', 4, '');
-- INSERT INTO `category`(`title`, `master_id`, `image`) VALUES ('Abstract', 4, '');

-- INSERT INTO `tags`(`title`) VALUES ('Fusion');
-- INSERT INTO `tags`(`title`) VALUES ('Modern');
-- INSERT INTO `tags`(`title`) VALUES ('Retro');
-- INSERT INTO `tags`(`title`) VALUES ('Original');
-- INSERT INTO `tags`(`title`) VALUES ('Up-and-coming');
-- INSERT INTO `tags`(`title`) VALUES ('Solo');
-- INSERT INTO `tags`(`title`) VALUES ('Group');



