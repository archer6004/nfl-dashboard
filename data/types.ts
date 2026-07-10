export type Stats = {
  passRate?: number;
  rushRate?: number;
  yardsPerGame?: number;
  pointsPerGame?: number;
  turnovers?: number;
  yardsAllowed?: number;
  pointsAllowed?: number;
  sacks?: number;
};

export type WeeklyTeamStats = {
  week: number;
  offense: {
    passRate: number;
    rushRate: number;
    yardsPerGame: number;
    pointsPerGame: number;
    turnovers: number;
  };
  defense: {
    yardsAllowed: number;
    pointsAllowed: number;
    sacks: number;
  };
};

export type Team = {
  id: string; // 'KC', 'SF' 등
  name: string;
  offense: {
    passRate: number;
    rushRate: number;
    yardsPerGame: number;
    pointsPerGame: number;
    turnovers: number;
  };
  defense: {
    yardsAllowed: number;
    pointsAllowed: number;
    sacks: number;
  };
  downTendencies: {
    down: '1st' | '2nd' | '3rd';
    passPct: number;
    rushPct: number;
  }[];
  weeklyStats?: WeeklyTeamStats[];
};

export type WeeklyPlayerStats = {
  week: number;
  stats: Record<string, number>;
};

export type Player = {
  id: string;
  name: string;
  team: string;
  position: 'QB' | 'RB' | 'WR' | 'TE';
  stats: Record<string, number>;
  weeklyStats?: WeeklyPlayerStats[];
};
