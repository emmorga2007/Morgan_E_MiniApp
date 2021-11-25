-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 25, 2021 at 02:38 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_miniapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cardata`
--

DROP TABLE IF EXISTS `tbl_cardata`;
CREATE TABLE IF NOT EXISTS `tbl_cardata` (
  `ID` int(2) NOT NULL AUTO_INCREMENT,
  `MainPic` varchar(100) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Lease` varchar(15) NOT NULL,
  `Finance` varchar(15) NOT NULL,
  `Engine` varchar(100) NOT NULL,
  `FullName` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_cardata`
--

INSERT INTO `tbl_cardata` (`ID`, `MainPic`, `Name`, `Lease`, `Finance`, `Engine`, `FullName`) VALUES
(1, 'cooper.png', 'Cooper', '3.99% ', '2.99%', '3 Cylinder 12 Valve Twin Power Turbo', '2022 Mini Cooper 3 Door'),
(2, 'CooperS.png', 'Cooper S', '3.99%', '2.99%', '4 Cylinder 16 Valve Twin Power Turbo', '2022 Mini Cooper S 3 Door'),
(3, 'CooperSE3Door.png', 'Cooper SE 3 Door', '4.99%', '2.99%', 'Fully Electric Motor', '2022 Mini Cooper SE 3 Door'),
(4, 'johnCooperWorks.png', 'John Cooper Works', '3.99%', '2.99%', '4 Cylinder 16 Valve Twin Power Turbo', '2022 Mini John Cooper Works 3 Door');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
