-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 06 jan. 2023 à 10:09
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
-- Base de données : `chat_us_sport`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(10) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `nbateams`
--

CREATE TABLE `nbateams` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `acronyme` varchar(255) NOT NULL,
  `uri_logo` varchar(255) NOT NULL,
  `arena` varchar(255) DEFAULT NULL,
  `conference` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `nbateams`
--

INSERT INTO `nbateams` (`id`, `name`, `acronyme`, `uri_logo`, `arena`, `conference`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Atlanta Hawks', 'ATL', 'hawks.png', 'State Farm Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'Boston Celtics', 'BOS', 'celtics.png', 'TD Garden', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(3, 'Brooklyn Nets', 'BRO', 'nets.png', 'Barclay Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(4, 'Charlotte Hornets', 'CHA', 'hornets.png', 'Spectrum Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(5, 'Chicago Bulls', 'CHI', 'bulls.png', 'United Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(6, 'Cleveland Cavaliers', 'CLE', 'cavs.png', 'Rocket Mortgage FieldHouse', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(7, 'Dallas Mavericks', 'DAL', 'mavs.png', 'American Airlines Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(8, 'Denver Nuggets', 'DEN', 'nuggets.png', 'Ball Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(9, 'Detroit Pistons', 'DET', 'pistons.png', 'Little Caesars Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(10, 'Golden State Warriors', 'GSW', 'warriors.png', 'Chase Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(11, 'Houston Rockets', 'HOU', 'rockets.png', 'Toyota Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(12, 'Indiana Pacers', 'IND', 'pacers.png', 'Bankers Life Fieldhouse', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(13, 'Los Angeles Clippers', 'LAC', 'clippers.png', 'Crypto.com Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(14, 'Los Angeles Lakers', 'LAL', 'lakers.png', 'Crypto.com Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(15, 'Memphis Grizzlies', 'MEM', 'grizzlies.png', 'FedExForum', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(16, 'Miami Heat', 'MIA', 'heat.png', 'FTX Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(17, 'Milwaukee Bucks', 'MIL', 'bucks.webp', 'Fiserv Forum', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(18, 'Minnesota Timberwolves', 'MIN', 'wolves.png', 'Target Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(19, 'New Orleans Pelicans', 'NOP', 'pels.png', 'New Orleans Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(20, 'New York Knicks', 'NYK', 'knicks.png', 'Madison Square Garden', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(21, 'Oklahoma City Thunder', 'OKC', 'thunder.png', 'Paycom Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(22, 'Orlando Magic', 'ORL', 'magic.png', 'Amway Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(23, 'Philadelphia 76ers', 'PHI', '76ers.png', 'Wells Fargo Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(24, 'Phoenix Suns', 'PHO', 'suns.png', 'Footprint Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(25, 'Portland Trail Blazers', 'POR', 'blazers.png', 'Moda Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(26, 'Sacramento Kings', 'SAC', 'kings.png', 'Golden 1 Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(27, 'San Antonio Spurs', 'SAN', 'spurs.png', 'AT&T Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(28, 'Toronto Raptors', 'TOR', 'raptors.png', 'Scotiabank Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(29, 'Utah Jazz', 'UTA', 'jazz.png', 'EnergySolutions Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(30, 'Washington Wizards', 'WAS', 'wizards.png', 'Capital One Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `nflteams`
--

CREATE TABLE `nflteams` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `acronyme` varchar(255) NOT NULL,
  `uri_logo` varchar(255) NOT NULL,
  `arena` varchar(255) DEFAULT NULL,
  `conference` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `nflteams`
--

INSERT INTO `nflteams` (`id`, `name`, `acronyme`, `uri_logo`, `arena`, `conference`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Buffalo Bills', 'BUF', 'bills.png', 'Highmark Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'Miami Dolphins', 'MIA', 'dolphins.png', 'Sun Life Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(3, 'New England Patriots', 'NEP', 'patriots.png', 'Gillette Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(4, 'New York Jets', 'NYJ', 'jets.png', 'MetLife Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(5, 'Baltimore Ravens', 'BAL', 'ravens.png', 'M&T Bank Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(6, 'Cincinnati Bengals', 'CIN', 'bengals.png', 'Paul Brown Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(7, 'Cleveland Browns', 'CLE', 'browns.png', 'Cleveland Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(8, 'Pittsburgh Steelers', 'PIT', 'steelers.png', 'Heinz Field', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(9, 'Houston Texans', 'HOU', 'texans.png', 'NRG Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(10, 'Indianapolis Colts', 'IND', 'colts.png', 'Lucas Oil Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(11, 'Tennessee Titans', 'TEN', 'titans.png', 'Nissan Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(12, 'Denver Broncos', 'DEN', 'broncos.png', 'Empower Field at Mile High', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(13, 'Kansas City Chiefs', 'KCC', 'chiefs.png', 'Arrowhead Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(14, 'Las Vegas Raiders', 'LVR', 'raiders.png', 'Allegiant Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(15, 'Los Angeles Chargers', 'LAC', 'chargers.png', 'SoFi Stadium', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(16, 'Jacksonville Jaguars', 'JAC', 'jaguars.png', 'EverBank Field', 'AFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(17, 'Dallas Cowboys', 'DAL', 'cowboys.png', 'AT&T Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(18, 'New York Giants', 'NYG', 'giants.png', 'MetLife Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(19, 'Philadelphia Eagles', 'PHI', 'eagles.png', 'Lincoln Financial Field', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(20, 'Washington Commanders', 'WAS', 'commanders.png', 'FedEx Field', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(21, 'Chicago Bears', 'CHI', 'bears.png', 'Soldier Field', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(22, 'Detroit Lions', 'DET', 'lions.png', 'Ford Field', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(23, 'Green Bay Packers', 'GBP', 'packers.png', 'Lambeau Field', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(24, 'Minnesota Vikings', 'MIN', 'vikes.png', 'U.S. Bank Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(25, 'Atlanta Falcons', 'ATL', 'falcons.png', 'Mercedes Benz stadium Atlanta', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(26, 'Carolina Panthers', 'CAR', 'panthers.png', 'Bank of America Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(27, 'New Orleans Saints', 'NOS', 'saints.jpg', 'Mercedes-Benz Superdome', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(28, 'Tampa Bay Buccaneers', 'TBB', 'buccaneers.png', 'Raymond James Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(29, 'Arizona Cardinals', 'ARI', 'cardinals.png', 'University of Phoenix Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(30, 'Los Angeles Rams', 'LAR', 'rams.png', 'SoFi Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(31, 'San Francisco 49ers', 'SAF', '49ers', 'Levi\'s Stadium', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(32, 'Seattle Seahawks', 'SEA', 'seahawks.png', 'Lumen Field', 'NFC', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `nhlteams`
--

CREATE TABLE `nhlteams` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `acronyme` varchar(255) NOT NULL,
  `uri_logo` varchar(255) NOT NULL,
  `arena` varchar(255) DEFAULT NULL,
  `conference` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `nhlteams`
--

INSERT INTO `nhlteams` (`id`, `name`, `acronyme`, `uri_logo`, `arena`, `conference`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Arizona Coyotes', 'ARI', 'coyotes.png', 'Gila River Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'Boston Bruins', 'BOS', 'bruins.png', 'TD Garden', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(3, 'Buffalo Sabres', 'BUF', 'sabres.png', 'KeyBank Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(4, 'Chicago Blackhawks', 'CHI', 'blackhawks.png', 'United Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(5, 'Colorado Avalanche', 'CLD', 'avalanche.png', 'Ball Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(6, 'Dallas Stars', 'DAL', 'stars.png', 'American Airlines Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(7, 'Detroit Red Wings', 'DET', 'redwings.png', 'Little Caesars Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(8, 'Florida Panthers', 'FLO', 'panthers.png', 'BB&T Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(9, 'Montreal Canadiens', 'MON', 'canadiens.png', 'Center Bell Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(10, 'Ottawa Senators', 'OTT', 'senators.png', 'Centre Canadian Tire', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(11, 'Tampa Bay Lightning', 'TAM', 'lightning.png', 'Amalie Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(12, 'Toronto Maple Leafs', 'TOR', 'maple.png', 'Scotiabank Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(13, 'Carolina Hurricanes', 'CAR', 'hurricanes.png', 'PNC Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(14, 'Columbus Blue Jackets', 'CLB', 'bluejackets.png', 'Nationwide Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(15, 'New Jersey Devils', 'NJD', 'devils.png', 'Prudential Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(16, 'New York Islanders', 'NYI', 'islanders.png', 'UBS Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(17, 'New York Rangers', 'NYR', 'rangers.png', 'Madison Square Garden', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(18, 'Philadelphia Flyers', 'PHI', 'flyers.png', 'Wells Fargo Center', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(19, 'Pittsburgh Penguins', 'PIT', 'pens.png', 'PPG Paints Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(20, 'Washington Capitals', 'WAS', 'capitals.png', 'Capital One Arena', 'East', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(21, 'Minnesota Wild', 'MIN', 'wild.png', 'Xcel Energy Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(22, 'Nashville Predators', 'NAS', 'predators.png', 'Bridgestone Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(23, 'Saint Louis Blues', 'SLB', 'blues.png', 'Enterprise Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(24, 'Winnipeg Jets', 'WIN', 'jets.png', 'Canada Life Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(25, 'Anaheim Ducks', 'ANA', 'ducks.png', 'Honda Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(26, 'Calgary Flames', 'CAL', 'flames.png', 'Scotiabank Saddledome', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(27, 'Edmonton Oilers', 'EDM', 'oilers.png', 'Rogers Place', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(28, 'Las Vegas Golden Knights', 'LVG', 'gn.png', 'T-Mobile Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(29, 'Los Angeles Kings', 'LAK', 'kings.png', 'Crypto.com Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(30, 'San Jose Sharks', 'SJS', 'sharks.png', 'SAP Center at San Jose', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(31, 'Seattle Kraken', 'SEA', 'kraken.png', 'KeyArena at Seattle Center', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(32, 'Vancouver Canucks', 'VAN', 'canucks.png', 'Rogers Arena', 'West', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `privatemessages`
--

CREATE TABLE `privatemessages` (
  `id` int(10) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `message_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `sports`
--

CREATE TABLE `sports` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `league_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(64) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `uri_avatar` varchar(255) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `uri_badge` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `sport_id` int(10) DEFAULT NULL,
  `nbateam_id` int(10) DEFAULT NULL,
  `nflteam_id` int(10) DEFAULT NULL,
  `nhlteam_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `nbateams`
--
ALTER TABLE `nbateams`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `nflteams`
--
ALTER TABLE `nflteams`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `nhlteams`
--
ALTER TABLE `nhlteams`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `privatemessages`
--
ALTER TABLE `privatemessages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `message_id` (`message_id`);

--
-- Index pour la table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sport_id` (`sport_id`),
  ADD KEY `nbateam_id` (`nbateam_id`),
  ADD KEY `nflteam_id` (`nflteam_id`),
  ADD KEY `nhlteam_id` (`nhlteam_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `nbateams`
--
ALTER TABLE `nbateams`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `nflteams`
--
ALTER TABLE `nflteams`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `nhlteams`
--
ALTER TABLE `nhlteams`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `privatemessages`
--
ALTER TABLE `privatemessages`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `sports`
--
ALTER TABLE `sports`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `privatemessages`
--
ALTER TABLE `privatemessages`
  ADD CONSTRAINT `privatemessages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`nbateam_id`) REFERENCES `nbateams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`nflteam_id`) REFERENCES `nflteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_4` FOREIGN KEY (`nhlteam_id`) REFERENCES `nhlteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
