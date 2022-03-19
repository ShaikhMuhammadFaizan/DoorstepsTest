-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: doorsteps
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `idnew_table` int NOT NULL AUTO_INCREMENT,
  `questionId` varchar(45) NOT NULL,
  `userName` varchar(45) NOT NULL,
  `userEmail` varchar(45) NOT NULL,
  `userPhone` varchar(45) DEFAULT NULL,
  `answers` text NOT NULL,
  PRIMARY KEY (`idnew_table`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (1,'13','f','@','1','[\"2\",\"3\",\"4\"]'),(2,'13','faizan','shj@','1','[\"1\",\"2\",\"3\"]'),(3,'14','Faizan','Shaikh','934','[\"Morley\"]'),(4,'16','hgjhg','shkfaizan19@gmail.com','5463','[\"gjhgh\",\"gfhgfh\",\"gfghfgfg\"]'),(5,'18','ert','t','5','[\"45\"]'),(6,'16','567','567','567','[\"asdasd\",\"567\",\"567\"]'),(7,'16','567','567','567','[\"asdasd\",\"567\",\"567\"]'),(8,'16','567','567','567','[\"asdasd\",\"567\",\"567\"]'),(9,'16','ert','ad3e','234','[\"234\",\"234\",\"234\"]'),(10,'16','ert','ad3e','234','[\"234\",\"234\",\"234\"]'),(11,'16','ert','ad3e','234','[\"234\",\"234\",\"234\"]'),(12,'30','rtyrty','rtyryt','456','[\"456\"]'),(13,'32','Faizan','g@gmail.com','123','[\"No\",\"\"]'),(14,'32','qwe','234','234','[\"234\",\"234\"]'),(15,'32','qwe','234','234','[\"234\",\"234\"]'),(16,'33','rtyt','45645','5','[\"gffdhg\",\"fdghhfgghdfg\",\"hfdghhfg\"]'),(17,'33','rtyt','45645','5','[\"gffdhg\",\"fdghhfgghdfg\",\"hfdghhfg\"]'),(18,'33','rtyt','45645','5','[\"gffdhg\",\"fdghhfgghdfg\",\"hfdghhfg\"]');
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiments`
--

DROP TABLE IF EXISTS `experiments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `experimentQuestions` text NOT NULL,
  `experimentName` varchar(255) NOT NULL,
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `disable` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='experiments';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiments`
--

LOCK TABLES `experiments` WRITE;
/*!40000 ALTER TABLE `experiments` DISABLE KEYS */;
INSERT INTO `experiments` VALUES (13,'[{\"question\":\"q1\",\"ansType\":\"s\"},{\"question\":\"q2\",\"ansType\":\"m\"},{\"question\":\"q3\",\"ansType\":\"m\"}]','Estate Agency','shk@gmail.com','faizan','0404258963','property','n'),(14,'[{\"question\":\"Which Subrab\",\"ansType\":\"s\"}]','Real Estate CA','Shkfaizan19@gmail.com','Faizan','0404','property','y'),(15,'[{\"question\":\"which subrab\",\"ansType\":\"m\"},{\"question\":\"How much square feet is available of the property\",\"ansType\":\"m\"},{\"question\":\"Any issues and legal procedures on the property\",\"ansType\":\"s\"}]','Property Management Western Australia','shk@gmail.com','Horus','0404','market','y'),(16,'[{\"question\":\"which subrab\",\"ansType\":\"m\"},{\"question\":\"How much square feet is available of the property\",\"ansType\":\"m\"},{\"question\":\"Any issues and legal procedures on the property\",\"ansType\":\"s\"}]','Property Management Western Australia','shk@gmail.com','Horus','0404','market','y'),(17,'[{\"question\":\"\",\"ansType\":\"m\"},{\"question\":\"Where ?\",\"ansType\":\"s\"},{\"question\":\"Any legal matter?\",\"ansType\":\"s\"}]','Find Propery','@gmail.com','Mark','123','property','n'),(18,'[{\"question\":\"\",\"ansType\":\"m\"},{\"question\":\"Where ?\",\"ansType\":\"s\"},{\"question\":\"Any legal matter?\",\"ansType\":\"s\"}]','Find Propery','@gmail.com','Mark','123','property','y'),(19,'[{\"question\":\"234\",\"ansType\":\"s\"}]','q','qwe','qwe','0234','property','y'),(20,'[{\"question\":\"ghjgjh\",\"ansType\":\"m\"},{\"question\":\"hgjhgjhg\",\"ansType\":\"s\"}]','hgfhgf','gfhgf','hgjh','87576','property','y'),(22,'[{\"question\":\"\",\"ansType\":\"s\"}]','tyryerte','ewrt','ertwetr','04','property','n'),(23,'[{\"question\":\"\",\"ansType\":\"s\"},{\"question\":\"\",\"ansType\":\"s\"}]','wqer','wqer','wqer','','market','n'),(27,'[{\"question\":\"234234\",\"ansType\":\"m\"}]','weq','qwe','qwe','234','property','n'),(28,'[{\"question\":\"\",\"ansType\":\"s\"}]','234','4','345','44444','property','n'),(29,'[{\"question\":\"oiop\",\"ansType\":\"s\"}]','dfsdf','werwre','werw','0980','property','n'),(30,'[{\"question\":\"\",\"ansType\":\"s\"}]','89080','iyuiyu','yuyuiyiyu','678','property','n'),(31,'[{\"question\":\"FInance Issue?\",\"ansType\":\"s\"},{\"question\":\"Any Legal Issues?\",\"ansType\":\"m\"}]','Finance Experiment','Bill@gmail.com','Bill','1233','property','n'),(32,'[{\"question\":\"Any legal issues?\",\"ansType\":\"m\"},{\"question\":\"Any debt history?\",\"ansType\":\"s\"}]','Finance Check','mark@gmail.com','Mark','18263','property','n'),(33,'[{\"question\":\"ghjgjh\",\"ansType\":\"s\"},{\"question\":\"erttert\",\"ansType\":\"m\"},{\"question\":\"345\",\"ansType\":\"m\"}]','dfasdff','waererw','sdffd','345','property','n');
/*!40000 ALTER TABLE `experiments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-19  1:49:16
