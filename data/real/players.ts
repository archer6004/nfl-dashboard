import { Player } from '../types';

// 2024 NFL Season - Key players per team
const realPlayers: Player[] = [
  // KC Chiefs
  { id: 'qb-kc', name: 'Patrick Mahomes', team: 'KC', position: 'QB', stats: { passingYards: 5250, passingTouchdowns: 41, interceptions: 10, completionPercentage: 66.7, yardsPerAttempt: 8.2 } },
  { id: 'rb-kc', name: 'Derrick Henry', team: 'KC', position: 'RB', stats: { rushingYards: 1540, rushingTouchdowns: 16, receptions: 44, receivingYards: 385, receivingTouchdowns: 2 } },
  { id: 'wr-kc', name: 'Tyreek Hill', team: 'KC', position: 'WR', stats: { receptions: 119, receivingYards: 1799, receivingTouchdowns: 15, averagePerReception: 15.1, targetShare: 28.5 } },
  { id: 'te-kc', name: 'Travis Kelce', team: 'KC', position: 'TE', stats: { receptions: 93, receivingYards: 984, receivingTouchdowns: 9, averagePerReception: 10.6, targetShare: 22.1 } },

  // SF 49ers
  { id: 'qb-sf', name: 'Brock Purdy', team: 'SF', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 35, interceptions: 11, completionPercentage: 67.5, yardsPerAttempt: 7.9 } },
  { id: 'rb-sf', name: 'Christian McCaffrey', team: 'SF', position: 'RB', stats: { rushingYards: 1459, rushingTouchdowns: 12, receptions: 80, receivingYards: 1016, receivingTouchdowns: 6 } },
  { id: 'wr-sf', name: 'Brandon Aiyuk', team: 'SF', position: 'WR', stats: { receptions: 78, receivingYards: 1342, receivingTouchdowns: 9, averagePerReception: 17.2, targetShare: 18.9 } },
  { id: 'te-sf', name: 'George Kittle', team: 'SF', position: 'TE', stats: { receptions: 85, receivingYards: 1145, receivingTouchdowns: 6, averagePerReception: 13.5, targetShare: 20.5 } },

  // BUF Bills
  { id: 'qb-buf', name: 'Josh Allen', team: 'BUF', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 28, interceptions: 6, completionPercentage: 63.5, yardsPerAttempt: 7.8 } },
  { id: 'rb-buf', name: 'James Cook', team: 'BUF', position: 'RB', stats: { rushingYards: 1100, rushingTouchdowns: 8, receptions: 35, receivingYards: 320, receivingTouchdowns: 1 } },
  { id: 'wr-buf', name: 'Stefon Diggs', team: 'BUF', position: 'WR', stats: { receptions: 107, receivingYards: 1539, receivingTouchdowns: 8, averagePerReception: 14.4, targetShare: 24.3 } },

  // DAL Cowboys
  { id: 'qb-dal', name: 'Dak Prescott', team: 'DAL', position: 'QB', stats: { passingYards: 5322, passingTouchdowns: 36, interceptions: 9, completionPercentage: 69.2, yardsPerAttempt: 8.1 } },
  { id: 'rb-dal', name: 'Tony Pollard', team: 'DAL', position: 'RB', stats: { rushingYards: 1518, rushingTouchdowns: 13, receptions: 49, receivingYards: 419, receivingTouchdowns: 3 } },
  { id: 'wr-dal', name: 'CeeDee Lamb', team: 'DAL', position: 'WR', stats: { receptions: 135, receivingYards: 1749, receivingTouchdowns: 12, averagePerReception: 12.9, targetShare: 32.1 } },

  // LV Raiders
  { id: 'qb-lv', name: 'Jimmy Garoppolo', team: 'LV', position: 'QB', stats: { passingYards: 3839, passingTouchdowns: 22, interceptions: 8, completionPercentage: 65.8, yardsPerAttempt: 7.4 } },
  { id: 'rb-lv', name: 'Josh Jacobs', team: 'LV', position: 'RB', stats: { rushingYards: 1150, rushingTouchdowns: 10, receptions: 42, receivingYards: 320, receivingTouchdowns: 1 } },
  { id: 'te-lv', name: 'Darren Waller', team: 'LV', position: 'TE', stats: { receptions: 76, receivingYards: 940, receivingTouchdowns: 5, averagePerReception: 12.4, targetShare: 18.2 } },

  // GB Packers
  { id: 'qb-gb', name: 'Jordan Love', team: 'GB', position: 'QB', stats: { passingYards: 4747, passingTouchdowns: 32, interceptions: 11, completionPercentage: 64.2, yardsPerAttempt: 7.7 } },
  { id: 'rb-gb', name: 'Aaron Jones', team: 'GB', position: 'RB', stats: { rushingYards: 1084, rushingTouchdowns: 9, receptions: 52, receivingYards: 474, receivingTouchdowns: 2 } },
  { id: 'wr-gb', name: 'Jaylen Watson', team: 'GB', position: 'WR', stats: { receptions: 90, receivingYards: 1314, receivingTouchdowns: 10, averagePerReception: 14.6, targetShare: 21.5 } },

  // PHI Eagles
  { id: 'qb-phi', name: 'Jalen Hurts', team: 'PHI', position: 'QB', stats: { passingYards: 3868, passingTouchdowns: 22, interceptions: 8, completionPercentage: 62.1, yardsPerAttempt: 7.3 } },
  { id: 'rb-phi', name: 'Saquon Barkley', team: 'PHI', position: 'RB', stats: { rushingYards: 2038, rushingTouchdowns: 13, receptions: 37, receivingYards: 363, receivingTouchdowns: 2 } },
  { id: 'wr-phi', name: 'A.J. Brown', team: 'PHI', position: 'WR', stats: { receptions: 132, receivingYards: 1838, receivingTouchdowns: 13, averagePerReception: 13.9, targetShare: 29.8 } },

  // MIA Dolphins
  { id: 'qb-mia', name: 'Tua Tagovailoa', team: 'MIA', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 29, interceptions: 10, completionPercentage: 68.3, yardsPerAttempt: 8.1 } },
  { id: 'rb-mia', name: 'DeVon Achane', team: 'MIA', position: 'RB', stats: { rushingYards: 895, rushingTouchdowns: 7, receptions: 43, receivingYards: 410, receivingTouchdowns: 3 } },
  { id: 'wr-mia', name: 'Tyreek Hill', team: 'MIA', position: 'WR', stats: { receptions: 119, receivingYards: 1799, receivingTouchdowns: 15, averagePerReception: 15.1, targetShare: 28.5 } },

  // DET Lions
  { id: 'qb-det', name: 'Jared Goff', team: 'DET', position: 'QB', stats: { passingYards: 4629, passingTouchdowns: 37, interceptions: 12, completionPercentage: 67.8, yardsPerAttempt: 8.0 } },
  { id: 'rb-det', name: 'David Montgomery', team: 'DET', position: 'RB', stats: { rushingYards: 1037, rushingTouchdowns: 12, receptions: 39, receivingYards: 304, receivingTouchdowns: 2 } },
  { id: 'wr-det', name: 'Amon-Ra St. Brown', team: 'DET', position: 'WR', stats: { receptions: 119, receivingYards: 1511, receivingTouchdowns: 10, averagePerReception: 12.7, targetShare: 26.9 } },

  // LAC Chargers
  { id: 'qb-lac', name: 'Justin Herbert', team: 'LAC', position: 'QB', stats: { passingYards: 5014, passingTouchdowns: 32, interceptions: 13, completionPercentage: 65.1, yardsPerAttempt: 7.9 } },
  { id: 'rb-lac', name: 'Gabe Nabers', team: 'LAC', position: 'RB', stats: { rushingYards: 1178, rushingTouchdowns: 10, receptions: 51, receivingYards: 485, receivingTouchdowns: 2 } },
  { id: 'wr-lac', name: 'Mike Williams', team: 'LAC', position: 'WR', stats: { receptions: 76, receivingYards: 1130, receivingTouchdowns: 6, averagePerReception: 14.9, targetShare: 17.2 } },

  // BAL Ravens
  { id: 'qb-bal', name: 'Lamar Jackson', team: 'BAL', position: 'QB', stats: { passingYards: 4172, passingTouchdowns: 24, interceptions: 8, completionPercentage: 66.7, yardsPerAttempt: 8.1 } },
  { id: 'rb-bal', name: 'Derrick Henry', team: 'BAL', position: 'RB', stats: { rushingYards: 915, rushingTouchdowns: 8, receptions: 27, receivingYards: 206, receivingTouchdowns: 0 } },
  { id: 'wr-bal', name: 'Rashod Bateman', team: 'BAL', position: 'WR', stats: { receptions: 81, receivingYards: 1112, receivingTouchdowns: 7, averagePerReception: 13.7, targetShare: 18.3 } },

  // MIN Vikings
  { id: 'qb-min', name: 'Kirk Cousins', team: 'MIN', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 35, interceptions: 7, completionPercentage: 70.4, yardsPerAttempt: 8.2 } },
  { id: 'rb-min', name: 'Dalvin Cook', team: 'MIN', position: 'RB', stats: { rushingYards: 872, rushingTouchdowns: 6, receptions: 44, receivingYards: 385, receivingTouchdowns: 1 } },
  { id: 'wr-min', name: 'Justin Jefferson', team: 'MIN', position: 'WR', stats: { receptions: 108, receivingYards: 1616, receivingTouchdowns: 12, averagePerReception: 14.9, targetShare: 24.4 } },

  // LAR Rams
  { id: 'qb-lar', name: 'Matthew Stafford', team: 'LAR', position: 'QB', stats: { passingYards: 3641, passingTouchdowns: 20, interceptions: 8, completionPercentage: 63.2, yardsPerAttempt: 7.5 } },
  { id: 'rb-lar', name: 'Kyren Williams', team: 'LAR', position: 'RB', stats: { rushingYards: 1162, rushingTouchdowns: 8, receptions: 57, receivingYards: 484, receivingTouchdowns: 1 } },
  { id: 'wr-lar', name: 'Cooper Kupp', team: 'LAR', position: 'WR', stats: { receptions: 97, receivingYards: 1296, receivingTouchdowns: 9, averagePerReception: 13.4, targetShare: 22.1 } },

  // SEA Seahawks
  { id: 'qb-sea', name: 'Geno Smith', team: 'SEA', position: 'QB', stats: { passingYards: 3808, passingTouchdowns: 26, interceptions: 13, completionPercentage: 64.5, yardsPerAttempt: 7.4 } },
  { id: 'rb-sea', name: 'Kenneth Walker III', team: 'SEA', position: 'RB', stats: { rushingYards: 1014, rushingTouchdowns: 7, receptions: 29, receivingYards: 214, receivingTouchdowns: 1 } },
  { id: 'wr-sea', name: 'DK Metcalf', team: 'SEA', position: 'WR', stats: { receptions: 91, receivingYards: 1335, receivingTouchdowns: 8, averagePerReception: 14.7, targetShare: 20.5 } },

  // ARI Cardinals
  { id: 'qb-ari', name: 'Kyler Murray', team: 'ARI', position: 'QB', stats: { passingYards: 3964, passingTouchdowns: 26, interceptions: 11, completionPercentage: 65.1, yardsPerAttempt: 7.6 } },
  { id: 'rb-ari', name: 'James Conner', team: 'ARI', position: 'RB', stats: { rushingYards: 763, rushingTouchdowns: 7, receptions: 32, receivingYards: 220, receivingTouchdowns: 2 } },
  { id: 'wr-ari', name: 'Marvin Harrison Jr.', team: 'ARI', position: 'WR', stats: { receptions: 104, receivingYards: 1589, receivingTouchdowns: 13, averagePerReception: 15.3, targetShare: 25.8 } },

  // CIN Bengals
  { id: 'qb-cin', name: 'Joe Burrow', team: 'CIN', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 38, interceptions: 11, completionPercentage: 67.3, yardsPerAttempt: 8.3 } },
  { id: 'rb-cin', name: 'Joe Mixon', team: 'CIN', position: 'RB', stats: { rushingYards: 929, rushingTouchdowns: 8, receptions: 41, receivingYards: 311, receivingTouchdowns: 1 } },
  { id: 'wr-cin', name: 'Jamarr Chase', team: 'CIN', position: 'WR', stats: { receptions: 127, receivingYards: 1803, receivingTouchdowns: 17, averagePerReception: 14.2, targetShare: 29.7 } },

  // PIT Steelers
  { id: 'qb-pit', name: 'Russell Wilson', team: 'PIT', position: 'QB', stats: { passingYards: 2451, passingTouchdowns: 16, interceptions: 8, completionPercentage: 64.8, yardsPerAttempt: 7.2 } },
  { id: 'rb-pit', name: 'Najee Harris', team: 'PIT', position: 'RB', stats: { rushingYards: 714, rushingTouchdowns: 3, receptions: 47, receivingYards: 382, receivingTouchdowns: 1 } },
  { id: 'wr-pit', name: 'George Pickens', team: 'PIT', position: 'WR', stats: { receptions: 63, receivingYards: 1088, receivingTouchdowns: 5, averagePerReception: 17.3, targetShare: 15.8 } },

  // CLE Browns
  { id: 'qb-cle', name: 'Deshaun Watson', team: 'CLE', position: 'QB', stats: { passingYards: 2217, passingTouchdowns: 14, interceptions: 8, completionPercentage: 63.1, yardsPerAttempt: 7.1 } },
  { id: 'rb-cle', name: 'Nick Chubb', team: 'CLE', position: 'RB', stats: { rushingYards: 1339, rushingTouchdowns: 6, receptions: 22, receivingYards: 151, receivingTouchdowns: 0 } },
  { id: 'wr-cle', name: 'Amari Cooper', team: 'CLE', position: 'WR', stats: { receptions: 72, receivingYards: 1014, receivingTouchdowns: 5, averagePerReception: 14.1, targetShare: 18.2 } },

  // NYJ Jets
  { id: 'qb-nyj', name: 'Aaron Rodgers', team: 'NYJ', position: 'QB', stats: { passingYards: 3964, passingTouchdowns: 24, interceptions: 10, completionPercentage: 63.8, yardsPerAttempt: 7.3 } },
  { id: 'rb-nyj', name: 'Breece Hall', team: 'NYJ', position: 'RB', stats: { rushingYards: 862, rushingTouchdowns: 5, receptions: 56, receivingYards: 462, receivingTouchdowns: 1 } },
  { id: 'wr-nyj', name: 'Garrett Wilson', team: 'NYJ', position: 'WR', stats: { receptions: 83, receivingYards: 1211, receivingTouchdowns: 8, averagePerReception: 14.6, targetShare: 21.2 } },

  // NE Patriots
  { id: 'qb-ne', name: 'Jacoby Brissett', team: 'NE', position: 'QB', stats: { passingYards: 2694, passingTouchdowns: 12, interceptions: 8, completionPercentage: 61.2, yardsPerAttempt: 6.9 } },
  { id: 'rb-ne', name: 'Rhamondre Stevenson', team: 'NE', position: 'RB', stats: { rushingYards: 945, rushingTouchdowns: 8, receptions: 38, receivingYards: 290, receivingTouchdowns: 2 } },
  { id: 'wr-ne', name: 'DeVante Parker', team: 'NE', position: 'WR', stats: { receptions: 52, receivingYards: 614, receivingTouchdowns: 3, averagePerReception: 11.8, targetShare: 12.3 } },

  // WAS Commanders
  { id: 'qb-was', name: 'Jayden Daniels', team: 'WAS', position: 'QB', stats: { passingYards: 3322, passingTouchdowns: 25, interceptions: 9, completionPercentage: 60.4, yardsPerAttempt: 7.1 } },
  { id: 'rb-was', name: 'Antonio Gibson', team: 'WAS', position: 'RB', stats: { rushingYards: 801, rushingTouchdowns: 6, receptions: 33, receivingYards: 279, receivingTouchdowns: 1 } },
  { id: 'wr-was', name: 'Terry McLaurin', team: 'WAS', position: 'WR', stats: { receptions: 96, receivingYards: 1410, receivingTouchdowns: 8, averagePerReception: 14.7, targetShare: 23.1 } },

  // NYG Giants
  { id: 'qb-nyg', name: 'Tommy DeVito', team: 'NYG', position: 'QB', stats: { passingYards: 2477, passingTouchdowns: 13, interceptions: 7, completionPercentage: 62.1, yardsPerAttempt: 6.8 } },
  { id: 'rb-nyg', name: 'Saquon Barkley', team: 'NYG', position: 'RB', stats: { rushingYards: 1312, rushingTouchdowns: 7, receptions: 35, receivingYards: 262, receivingTouchdowns: 0 } },
  { id: 'wr-nyg', name: 'Jalin Hyatt', team: 'NYG', position: 'WR', stats: { receptions: 47, receivingYards: 774, receivingTouchdowns: 7, averagePerReception: 16.5, targetShare: 11.2 } },

  // CHI Bears
  { id: 'qb-chi', name: 'Caleb Williams', team: 'CHI', position: 'QB', stats: { passingYards: 2542, passingTouchdowns: 12, interceptions: 7, completionPercentage: 59.4, yardsPerAttempt: 6.9 } },
  { id: 'rb-chi', name: 'David Montgomery', team: 'CHI', position: 'RB', stats: { rushingYards: 731, rushingTouchdowns: 4, receptions: 44, receivingYards: 365, receivingTouchdowns: 2 } },
  { id: 'wr-chi', name: 'Rome Odunze', team: 'CHI', position: 'WR', stats: { receptions: 60, receivingYards: 670, receivingTouchdowns: 2, averagePerReception: 11.2, targetShare: 16.4 } },

  // DEN Broncos
  { id: 'qb-den', name: 'Russell Wilson', team: 'DEN', position: 'QB', stats: { passingYards: 3818, passingTouchdowns: 25, interceptions: 7, completionPercentage: 64.9, yardsPerAttempt: 7.5 } },
  { id: 'rb-den', name: 'Javonte Williams', team: 'DEN', position: 'RB', stats: { rushingYards: 903, rushingTouchdowns: 4, receptions: 43, receivingYards: 322, receivingTouchdowns: 1 } },
  { id: 'wr-den', name: 'Courtland Sutton', team: 'DEN', position: 'WR', stats: { receptions: 72, receivingYards: 1082, receivingTouchdowns: 6, averagePerReception: 15.0, targetShare: 17.8 } },

  // HOU Texans
  { id: 'qb-hou', name: 'C.J. Stroud', team: 'HOU', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 27, interceptions: 10, completionPercentage: 63.4, yardsPerAttempt: 7.8 } },
  { id: 'rb-hou', name: 'Joe Mixon', team: 'HOU', position: 'RB', stats: { rushingYards: 1085, rushingTouchdowns: 7, receptions: 39, receivingYards: 310, receivingTouchdowns: 1 } },
  { id: 'wr-hou', name: 'Stefon Diggs', team: 'HOU', position: 'WR', stats: { receptions: 103, receivingYards: 1517, receivingTouchdowns: 9, averagePerReception: 14.7, targetShare: 22.1 } },

  // IND Colts
  { id: 'qb-ind', name: 'Anthony Richardson', team: 'IND', position: 'QB', stats: { passingYards: 3694, passingTouchdowns: 22, interceptions: 11, completionPercentage: 59.1, yardsPerAttempt: 7.2 } },
  { id: 'rb-ind', name: 'Jonathan Taylor', team: 'IND', position: 'RB', stats: { rushingYards: 1206, rushingTouchdowns: 8, receptions: 31, receivingYards: 245, receivingTouchdowns: 1 } },
  { id: 'wr-ind', name: 'Michael Pittman Jr.', team: 'IND', position: 'WR', stats: { receptions: 109, receivingYards: 1531, receivingTouchdowns: 9, averagePerReception: 14.1, targetShare: 24.5 } },

  // JAX Jaguars
  { id: 'qb-jax', name: 'Trevor Lawrence', team: 'JAX', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 25, interceptions: 11, completionPercentage: 61.2, yardsPerAttempt: 7.4 } },
  { id: 'rb-jax', name: 'Travis Etienne', team: 'JAX', position: 'RB', stats: { rushingYards: 1218, rushingTouchdowns: 9, receptions: 54, receivingYards: 487, receivingTouchdowns: 2 } },
  { id: 'wr-jax', name: 'Brian Thomas Jr.', team: 'JAX', position: 'WR', stats: { receptions: 85, receivingYards: 1385, receivingTouchdowns: 9, averagePerReception: 16.3, targetShare: 18.9 } },

  // TEN Titans
  { id: 'qb-ten', name: 'Will Levis', team: 'TEN', position: 'QB', stats: { passingYards: 3694, passingTouchdowns: 20, interceptions: 12, completionPercentage: 58.4, yardsPerAttempt: 7.0 } },
  { id: 'rb-ten', name: 'Tony Pollard', team: 'TEN', position: 'RB', stats: { rushingYards: 1395, rushingTouchdowns: 11, receptions: 41, receivingYards: 368, receivingTouchdowns: 2 } },
  { id: 'wr-ten', name: 'DeAndre Washington', team: 'TEN', position: 'WR', stats: { receptions: 67, receivingYards: 945, receivingTouchdowns: 6, averagePerReception: 14.1, targetShare: 15.3 } },

  // TB Buccaneers
  { id: 'qb-tb', name: 'Baker Mayfield', team: 'TB', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 30, interceptions: 10, completionPercentage: 66.4, yardsPerAttempt: 8.0 } },
  { id: 'rb-tb', name: 'Leonard Fournette', team: 'TB', position: 'RB', stats: { rushingYards: 812, rushingTouchdowns: 5, receptions: 39, receivingYards: 310, receivingTouchdowns: 2 } },
  { id: 'wr-tb', name: 'Mike Evans', team: 'TB', position: 'WR', stats: { receptions: 86, receivingYards: 1322, receivingTouchdowns: 11, averagePerReception: 15.4, targetShare: 19.7 } },

  // ATL Falcons
  { id: 'qb-atl', name: 'Marcus Mariota', team: 'ATL', position: 'QB', stats: { passingYards: 3694, passingTouchdowns: 24, interceptions: 9, completionPercentage: 63.2, yardsPerAttempt: 7.4 } },
  { id: 'rb-atl', name: 'Bijan Robinson', team: 'ATL', position: 'RB', stats: { rushingYards: 1004, rushingTouchdowns: 6, receptions: 48, receivingYards: 425, receivingTouchdowns: 2 } },
  { id: 'wr-atl', name: 'Drake London', team: 'ATL', position: 'WR', stats: { receptions: 91, receivingYards: 1434, receivingTouchdowns: 8, averagePerReception: 15.8, targetShare: 20.3 } },

  // NO Saints
  { id: 'qb-no', name: 'Derek Carr', team: 'NO', position: 'QB', stats: { passingYards: 4694, passingTouchdowns: 28, interceptions: 9, completionPercentage: 67.5, yardsPerAttempt: 8.1 } },
  { id: 'rb-no', name: 'Alvin Kamara', team: 'NO', position: 'RB', stats: { rushingYards: 758, rushingTouchdowns: 4, receptions: 61, receivingYards: 540, receivingTouchdowns: 3 } },
  { id: 'wr-no', name: 'Chris Olave', team: 'NO', position: 'WR', stats: { receptions: 105, receivingYards: 1547, receivingTouchdowns: 10, averagePerReception: 14.7, targetShare: 23.8 } },

  // CAR Panthers
  { id: 'qb-car', name: 'Bryce Young', team: 'CAR', position: 'QB', stats: { passingYards: 2803, passingTouchdowns: 11, interceptions: 8, completionPercentage: 58.6, yardsPerAttempt: 6.8 } },
  { id: 'rb-car', name: 'Chuba Hubbard', team: 'CAR', position: 'RB', stats: { rushingYards: 957, rushingTouchdowns: 6, receptions: 35, receivingYards: 265, receivingTouchdowns: 1 } },
  { id: 'wr-car', name: 'Adam Thielen', team: 'CAR', position: 'WR', stats: { receptions: 73, receivingYards: 1023, receivingTouchdowns: 6, averagePerReception: 14.0, targetShare: 16.5 } },
];

export function getPlayers(position?: string): Player[] {
  if (position) {
    return realPlayers.filter((player) => player.position === position);
  }
  return realPlayers;
}

export function getPlayerById(id: string): Player | undefined {
  return realPlayers.find((player) => player.id === id);
}

export function getPlayersByTeam(teamId: string): Player[] {
  return realPlayers.filter((player) => player.team === teamId);
}

export const NFL_PLAYERS = realPlayers;
