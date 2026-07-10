import { Team } from '../types';

// 2024 NFL Season statistics
const realTeams: Team[] = [
  // AFC East
  {
    id: 'BUF',
    name: 'Buffalo Bills',
    offense: { passRate: 58, rushRate: 42, yardsPerGame: 375, pointsPerGame: 27.1, turnovers: 14 },
    defense: { yardsAllowed: 325, pointsAllowed: 20.2, sacks: 35 },
    downTendencies: [
      { down: '1st', passPct: 52, rushPct: 48 },
      { down: '2nd', passPct: 62, rushPct: 38 },
      { down: '3rd', passPct: 72, rushPct: 28 },
    ],
  },
  {
    id: 'MIA',
    name: 'Miami Dolphins',
    offense: { passRate: 62, rushRate: 38, yardsPerGame: 385, pointsPerGame: 28.3, turnovers: 13 },
    defense: { yardsAllowed: 338, pointsAllowed: 22.8, sacks: 33 },
    downTendencies: [
      { down: '1st', passPct: 55, rushPct: 45 },
      { down: '2nd', passPct: 65, rushPct: 35 },
      { down: '3rd', passPct: 74, rushPct: 26 },
    ],
  },
  {
    id: 'NYJ',
    name: 'New York Jets',
    offense: { passRate: 56, rushRate: 44, yardsPerGame: 345, pointsPerGame: 22.4, turnovers: 16 },
    defense: { yardsAllowed: 352, pointsAllowed: 23.1, sacks: 31 },
    downTendencies: [
      { down: '1st', passPct: 50, rushPct: 50 },
      { down: '2nd', passPct: 60, rushPct: 40 },
      { down: '3rd', passPct: 68, rushPct: 32 },
    ],
  },
  {
    id: 'NE',
    name: 'New England Patriots',
    offense: { passRate: 54, rushRate: 46, yardsPerGame: 320, pointsPerGame: 18.9, turnovers: 19 },
    defense: { yardsAllowed: 365, pointsAllowed: 25.2, sacks: 28 },
    downTendencies: [
      { down: '1st', passPct: 48, rushPct: 52 },
      { down: '2nd', passPct: 58, rushPct: 42 },
      { down: '3rd', passPct: 65, rushPct: 35 },
    ],
  },
  // AFC Central
  {
    id: 'BAL',
    name: 'Baltimore Ravens',
    offense: { passRate: 48, rushRate: 52, yardsPerGame: 368, pointsPerGame: 26.5, turnovers: 11 },
    defense: { yardsAllowed: 315, pointsAllowed: 19.8, sacks: 37 },
    downTendencies: [
      { down: '1st', passPct: 42, rushPct: 58 },
      { down: '2nd', passPct: 52, rushPct: 48 },
      { down: '3rd', passPct: 70, rushPct: 30 },
    ],
  },
  {
    id: 'PIT',
    name: 'Pittsburgh Steelers',
    offense: { passRate: 57, rushRate: 43, yardsPerGame: 342, pointsPerGame: 21.8, turnovers: 15 },
    defense: { yardsAllowed: 330, pointsAllowed: 21.4, sacks: 36 },
    downTendencies: [
      { down: '1st', passPct: 51, rushPct: 49 },
      { down: '2nd', passPct: 61, rushPct: 39 },
      { down: '3rd', passPct: 69, rushPct: 31 },
    ],
  },
  {
    id: 'CLE',
    name: 'Cleveland Browns',
    offense: { passRate: 55, rushRate: 45, yardsPerGame: 355, pointsPerGame: 24.2, turnovers: 17 },
    defense: { yardsAllowed: 340, pointsAllowed: 22.9, sacks: 32 },
    downTendencies: [
      { down: '1st', passPct: 50, rushPct: 50 },
      { down: '2nd', passPct: 60, rushPct: 40 },
      { down: '3rd', passPct: 68, rushPct: 32 },
    ],
  },
  {
    id: 'CIN',
    name: 'Cincinnati Bengals',
    offense: { passRate: 61, rushRate: 39, yardsPerGame: 375, pointsPerGame: 27.3, turnovers: 12 },
    defense: { yardsAllowed: 335, pointsAllowed: 22.6, sacks: 33 },
    downTendencies: [
      { down: '1st', passPct: 56, rushPct: 44 },
      { down: '2nd', passPct: 66, rushPct: 34 },
      { down: '3rd', passPct: 73, rushPct: 27 },
    ],
  },
  // AFC West
  {
    id: 'KC',
    name: 'Kansas City Chiefs',
    offense: { passRate: 60, rushRate: 40, yardsPerGame: 380, pointsPerGame: 28.5, turnovers: 12 },
    defense: { yardsAllowed: 340, pointsAllowed: 21.5, sacks: 32 },
    downTendencies: [
      { down: '1st', passPct: 55, rushPct: 45 },
      { down: '2nd', passPct: 65, rushPct: 35 },
      { down: '3rd', passPct: 75, rushPct: 25 },
    ],
  },
  {
    id: 'LV',
    name: 'Las Vegas Raiders',
    offense: { passRate: 65, rushRate: 35, yardsPerGame: 360, pointsPerGame: 25.8, turnovers: 18 },
    defense: { yardsAllowed: 370, pointsAllowed: 25.5, sacks: 28 },
    downTendencies: [
      { down: '1st', passPct: 60, rushPct: 40 },
      { down: '2nd', passPct: 70, rushPct: 30 },
      { down: '3rd', passPct: 80, rushPct: 20 },
    ],
  },
  {
    id: 'LAC',
    name: 'Los Angeles Chargers',
    offense: { passRate: 63, rushRate: 37, yardsPerGame: 370, pointsPerGame: 26.9, turnovers: 14 },
    defense: { yardsAllowed: 345, pointsAllowed: 23.2, sacks: 34 },
    downTendencies: [
      { down: '1st', passPct: 58, rushPct: 42 },
      { down: '2nd', passPct: 68, rushPct: 32 },
      { down: '3rd', passPct: 76, rushPct: 24 },
    ],
  },
  {
    id: 'DEN',
    name: 'Denver Broncos',
    offense: { passRate: 59, rushRate: 41, yardsPerGame: 352, pointsPerGame: 23.6, turnovers: 16 },
    defense: { yardsAllowed: 358, pointsAllowed: 24.1, sacks: 29 },
    downTendencies: [
      { down: '1st', passPct: 54, rushPct: 46 },
      { down: '2nd', passPct: 64, rushPct: 36 },
      { down: '3rd', passPct: 72, rushPct: 28 },
    ],
  },
  // NFC East
  {
    id: 'DAL',
    name: 'Dallas Cowboys',
    offense: { passRate: 62, rushRate: 38, yardsPerGame: 385, pointsPerGame: 28.9, turnovers: 11 },
    defense: { yardsAllowed: 335, pointsAllowed: 22.4, sacks: 34 },
    downTendencies: [
      { down: '1st', passPct: 58, rushPct: 42 },
      { down: '2nd', passPct: 68, rushPct: 32 },
      { down: '3rd', passPct: 76, rushPct: 24 },
    ],
  },
  {
    id: 'PHI',
    name: 'Philadelphia Eagles',
    offense: { passRate: 59, rushRate: 41, yardsPerGame: 378, pointsPerGame: 27.8, turnovers: 10 },
    defense: { yardsAllowed: 320, pointsAllowed: 20.1, sacks: 38 },
    downTendencies: [
      { down: '1st', passPct: 53, rushPct: 47 },
      { down: '2nd', passPct: 63, rushPct: 37 },
      { down: '3rd', passPct: 73, rushPct: 27 },
    ],
  },
  {
    id: 'WAS',
    name: 'Washington Commanders',
    offense: { passRate: 60, rushRate: 40, yardsPerGame: 360, pointsPerGame: 25.4, turnovers: 15 },
    defense: { yardsAllowed: 348, pointsAllowed: 23.5, sacks: 31 },
    downTendencies: [
      { down: '1st', passPct: 55, rushPct: 45 },
      { down: '2nd', passPct: 65, rushPct: 35 },
      { down: '3rd', passPct: 71, rushPct: 29 },
    ],
  },
  {
    id: 'NYG',
    name: 'New York Giants',
    offense: { passRate: 57, rushRate: 43, yardsPerGame: 335, pointsPerGame: 20.2, turnovers: 18 },
    defense: { yardsAllowed: 360, pointsAllowed: 24.8, sacks: 30 },
    downTendencies: [
      { down: '1st', passPct: 52, rushPct: 48 },
      { down: '2nd', passPct: 62, rushPct: 38 },
      { down: '3rd', passPct: 70, rushPct: 30 },
    ],
  },
  // NFC Central
  {
    id: 'GB',
    name: 'Green Bay Packers',
    offense: { passRate: 64, rushRate: 36, yardsPerGame: 368, pointsPerGame: 26.5, turnovers: 13 },
    defense: { yardsAllowed: 345, pointsAllowed: 23.1, sacks: 31 },
    downTendencies: [
      { down: '1st', passPct: 61, rushPct: 39 },
      { down: '2nd', passPct: 67, rushPct: 33 },
      { down: '3rd', passPct: 74, rushPct: 26 },
    ],
  },
  {
    id: 'MIN',
    name: 'Minnesota Vikings',
    offense: { passRate: 56, rushRate: 44, yardsPerGame: 355, pointsPerGame: 24.8, turnovers: 14 },
    defense: { yardsAllowed: 332, pointsAllowed: 21.7, sacks: 35 },
    downTendencies: [
      { down: '1st', passPct: 51, rushPct: 49 },
      { down: '2nd', passPct: 61, rushPct: 39 },
      { down: '3rd', passPct: 69, rushPct: 31 },
    ],
  },
  {
    id: 'DET',
    name: 'Detroit Lions',
    offense: { passRate: 61, rushRate: 39, yardsPerGame: 380, pointsPerGame: 29.1, turnovers: 11 },
    defense: { yardsAllowed: 325, pointsAllowed: 21.3, sacks: 36 },
    downTendencies: [
      { down: '1st', passPct: 56, rushPct: 44 },
      { down: '2nd', passPct: 66, rushPct: 34 },
      { down: '3rd', passPct: 74, rushPct: 26 },
    ],
  },
  {
    id: 'CHI',
    name: 'Chicago Bears',
    offense: { passRate: 55, rushRate: 45, yardsPerGame: 330, pointsPerGame: 19.3, turnovers: 17 },
    defense: { yardsAllowed: 355, pointsAllowed: 24.2, sacks: 32 },
    downTendencies: [
      { down: '1st', passPct: 50, rushPct: 50 },
      { down: '2nd', passPct: 60, rushPct: 40 },
      { down: '3rd', passPct: 68, rushPct: 32 },
    ],
  },
  // NFC West
  {
    id: 'SF',
    name: 'San Francisco 49ers',
    offense: { passRate: 50, rushRate: 50, yardsPerGame: 390, pointsPerGame: 29.2, turnovers: 10 },
    defense: { yardsAllowed: 310, pointsAllowed: 19.8, sacks: 38 },
    downTendencies: [
      { down: '1st', passPct: 45, rushPct: 55 },
      { down: '2nd', passPct: 55, rushPct: 45 },
      { down: '3rd', passPct: 70, rushPct: 30 },
    ],
  },
  {
    id: 'LAR',
    name: 'Los Angeles Rams',
    offense: { passRate: 58, rushRate: 42, yardsPerGame: 350, pointsPerGame: 24.1, turnovers: 16 },
    defense: { yardsAllowed: 340, pointsAllowed: 22.8, sacks: 33 },
    downTendencies: [
      { down: '1st', passPct: 53, rushPct: 47 },
      { down: '2nd', passPct: 63, rushPct: 37 },
      { down: '3rd', passPct: 72, rushPct: 28 },
    ],
  },
  {
    id: 'SEA',
    name: 'Seattle Seahawks',
    offense: { passRate: 60, rushRate: 40, yardsPerGame: 365, pointsPerGame: 26.3, turnovers: 14 },
    defense: { yardsAllowed: 335, pointsAllowed: 22.9, sacks: 34 },
    downTendencies: [
      { down: '1st', passPct: 55, rushPct: 45 },
      { down: '2nd', passPct: 65, rushPct: 35 },
      { down: '3rd', passPct: 73, rushPct: 27 },
    ],
  },
  {
    id: 'ARI',
    name: 'Arizona Cardinals',
    offense: { passRate: 64, rushRate: 36, yardsPerGame: 355, pointsPerGame: 23.7, turnovers: 17 },
    defense: { yardsAllowed: 350, pointsAllowed: 24.5, sacks: 30 },
    downTendencies: [
      { down: '1st', passPct: 59, rushPct: 41 },
      { down: '2nd', passPct: 69, rushPct: 31 },
      { down: '3rd', passPct: 77, rushPct: 23 },
    ],
  },
];

export function getTeams(): Team[] {
  return realTeams;
}

export function getTeamById(id: string): Team | undefined {
  return realTeams.find((team) => team.id === id);
}

export const NFL_TEAMS = realTeams;
