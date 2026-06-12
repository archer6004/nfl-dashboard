'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTeams } from '@/data/mock/teams';
import { RadarChartCard } from '@/components/charts/RadarChartCard';
import { BarChartCard } from '@/components/charts/BarChartCard';

export default function TeamsPage() {
  const allTeams = getTeams();
  const [selectedTeams, setSelectedTeams] = useState<string[]>(['KC', 'SF']);

  const toggleTeam = (teamId: string) => {
    setSelectedTeams((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId]
    );
  };

  const selected = allTeams.filter((t) => selectedTeams.includes(t.id));

  // Radar chart data for offense/defense
  const radarData = selected.map((team) => ({
    name: team.name,
    'Pass Rate': team.offense.passRate,
    'Rush Rate': team.offense.rushRate,
    'Yards/Game': team.offense.yardsPerGame / 50,
    'Points/Game': team.offense.pointsPerGame * 2,
    'Turnovers': team.offense.turnovers,
  }));

  // Bar chart data for down tendencies
  const downData = selected.flatMap((team) =>
    team.downTendencies.map((down) => ({
      name: `${team.id} ${down.down}`,
      'Pass %': down.passPct,
      'Rush %': down.rushPct,
    }))
  );

  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Team Comparison</h1>

        {/* Team Selection */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Teams</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {allTeams.map((team) => (
              <button
                key={team.id}
                onClick={() => toggleTeam(team.id)}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  selectedTeams.includes(team.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {team.id}
              </button>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RadarChartCard
            title="Offensive Performance"
            data={radarData}
            dataKeys={selected.map((team, idx) => ({
              key: team.name,
              stroke: colors[idx % colors.length],
            }))}
            height={400}
          />

          <RadarChartCard
            title="Defensive Performance"
            data={selected.map((team) => ({
              name: team.name,
              'Yards Allowed': team.defense.yardsAllowed / 50,
              'Points Allowed': team.defense.pointsAllowed * 2,
              Sacks: team.defense.sacks,
            }))}
            dataKeys={selected.map((team, idx) => ({
              key: team.name,
              stroke: colors[idx % colors.length],
            }))}
            height={400}
          />

          <BarChartCard
            title="Down Tendencies (1st-3rd Down)"
            data={downData}
            dataKeys={[
              { key: 'Pass %', fill: '#3b82f6' },
              { key: 'Rush %', fill: '#ef4444' },
            ]}
            xAxisKey="name"
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
