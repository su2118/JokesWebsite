-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2022 at 02:44 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jokes`
--

-- --------------------------------------------------------

--
-- Table structure for table `jokes`
--

CREATE TABLE `jokes` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `setup` text NOT NULL,
  `punchline` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jokes`
--

INSERT INTO `jokes` (`id`, `type`, `setup`, `punchline`) VALUES
(1, 'general', 'What did the fish say when it hit the wall', 'Dam'),
(2, 'general', 'How do you make a tissue dance', 'You put a little boogie on it'),
(3, 'general', 'What\'s Forrest Gump\'s password?', '1Forrest1'),
(4, 'general', 'What do you call a belt made out of watches?', 'A waist of time.'),
(5, 'general', 'Why can\'t bicycles stand on their own?', 'They are two tired'),
(6, 'general', 'How does a train eat?', 'It goes chew, chew'),
(7, 'general', 'What do you call a singing Laptop', 'A Dell'),
(8, 'general', 'How many lips does a flower have?', 'Tulips'),
(9, 'general', 'How do you organize an outer space party?', 'You planet'),
(10, 'general', 'What kind of shoes does a thief wear?', 'Sneakers'),
(11, 'general', 'What\'s the best time to go to the dentist?', 'Tooth hurty.'),
(12, 'knock-knock', 'Knock knock. \n Who\'s there? \n A broken pencil. \n A broken pencil who?', 'Never mind. It\'s pointless.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jokes`
--
ALTER TABLE `jokes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jokes`
--
ALTER TABLE `jokes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
