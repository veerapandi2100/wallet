-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2023 at 07:07 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `wallet_transcations`
--

CREATE TABLE `wallet_transcations` (
  `transcation_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `type` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL,
  `deleted_status` tinyint(1) NOT NULL DEFAULT 0,
  `wallet_id` int(11) NOT NULL COMMENT 'Foreign Key'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallet_transcations`
--

INSERT INTO `wallet_transcations` (`transcation_id`, `amount`, `type`, `createdAt`, `updatedAt`, `deleted_status`, `wallet_id`) VALUES
(1, 100.5, 'DEBIT', '2023-11-29 19:38:20', '2023-11-29 15:43:12', 0, 1),
(2, 100, 'CREDIT', '2023-11-29 19:39:37', NULL, 0, 1),
(3, 293.3, 'CREDIT', '2023-11-29 15:18:23', '2023-11-29 15:18:23', 0, 1),
(4, 150.5, 'DEBIT', '2023-11-29 15:19:41', '2023-11-29 16:01:18', 1, 2),
(5, 250.9, 'DEBIT', '2023-11-29 15:19:59', '2023-11-29 15:19:59', 0, 2),
(6, 500.9, 'DEBIT', '2023-11-29 16:06:31', '2023-11-29 16:06:31', 0, 3),
(7, 150.5, 'DEBIT', '2023-11-29 16:06:47', '2023-11-29 16:08:16', 1, 3),
(8, 150.5, 'DEBIT', '2023-11-29 16:11:23', '2023-11-29 16:12:45', 1, 4),
(9, 100.9, 'DEBIT', '2023-11-29 16:38:56', '2023-11-29 16:38:56', 0, 6),
(10, 100.9, 'DEBIT', '2023-11-29 16:39:26', '2023-11-29 16:39:26', 0, 6),
(11, 100.9, 'DEBIT', '2023-11-29 16:40:15', '2023-11-29 16:40:15', 0, 6),
(12, 100.9, 'DEBIT', '2023-11-29 16:41:03', '2023-11-29 16:41:03', 0, 6),
(13, 100.9, 'DEBIT', '2023-11-29 16:42:50', '2023-11-29 16:42:50', 0, 6),
(14, 100.9, 'DEBIT', '2023-11-29 16:47:37', '2023-11-29 16:47:37', 0, 6),
(15, 100.9, 'DEBIT', '2023-11-29 16:49:10', '2023-11-29 16:49:10', 0, 6),
(16, 100.9, 'DEBIT', '2023-11-29 16:52:45', '2023-11-29 16:52:45', 0, 6),
(17, 100.9, 'DEBIT', '2023-11-29 16:52:54', '2023-11-29 16:52:54', 0, 6),
(18, 150.9, 'DEBIT', '2023-11-29 16:54:09', '2023-11-29 16:54:09', 0, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wallet_transcations`
--
ALTER TABLE `wallet_transcations`
  ADD PRIMARY KEY (`transcation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wallet_transcations`
--
ALTER TABLE `wallet_transcations`
  MODIFY `transcation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
