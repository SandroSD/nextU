-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: blog_viajes
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `pseudonimo` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'luis@email.com','123123','luis2000',NULL),(2,'ana@email.com','123123','a55555',NULL),(3,'pedro@email.com','123123','pedro111',NULL),(13,'carlos@email.com','123123','carlos1','13.png'),(20,'mimail@gmail.com','mi_pass','lero lero',''),(21,'mimail1@gmail.com','mi_pass','lero lero1',NULL);
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicaciones`
--

DROP TABLE IF EXISTS `publicaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `resumen` varchar(255) NOT NULL,
  `contenido` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `votos` int DEFAULT '0',
  `fecha_hora` timestamp NULL DEFAULT NULL,
  `autor_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_publicaciones_autores_idx` (`autor_id`),
  CONSTRAINT `fk_publicaciones_autores` FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicaciones`
--

LOCK TABLES `publicaciones` WRITE;
/*!40000 ALTER TABLE `publicaciones` DISABLE KEYS */;
INSERT INTO `publicaciones` VALUES (1,'Roma','Buen viaje a Roma','Contenido',NULL,0,'2018-09-10 01:08:27',1),(2,'Grecia','Buen viaje a Grecia','Contenido</p>',NULL,0,'2018-09-11 01:08:27',1),(3,'Paris','Buen viaje a Paris','Contenido',NULL,0,'2018-09-12 01:08:27',1),(4,'Costa Rica','Buen viaje a Costa Rica','Contenido',NULL,0,'2018-09-13 01:08:27',2),(5,'Mar de Plata','Buen viaje a Mar de Plata','Contenido',NULL,0,'2018-09-14 01:08:27',2),(6,'Guadalajara','Buen viaje a Guadalajara','Contenido',NULL,0,'2018-09-15 01:08:27',2),(7,'China','Buen viaje a China','Contenido',NULL,2,'2018-09-16 01:08:27',2),(8,'Panamá','Hola Panamá','Nuestro viaje a <strong>panamá</strong>',NULL,2,'2018-09-16 01:08:27',2),(15,'New York','Viaje a nueva york','<p>Me gusto este <strong>viaje</strong></p>',NULL,4,'2018-09-22 00:00:00',13),(16,'Buenos Aires','Buen viaje a Buenos Aires','Me gustó mucho el viaje a Bs. As.',NULL,3,'2021-01-15 18:10:10',3);
/*!40000 ALTER TABLE `publicaciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-07 18:10:23
