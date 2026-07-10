// Data source selection - uses real data by default
// Set NEXT_PUBLIC_USE_MOCK_DATA=true to use mock data instead

import type { Team, Player } from './types';

const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

// Import both data sources
import * as mockTeamsModule from './mock/teams';
import * as mockPlayersModule from './mock/players';
import * as realTeamsModule from './real/teams';
import * as realPlayersModule from './real/players';
import * as realWeeklyModule from './real/weeklyStats';

const teamsModule = USE_MOCK_DATA ? mockTeamsModule : realTeamsModule;
const playersModule = USE_MOCK_DATA ? mockPlayersModule : realPlayersModule;

export const getTeams = teamsModule.getTeams;
export const getTeamById = teamsModule.getTeamById;
export const getPlayers = playersModule.getPlayers;
export const getPlayerById = playersModule.getPlayerById;

// Weekly stats (real data only)
export const getWeeklyTeamStats = realWeeklyModule.getWeeklyTeamStats;
export const getWeeklyPlayerStats = realWeeklyModule.getWeeklyPlayerStats;
export const getAvailableWeeks = realWeeklyModule.getAvailableWeeks;

export type { Team, Player, WeeklyTeamStats, WeeklyPlayerStats } from './types';
