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

CREATE TABLE `category` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25)
);

CREATE TABLE `tags` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25),
  `category_id` int,
  `image` varchar(120),
  FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `bubbles` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25),
  `category_id` int,
  `image` varchar(120),
  FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `official_bubbles` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(25),
  `image` varchar(120),
  `date` DATE
);

CREATE TABLE `bubble_tag` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `bubble_id` int NOT NULL,
  `tag_id` int NOT NULL,
  FOREIGN KEY (bubble_id) REFERENCES bubbles(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `streams` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `signal` varchar(40),
  `bubble_id` int,
  `user_id` int,
  `image` varchar(120),
  FOREIGN KEY (bubble_id) REFERENCES bubbles(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);





INSERT INTO `category`(`title`) VALUES ('Sport');
INSERT INTO `category`(`title`) VALUES ('Music');
INSERT INTO `category`(`title`) VALUES ('Theatre');
INSERT INTO `category`(`title`) VALUES ('Art');

INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Pop', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660828077/Bubble/TaylorSwift_xoyk4t.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Hip-Hop', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Kendrick_rzjge0.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Football', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1661780796/Bubble/image_2_mqnyef.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Rugby', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/rugby_gjhdnn.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Rock', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Rock_qbeh2v.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Skateboarding', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Skateboard_l6mtul.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Go-karting', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/GoKart_b7gui5.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Paintball', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Paintball_fc4abo.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Jazz', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Jazz_azjztx.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Musicals', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/musical_eio2tb.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Spoken-word Poetry', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Spokenword_gqrlcn.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Gallery', 4, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Gallery_waibqd.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Indie', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662030793/Bubble/image_22_byteat.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Folk', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662030964/Bubble/image_23_lcreeu.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Country', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662031089/Bubble/image_22_1_lys83n.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Acoustic', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662031180/Bubble/image_23_1_foiwsc.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Alternative', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662031470/Bubble/image_24_yezf4x.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Festival', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662031577/Bubble/image_25_bcwlnm.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Electronic', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662031703/Bubble/image_26_tmp9ov.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Dance', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662031967/Bubble/Screenshot_2022-09-01_at_12.31_1_d5on80.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Formula 1', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662032285/Bubble/Group_7_1_ql7mjr.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Mortorsport', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662032554/Bubble/image_22_2_p80f8d.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Racing', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662032665/Bubble/image_23_2_xfhs7r.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Golf', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662032796/Bubble/image_24_1_lwgvsx.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Outdoors', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662033160/Bubble/image_27_w41gdj.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Circus', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662033264/Bubble/image_28_wpzqi1.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Acrobatics', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662033356/Bubble/image_29_it8j4g.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('West End', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662033452/Bubble/image_30_vvtwcs.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Classic', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662033621/Bubble/image_31_fa4bch.png');
INSERT INTO `tags`(`title`, `category_id`, `image`) VALUES ('Modern Art', 4, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1662033745/Bubble/image_32_c5hdeq.png');



INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Taylor Swift Live', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('F1 GP Bubble', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/F1_nkmcwj.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Sunshine Fest', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Festival_vn7zdc.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Fleet Foxes', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/FleetFoxes_gbtgck.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Lion King', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Lion_m1mrkp.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Phoebe Bridgers Live', 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1661795351/Bubble/Mask_group_2_aurwb8.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Circuc Bubble Cardiff', 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Circus_gl01gt.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Golf Fun', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Golf_q3bha8.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Tate Modern', 4, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Tate_fyowjr.png');
INSERT INTO `bubbles`(`title`, `category_id`, `image`) VALUES ('Go Karting Bristol', 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1661795862/Bubble/Mask_group_3_rwaj4a.png');

INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (1, 6);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (1, 15);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (1, 16);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (2, 21);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (2, 22);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (2, 23);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (3, 18);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (3, 19);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (3, 20);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (4, 9);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (4, 13);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (4, 14);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (5, 10);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (5, 28);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (5, 29);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (6, 9);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (6, 13);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (6, 17);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (7, 26);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (7, 27);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (8, 24);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (8, 25);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (9, 12);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (9, 30);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (10, 2);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (10, 22);
INSERT INTO `bubble_tag`(`bubble_id`, `tag_id`) VALUES (10, 23);


INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('FoxesFan123', 'password123', 'no@no.com', '1990-12-25');
INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('MotorKid', 'password123', 'no@no.com', '1990-12-25');
INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('ArtyMarty', 'password123', 'no@no.com', '1990-12-25');
INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('Jane2986', 'password123', 'no@no.com', '1990-12-25');
INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('lols23', 'password123', 'no@no.com', '1990-12-25');
INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('golfnoob', 'password123', 'no@no.com', '1990-12-25');
INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('EvenStevens', 'password123', 'no@no.com', '1990-12-25');
INSERT INTO `users`(`username`, `password`, `email`, `dob`) VALUES ('Suzzie102', 'password123', 'no@no.com', '1990-12-25');

INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhsdbf', 4, 1, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/FleetFoxes_gbtgck.png');
INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhaddf', 2, 2, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/F1_nkmcwj.png');
INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhaddg', 9, 3, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Tate_fyowjr.png');
INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhaddh', 7, 4, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Circus_gl01gt.png');
INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhaddj', 5, 5, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Lion_m1mrkp.png');
INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhaddk', 8, 6, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Golf_q3bha8.png');
INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhaddl', 3, 7, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Festival_vn7zdc.png');
INSERT INTO `streams`(`signal`, `bubble_id`, `user_id`, `image`) VALUES ('ljsdhfjklhaddq', 1, 8, 'https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png');

