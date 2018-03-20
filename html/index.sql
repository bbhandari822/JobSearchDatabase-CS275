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
INSERT INTO `USER` VALUES ('14169635','Bhandari','Binod','password','bb822@drexel.edu'), ('14169634','Palvec','Chris','123','chris');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `COMPANY`;
/*!40101 SET character_set_client = utf8 */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
CREATE TABLE `COMPANY` (
  `companyID` int NOT NULL AUTO_INCREMENT,
  `companyName` varchar(20) DEFAULT NULL,
  `companyLocation` varchar(20) DEFAULT NULL,
  `companyRating` decimal(4,1) DEFAULT NULL,
  `companyReview` varchar(256) DEFAULT NULL,
  `companyAddedDate` date DEFAULT NULL,
  PRIMARY KEY (`companyID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- table `COMPANY`: dumping data for the table
--

LOCK TABLES `COMPANY` WRITE;
/*!40000 ALTER TABLE `COMPANY` DISABLE KEYS */;
INSERT INTO `COMPANY` VALUES (1,'Google','California',4.3,'Google was really nice working at Google. The company environment
was really good. Everyone was helpful.','2017-05-18' ),(2,'SIG','Philadelphia', 3.2, 'I worked mainly on legacy code which was not 
a fun part. But I was able to learn alot and implement my knowledge from Drexel in real life implementation','2017-09-13'), (3, 'Macquarie',
'Philadelphia', 4.1, 'Macquaire was the best!','2018-01-21'),(4,'XYZ','New York',1.0,'I hate it, do not even try to go there, Worst
experience ever','2017-05-12');
/*!40000 ALTER TABLE `COMPANY` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `INTERVIEW`;
/*!40101 SET character_set_client = utf8 */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
CREATE TABLE `INTERVIEW` (
  `interviewID` int NOT NULL AUTO_INCREMENT,
  `companyName` varchar(20) DEFAULT NULL,
  `userName` varchar(20) DEFAULT NULL,
  `interviewType` varchar(256) DEFAULT NULL,
  `levelOfDifficulty` varchar(20) DEFAULT NULL,
  `sampleInterviewQuestions` varchar(256) DEFAULT NULL,
  `companyInterviewDate` date DEFAULT NULL,
  PRIMARY KEY (`interviewID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- table `INTERVIEW`: dumping data for the table
--

LOCK TABLES `INTERVIEW` WRITE;
/*!40000 ALTER TABLE `INTERVIEW` DISABLE KEYS */;
INSERT INTO `INTERVIEW` VALUES (1,'SIG','chris','Technical and Behaviorals', 'Medium', 'What is hashmap?','2017-11-11'),(2,'Google','bb822@drexel.edu','Technical','Hard','Implement the binary search tree and see if the two element is sum to target value','2017-09-21');
/*!40000 ALTER TABLE `INTERVIEW` ENABLE KEYS */;
UNLOCK TABLES;



-- Dump completed on 2018-03-12 
