--
-- Host: localhost    Database: finalProject
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!40101 SET NAMES utf8 */;


--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET character_set_client = utf8 */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
CREATE TABLE `USER` (
  `studentID` varchar(20) NOT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `Password` varchar(25) DEFAULT NULL,
  `Email` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`studentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- table `USER`: dumping data for the table
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES ('14169635','Bhandari','Binod','password','bb822@drexel.edu');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `COMPANY`;
/*!40101 SET character_set_client = utf8 */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
CREATE TABLE `COMPANY` (
  `companyID` int NOT NULL AUTO_INCREMENT,
  `companyName` varchar(20) DEFAULT NULL,
  `companyLocation` varchar(20) DEFAULT NULL,
  `companyRating` decimal(4) DEFAULT NULL,
  PRIMARY KEY (`companyID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- table `COMPANY`: dumping data for the table
--

LOCK TABLES `COMPANY` WRITE;
/*!40000 ALTER TABLE `COMPANY` DISABLE KEYS */;
INSERT INTO `COMPANY` VALUES (1,'Google','California',4.3),(2,'SIG','Philadelphia', 3.8);
/*!40000 ALTER TABLE `COMPANY` ENABLE KEYS */;
UNLOCK TABLES;



-- Dump completed on 2018-03-04 
