'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTeams, getWeeklyTeamStats, getAvailableWeeks } from '@/data';
import { RadarChartCard } from '@/components/charts/RadarChartCard';
import { BarChartCard } from '@/components/charts/BarChartCard';

export default function TeamsPage() {
  const allTeams = getTeams();
  const [selectedTeams, setSelectedTeams] = useState<string[]>(['KC', 'SF']);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const availableWeeks = getAvailableWeeks();

  const toggleTeam = (teamId: string) => {
    setSelectedTeams((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId]
    );
  };

  const selected = allTeams.filter((t) => selectedTeams.includes(t.id));

  // Get team stats (weekly if available and selected, else season stats)
  const getTeamStats = (team: typeof selected[0]) => {
    if (selectedWeek !== null) {
      const weeklyStats = getWeeklyTeamStats(team.id);
      const weekData = weeklyStats.find((w) => w.week === selectedWeek);
      if (weekData) {
        return {
          offense: weekData.offense,
          defense: weekData.defense,
        };
      }
    }
    return {
      offense: team.offense,
      defense: team.defense,
    };
  };

  // Radar chart data for offense/defense
  const radarData = selected.map((team) => {
    const stats = getTeamStats(team);
    return {
      name: team.name,
      'Pass Rate': stats.offense.passRate,
      'Rush Rate': stats.offense.rushRate,
      'Yards/Game': stats.offense.yardsPerGame / 50,
      'Points/Game': stats.offense.pointsPerGame * 2,
      'Turnovers': stats.offense.turnovers,
    };
  });

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

        {/* Week Selection */}
        {availableWeeks.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Week (Optional)</h2>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedWeek(null)}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  selectedWeek === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Season
              </button>
              {availableWeeks.map((week) => (
                <button
                  key={week}
                  onClick={() => setSelectedWeek(week)}
                  className={`px-4 py-2 rounded font-semibold transition-colors ${
                    selectedWeek === week
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Week {week}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-3">Weekly data available for KC, SF, DAL</p>
          </div>
        )}

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
