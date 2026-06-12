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
};

export type Player = {
  id: string;
  name: string;
  team: string;
  position: 'QB' | 'RB' | 'WR' | 'TE';
  stats: Record<string, number>;
};
