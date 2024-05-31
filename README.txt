DATABASE CONFIG:

servername = "localhost:3307";
username = "root";
password = "1234";
dbname = "forms";
DBSM = MySQL

If you have different database login parameters change them at: send.php 



DATABASE SCRIPT:

CREATE TABLE `forms` (
  `idforms` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(45) NOT NULL,
  `profesion` varchar(45) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `linkedin` varchar(45) NOT NULL,
  `skills1` varchar(45) DEFAULT NULL,
  `skills2` varchar(45) DEFAULT NULL,
  `skills3` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idforms`),
  UNIQUE KEY `idforms_UNIQUE` (`idforms`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `skills` (
  `idskills` int NOT NULL AUTO_INCREMENT,
  `descr` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idskills`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `applicantskills` (
  `applicant_id` int NOT NULL,
  `skill_id` int NOT NULL,
  PRIMARY KEY (`form_id`,`skill_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `applicantskills_ibfk_1` FOREIGN KEY (`form_id`) REFERENCES `forms` (`idforms`) ON DELETE CASCADE,
  CONSTRAINT `applicantskills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`idskills`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO `skills` (`descr`) VALUES ("HTML")

INSERT INTO `skills` (`descr`) VALUES ("CSS")

INSERT INTO `skills` (`descr`) VALUES ("GIT")

INSERT INTO `skills` (`descr`) VALUES ("JAVASCRIPT")

INSERT INTO `skills` (`descr`) VALUES ("AJAX")

INSERT INTO `skills` (`descr`) VALUES ("REACT")
