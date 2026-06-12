import { Team } from '../types';

const mockTeams: Team[] = [
  {
    id: 'KC',
    name: 'Kansas City Chiefs',
    offense: {
      passRate: 60,
      rushRate: 40,
      yardsPerGame: 380,
      pointsPerGame: 28.5,
      turnovers: 12,
    },
    defense: {
      yardsAllowed: 340,
      pointsAllowed: 21.5,
      sacks: 32,
    },
    downTendencies: [
      { down: '1st', passPct: 55, rushPct: 45 },
      { down: '2nd', passPct: 65, rushPct: 35 },
      { down: '3rd', passPct: 75, rushPct: 25 },
    ],
  },
  {
    id: 'SF',
    name: 'San Francisco 49ers',
    offense: {
      passRate: 50,
      rushRate: 50,
      yardsPerGame: 390,
      pointsPerGame: 29.2,
      turnovers: 10,
    },
    defense: {
      yardsAllowed: 310,
      pointsAllowed: 19.8,
      sacks: 38,
    },
    downTendencies: [
      { down: '1st', passPct: 45, rushPct: 55 },
      { down: '2nd', passPct: 55, rushPct: 45 },
      { down: '3rd', passPct: 70, rushPct: 30 },
    ],
  },
  {
    id: 'LV',
    name: 'Las Vegas Raiders',
    offense: {
      passRate: 65,
      rushRate: 35,
      yardsPerGame: 360,
      pointsPerGame: 25.8,
      turnovers: 18,
    },
    defense: {
      yardsAllowed: 370,
      pointsAllowed: 25.5,
      sacks: 28,
    },
    downTendencies: [
      { down: '1st', passPct: 60, rushPct: 40 },
      { down: '2nd', passPct: 70, rushPct: 30 },
      { down: '3rd', passPct: 80, rushPct: 20 },
    ],
  },
  {
    id: 'BUF',
    name: 'Buffalo Bills',
    offense: {
      passRate: 58,
      rushRate: 42,
      yardsPerGame: 375,
      pointsPerGame: 27.1,
      turnovers: 14,
    },
    defense: {
      yardsAllowed: 325,
      pointsAllowed: 20.2,
      sacks: 35,
    },
    downTendencies: [
      { down: '1st', passPct: 52, rushPct: 48 },
      { down: '2nd', passPct: 62, rushPct: 38 },
      { down: '3rd', passPct: 72, rushPct: 28 },
    ],
  },
  {
    id: 'DAL',
    name: 'Dallas Cowboys',
    offense: {
      passRate: 62,
      rushRate: 38,
      yardsPerGame: 385,
      pointsPerGame: 28.9,
      turnovers: 11,
    },
    defense: {
      yardsAllowed: 335,
      pointsAllowed: 22.4,
      sacks: 34,
    },
    downTendencies: [
      { down: '1st', passPct: 58, rushPct: 42 },
      { down: '2nd', passPct: 68, rushPct: 32 },
      { down: '3rd', passPct: 76, rushPct: 24 },
    ],
  },
  {
    id: 'GB',
    name: 'Green Bay Packers',
    offense: {
      passRate: 64,
      rushRate: 36,
      yardsPerGame: 368,
      pointsPerGame: 26.5,
      turnovers: 13,
    },
    defense: {
      yardsAllowed: 345,
      pointsAllowed: 23.1,
      sacks: 31,
    },
    downTendencies: [
      { down: '1st', passPct: 61, rushPct: 39 },
      { down: '2nd', passPct: 67, rushPct: 33 },
      { down: '3rd', passPct: 74, rushPct: 26 },
    ],
  },
];

export function getTeams(): Team[] {
  return mockTeams;
}

export function getTeamById(id: string): Team | undefined {
  return mockTeams.find((team) => team.id === id);
}
