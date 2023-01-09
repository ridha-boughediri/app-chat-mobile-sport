-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 06 jan. 2023 à 09:31
-- Version du serveur : 5.7.36
-- Version de PHP : 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nba`
--

--
-- Déchargement des données de la table `nbateams`
--

INSERT INTO `nbateams` (`id`, `name`, `acronyme`, `uri_logo`, `arena`, `conference`) VALUES
(1, 'Atlanta Hawks', 'ATL', 'hawks.png', 'State Farm Arena', 'East'),
(2, 'Boston Celtics', 'BOS', 'celtics.png', 'TD Garden', 'East'),
(3, 'Brooklyn Nets', 'BRO', 'nets.png', 'Barclay Center', 'East'),
(4, 'Charlotte Hornets', 'CHA', 'hornets.png', 'Spectrum Center', 'East'),
(5, 'Chicago Bulls', 'CHI', 'bulls.png', 'United Center', 'East'),
(6, 'Cleveland Cavaliers', 'CLE', 'cavs.png', 'Rocket Mortgage FieldHouse', 'East'),
(7, 'Dallas Mavericks', 'DAL', 'mavs.png', 'American Airlines Center', 'West'),
(8, 'Denver Nuggets', 'DEN', 'nuggets.png', 'Ball Arena', 'West'),
(9, 'Detroit Pistons', 'DET', 'pistons.png', 'Little Caesars Arena', 'East'),
(10, 'Golden State Warriors', 'GSW', 'warriors.png', 'Chase Center', 'West'),
(11, 'Houston Rockets', 'HOU', 'rockets.png', 'Toyota Center', 'West'),
(12, 'Indiana Pacers', 'IND', 'pacers.png', 'Bankers Life Fieldhouse', 'East'),
(13, 'Los Angeles Clippers', 'LAC', 'clippers.png', 'Crypto.com Arena', 'West'),
(14, 'Los Angeles Lakers', 'LAL', 'lakers.png', 'Crypto.com Arena', 'West'),
(15, 'Memphis Grizzlies', 'MEM', 'grizzlies.png', 'FedExForum', 'West'),
(16, 'Miami Heat', 'MIA', 'heat.png', 'FTX Arena', 'East'),
(17, 'Milwaukee Bucks', 'MIL', 'bucks.webp', 'Fiserv Forum', 'East'),
(18, 'Minnesota Timberwolves', 'MIN', 'wolves.png', 'Target Center', 'West'),
(19, 'New Orleans Pelicans', 'NOP', 'pels.png', 'New Orleans Arena', 'West'),
(20, 'New York Knicks', 'NYK', 'knicks.png', 'Madison Square Garden', 'East'),
(21, 'Oklahoma City Thunder', 'OKC', 'thunder.png', 'Paycom Center', 'West'),
(22, 'Orlando Magic', 'ORL', 'magic.png', 'Amway Center', 'East'),
(23, 'Philadelphia 76ers', 'PHI', '76ers.png', 'Wells Fargo Center', 'East'),
(24, 'Phoenix Suns', 'PHO', 'suns.png', 'Footprint Center', 'West'),
(25, 'Portland Trail Blazers', 'POR', 'blazers.png', 'Moda Center', 'West'),
(26, 'Sacramento Kings', 'SAC', 'kings.png', 'Golden 1 Center', 'West'),
(27, 'San Antonio Spurs', 'SAN', 'spurs.png', 'AT&T Center', 'West'),
(28, 'Toronto Raptors', 'TOR', 'raptors.png', 'Scotiabank Arena', 'East'),
(29, 'Utah Jazz', 'UTA', 'jazz.png', 'EnergySolutions Arena', 'West'),
(30, 'Washington Wizards', 'WAS', 'wizards.png', 'Capital One Arena', 'East');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
