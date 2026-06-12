import { Player } from '../types';

const mockPlayers: Player[] = [
  // QBs
  {
    id: 'qb-1',
    name: 'Patrick Mahomes',
    team: 'KC',
    position: 'QB',
    stats: {
      passingYards: 5250,
      passingTouchdowns: 41,
      interceptions: 10,
      completionPercentage: 66.7,
      yardsPerAttempt: 8.2,
    },
  },
  {
    id: 'qb-2',
    name: 'Brock Purdy',
    team: 'SF',
    position: 'QB',
    stats: {
      passingYards: 4694,
      passingTouchdowns: 35,
      interceptions: 11,
      completionPercentage: 67.5,
      yardsPerAttempt: 7.9,
    },
  },
  {
    id: 'qb-3',
    name: 'Josh Allen',
    team: 'BUF',
    position: 'QB',
    stats: {
      passingYards: 4694,
      passingTouchdowns: 28,
      interceptions: 6,
      completionPercentage: 63.5,
      yardsPerAttempt: 7.8,
    },
  },
  {
    id: 'qb-4',
    name: 'Dak Prescott',
    team: 'DAL',
    position: 'QB',
    stats: {
      passingYards: 5322,
      passingTouchdowns: 36,
      interceptions: 9,
      completionPercentage: 69.2,
      yardsPerAttempt: 8.1,
    },
  },
  // RBs
  {
    id: 'rb-1',
    name: 'Christian McCaffrey',
    team: 'SF',
    position: 'RB',
    stats: {
      rushingYards: 1459,
      rushingTouchdowns: 12,
      receptions: 80,
      receivingYards: 1016,
      receivingTouchdowns: 6,
    },
  },
  {
    id: 'rb-2',
    name: 'Derrick Henry',
    team: 'KC',
    position: 'RB',
    stats: {
      rushingYards: 1540,
      rushingTouchdowns: 16,
      receptions: 44,
      receivingYards: 385,
      receivingTouchdowns: 2,
    },
  },
  {
    id: 'rb-3',
    name: 'Josh Jacobs',
    team: 'LV',
    position: 'RB',
    stats: {
      rushingYards: 1150,
      rushingTouchdowns: 10,
      receptions: 42,
      receivingYards: 320,
      receivingTouchdowns: 1,
    },
  },
  {
    id: 'rb-4',
    name: 'Tony Pollard',
    team: 'DAL',
    position: 'RB',
    stats: {
      rushingYards: 1518,
      rushingTouchdowns: 13,
      receptions: 49,
      receivingYards: 419,
      receivingTouchdowns: 3,
    },
  },
  // WRs
  {
    id: 'wr-1',
    name: 'Tyreek Hill',
    team: 'KC',
    position: 'WR',
    stats: {
      receptions: 119,
      receivingYards: 1799,
      receivingTouchdowns: 15,
      averagePerReception: 15.1,
      targetShare: 28.5,
    },
  },
  {
    id: 'wr-2',
    name: 'Brandon Aiyuk',
    team: 'SF',
    position: 'WR',
    stats: {
      receptions: 78,
      receivingYards: 1342,
      receivingTouchdowns: 9,
      averagePerReception: 17.2,
      targetShare: 18.9,
    },
  },
  {
    id: 'wr-3',
    name: 'CeeDee Lamb',
    team: 'DAL',
    position: 'WR',
    stats: {
      receptions: 135,
      receivingYards: 1749,
      receivingTouchdowns: 12,
      averagePerReception: 12.9,
      targetShare: 32.1,
    },
  },
  {
    id: 'wr-4',
    name: 'Stefon Diggs',
    team: 'BUF',
    position: 'WR',
    stats: {
      receptions: 107,
      receivingYards: 1539,
      receivingTouchdowns: 8,
      averagePerReception: 14.4,
      targetShare: 24.3,
    },
  },
  // TEs
  {
    id: 'te-1',
    name: 'Travis Kelce',
    team: 'KC',
    position: 'TE',
    stats: {
      receptions: 93,
      receivingYards: 984,
      receivingTouchdowns: 9,
      averagePerReception: 10.6,
      targetShare: 22.1,
    },
  },
  {
    id: 'te-2',
    name: 'George Kittle',
    team: 'SF',
    position: 'TE',
    stats: {
      receptions: 85,
      receivingYards: 1145,
      receivingTouchdowns: 6,
      averagePerReception: 13.5,
      targetShare: 20.5,
    },
  },
  {
    id: 'te-3',
    name: 'Darren Waller',
    team: 'LV',
    position: 'TE',
    stats: {
      receptions: 76,
      receivingYards: 940,
      receivingTouchdowns: 5,
      averagePerReception: 12.4,
      targetShare: 18.2,
    },
  },
  {
    id: 'te-4',
    name: 'Dallas Goedert',
    team: 'BUF',
    position: 'TE',
    stats: {
      receptions: 67,
      receivingYards: 823,
      receivingTouchdowns: 4,
      averagePerReception: 12.3,
      targetShare: 15.8,
    },
  },
];

export function getPlayers(position?: string): Player[] {
  if (position) {
    return mockPlayers.filter((player) => player.position === position);
  }
  return mockPlayers;
}

export function getPlayerById(id: string): Player | undefined {
  return mockPlayers.find((player) => player.id === id);
}
