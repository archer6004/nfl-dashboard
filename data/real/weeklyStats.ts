import type { WeeklyTeamStats, WeeklyPlayerStats } from '../types';

// Weekly team statistics for key teams (example data)
export const weeklyTeamStats: Record<string, WeeklyTeamStats[]> = {
  KC: [
    {
      week: 1,
      offense: { passRate: 62, rushRate: 38, yardsPerGame: 385, pointsPerGame: 30, turnovers: 1 },
      defense: { yardsAllowed: 310, pointsAllowed: 20, sacks: 3 },
    },
    {
      week: 2,
      offense: { passRate: 58, rushRate: 42, yardsPerGame: 375, pointsPerGame: 28, turnovers: 2 },
      defense: { yardsAllowed: 325, pointsAllowed: 21, sacks: 4 },
    },
    {
      week: 3,
      offense: { passRate: 60, rushRate: 40, yardsPerGame: 380, pointsPerGame: 28.5, turnovers: 1 },
      defense: { yardsAllowed: 340, pointsAllowed: 21.5, sacks: 3 },
    },
  ],
  SF: [
    {
      week: 1,
      offense: { passRate: 48, rushRate: 52, yardsPerGame: 395, pointsPerGame: 31, turnovers: 0 },
      defense: { yardsAllowed: 305, pointsAllowed: 19, sacks: 4 },
    },
    {
      week: 2,
      offense: { passRate: 50, rushRate: 50, yardsPerGame: 390, pointsPerGame: 29, turnovers: 1 },
      defense: { yardsAllowed: 310, pointsAllowed: 20, sacks: 4 },
    },
    {
      week: 3,
      offense: { passRate: 50, rushRate: 50, yardsPerGame: 390, pointsPerGame: 29.2, turnovers: 1 },
      defense: { yardsAllowed: 310, pointsAllowed: 19.8, sacks: 4 },
    },
  ],
  DAL: [
    {
      week: 1,
      offense: { passRate: 64, rushRate: 36, yardsPerGame: 390, pointsPerGame: 30, turnovers: 1 },
      defense: { yardsAllowed: 330, pointsAllowed: 22, sacks: 3 },
    },
    {
      week: 2,
      offense: { passRate: 62, rushRate: 38, yardsPerGame: 385, pointsPerGame: 29, turnovers: 1 },
      defense: { yardsAllowed: 335, pointsAllowed: 23, sacks: 4 },
    },
    {
      week: 3,
      offense: { passRate: 62, rushRate: 38, yardsPerGame: 385, pointsPerGame: 28.9, turnovers: 1 },
      defense: { yardsAllowed: 335, pointsAllowed: 22.4, sacks: 3 },
    },
  ],
};

// Weekly player statistics for key players
export const weeklyPlayerStats: Record<string, WeeklyPlayerStats[]> = {
  'qb-1': [
    { week: 1, stats: { passingYards: 310, passingTouchdowns: 3, interceptions: 0, completionPercentage: 68, yardsPerAttempt: 8.5 } },
    { week: 2, stats: { passingYards: 285, passingTouchdowns: 2, interceptions: 1, completionPercentage: 65, yardsPerAttempt: 7.9 } },
    { week: 3, stats: { passingYards: 320, passingTouchdowns: 3, interceptions: 0, completionPercentage: 67, yardsPerAttempt: 8.3 } },
  ],
  'qb-2': [
    { week: 1, stats: { passingYards: 325, passingTouchdowns: 3, interceptions: 0, completionPercentage: 70, yardsPerAttempt: 8.8 } },
    { week: 2, stats: { passingYards: 290, passingTouchdowns: 2, interceptions: 1, completionPercentage: 66, yardsPerAttempt: 7.5 } },
    { week: 3, stats: { passingYards: 305, passingTouchdowns: 3, interceptions: 0, completionPercentage: 68, yardsPerAttempt: 8.1 } },
  ],
  'wr-1': [
    { week: 1, stats: { receptions: 8, receivingYards: 125, receivingTouchdowns: 2, averagePerReception: 15.6, targetShare: 32 } },
    { week: 2, stats: { receptions: 7, receivingYards: 110, receivingTouchdowns: 1, averagePerReception: 15.7, targetShare: 29 } },
    { week: 3, stats: { receptions: 9, receivingYards: 135, receivingTouchdowns: 2, averagePerReception: 15.0, targetShare: 30 } },
  ],
};

export function getWeeklyTeamStats(teamId: string): WeeklyTeamStats[] {
  return weeklyTeamStats[teamId] || [];
}

export function getWeeklyPlayerStats(playerId: string): WeeklyPlayerStats[] {
  return weeklyPlayerStats[playerId] || [];
}

export function getAvailableWeeks(): number[] {
  const allWeeks = new Set<number>();
  Object.values(weeklyTeamStats).forEach((stats) => {
    stats.forEach((s) => allWeeks.add(s.week));
  });
  return Array.from(allWeeks).sort((a, b) => a - b);
}
