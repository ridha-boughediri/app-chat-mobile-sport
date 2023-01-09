-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 06 jan. 2023 à 09:43
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
-- Base de données : `nhl`
--

--
-- Déchargement des données de la table `nhlteams`
--

INSERT INTO `nhlteams` (`id`, `name`, `acronyme`, `uri_logo`, `arena`, `conference`) VALUES
(1, 'Arizona Coyotes', 'ARI', 'coyotes.png', 'Gila River Arena', 'West'),
(2, 'Boston Bruins', 'BOS', 'bruins.png', 'TD Garden', 'East'),
(3, 'Buffalo Sabres', 'BUF', 'sabres.png', 'KeyBank Center', 'East'),
(4, 'Chicago Blackhawks', 'CHI', 'blackhawks.png', 'United Center', 'West'),
(5, 'Colorado Avalanche', 'CLD', 'avalanche.png', 'Ball Arena', 'West'),
(6, 'Dallas Stars', 'DAL', 'stars.png', 'American Airlines Center', 'West'),
(7, 'Detroit Red Wings', 'DET', 'redwings.png', 'Little Caesars Arena', 'East'),
(8, 'Florida Panthers', 'FLO', 'panthers.png', 'BB&T Center', 'East'),
(9, 'Montreal Canadiens', 'MON', 'canadiens.png', 'Center Bell Arena', 'East'),
(10, 'Ottawa Senators', 'OTT', 'senators.png', 'Centre Canadian Tire', 'East'),
(11, 'Tampa Bay Lightning', 'TAM', 'lightning.png', 'Amalie Arena', 'East'),
(12, 'Toronto Maple Leafs', 'TOR', 'maple.png', 'Scotiabank Arena', 'East'),
(13, 'Carolina Hurricanes', 'CAR', 'hurricanes.png', 'PNC Arena', 'East'),
(14, 'Columbus Blue Jackets', 'CLB', 'bluejackets.png', 'Nationwide Arena', 'East'),
(15, 'New Jersey Devils', 'NJD', 'devils.png', 'Prudential Center', 'East'),
(16, 'New York Islanders', 'NYI', 'islanders.png', 'UBS Arena', 'East'),
(17, 'New York Rangers', 'NYR', 'rangers.png', 'Madison Square Garden', 'East'),
(18, 'Philadelphia Flyers', 'PHI', 'flyers.png', 'Wells Fargo Center', 'East'),
(19, 'Pittsburgh Penguins', 'PIT', 'pens.png', 'PPG Paints Arena', 'East'),
(20, 'Washington Capitals', 'WAS', 'capitals.png', 'Capital One Arena', 'East'),
(21, 'Minnesota Wild', 'MIN', 'wild.png', 'Xcel Energy Center', 'West'),
(22, 'Nashville Predators', 'NAS', 'predators.png', 'Bridgestone Arena', 'West'),
(23, 'Saint Louis Blues', 'SLB', 'blues.png', 'Enterprise Center', 'West'),
(24, 'Winnipeg Jets', 'WIN', 'jets.png', 'Canada Life Center', 'West'),
(25, 'Anaheim Ducks', 'ANA', 'ducks.png', 'Honda Center', 'West'),
(26, 'Calgary Flames', 'CAL', 'flames.png', 'Scotiabank Saddledome', 'West'),
(27, 'Edmonton Oilers', 'EDM', 'oilers.png', 'Rogers Place', 'West'),
(28, 'Las Vegas Golden Knights', 'LVG', 'gn.png', 'T-Mobile Arena', 'West'),
(29, 'Los Angeles Kings', 'LAK', 'kings.png', 'Crypto.com Arena', 'West'),
(30, 'San Jose Sharks', 'SJS', 'sharks.png', 'SAP Center at San Jose', 'West'),
(31, 'Seattle Kraken', 'SEA', 'kraken.png', 'KeyArena at Seattle Center', 'West'),
(32, 'Vancouver Canucks', 'VAN', 'canucks.png', 'Rogers Arena', 'West');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
