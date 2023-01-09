-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 06 jan. 2023 à 09:35
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
-- Base de données : `nfl`
--

--
-- Déchargement des données de la table `nflteams`
--

INSERT INTO `nflteams` (`id`, `name`, `acronyme`, `uri_logo`, `arena`, `conference`) VALUES
(1, 'Buffalo Bills', 'BUF', 'bills.png', 'Highmark Stadium', 'AFC'),
(2, 'Miami Dolphins', 'MIA', 'dolphins.png', 'Sun Life Stadium', 'AFC'),
(3, 'New England Patriots', 'NEP', 'patriots.png', 'Gillette Stadium', 'AFC'),
(4, 'New York Jets', 'NYJ', 'jets.png', 'MetLife Stadium', 'AFC'),
(5, 'Baltimore Ravens', 'BAL', 'ravens.png', 'M&T Bank Stadium', 'AFC'),
(6, 'Cincinnati Bengals', 'CIN', 'bengals.png', 'Paul Brown Stadium', 'AFC'),
(7, 'Cleveland Browns', 'CLE', 'browns.png', 'Cleveland Stadium', 'AFC'),
(8, 'Pittsburgh Steelers', 'PIT', 'steelers.png', 'Heinz Field', 'AFC'),
(9, 'Houston Texans', 'HOU', 'texans.png', 'NRG Stadium', 'AFC'),
(10, 'Indianapolis Colts', 'IND', 'colts.png', 'Lucas Oil Stadium', 'AFC'),
(11, 'Tennessee Titans', 'TEN', 'titans.png', 'Nissan Stadium', 'AFC'),
(12, 'Denver Broncos', 'DEN', 'broncos.png', 'Empower Field at Mile High', 'AFC'),
(13, 'Kansas City Chiefs', 'KCC', 'chiefs.png', 'Arrowhead Stadium', 'AFC'),
(14, 'Las Vegas Raiders', 'LVR', 'raiders.png', 'Allegiant Stadium', 'AFC'),
(15, 'Los Angeles Chargers', 'LAC', 'chargers.png', 'SoFi Stadium', 'AFC'),
(16, 'Jacksonville Jaguars', 'JAC', 'jaguars.png', 'EverBank Field', 'AFC'),
(17, 'Dallas Cowboys', 'DAL', 'cowboys.png', 'AT&T Stadium', 'NFC'),
(18, 'New York Giants', 'NYG', 'giants.png', 'MetLife Stadium', 'NFC'),
(19, 'Philadelphia Eagles', 'PHI', 'eagles.png', 'Lincoln Financial Field', 'NFC'),
(20, 'Washington Commanders', 'WAS', 'commanders.png', 'FedEx Field', 'NFC'),
(21, 'Chicago Bears', 'CHI', 'bears.png', 'Soldier Field', 'NFC'),
(22, 'Detroit Lions', 'DET', 'lions.png', 'Ford Field', 'NFC'),
(23, 'Green Bay Packers', 'GBP', 'packers.png', 'Lambeau Field', 'NFC'),
(24, 'Minnesota Vikings', 'MIN', 'vikes.png', 'U.S. Bank Stadium', 'NFC'),
(25, 'Atlanta Falcons', 'ATL', 'falcons.png', 'Mercedes Benz stadium Atlanta', 'NFC'),
(26, 'Carolina Panthers', 'CAR', 'panthers.png', 'Bank of America Stadium', 'NFC'),
(27, 'New Orleans Saints', 'NOS', 'saints.jpg', 'Mercedes-Benz Superdome', 'NFC'),
(28, 'Tampa Bay Buccaneers', 'TBB', 'buccaneers.png', 'Raymond James Stadium', 'NFC'),
(29, 'Arizona Cardinals', 'ARI', 'cardinals.png', 'University of Phoenix Stadium', 'NFC'),
(30, 'Los Angeles Rams', 'LAR', 'rams.png', 'SoFi Stadium', 'NFC'),
(31, 'San Francisco 49ers', 'SAF', '49ers', 'Levi\'s Stadium', 'NFC'),
(32, 'Seattle Seahawks', 'SEA', 'seahawks.png', 'Lumen Field', 'NFC');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
