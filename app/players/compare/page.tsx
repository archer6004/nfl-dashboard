'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getPlayers, getPlayerById } from '@/data/mock/players';
import { RadarChartCard } from '@/components/charts/RadarChartCard';

export default function PlayerComparePage() {
  const [selectedPlayer1, setSelectedPlayer1] = useState<string>('qb-1');
  const [selectedPlayer2, setSelectedPlayer2] = useState<string>('qb-3');

  const player1 = getPlayerById(selectedPlayer1);
  const player2 = getPlayerById(selectedPlayer2);

  if (!player1 || !player2) {
    return <div>Loading...</div>;
  }

  if (player1.position !== player2.position) {
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
          <p className="text-red-600 font-semibold">
            Please select players from the same position for comparison
          </p>
        </div>
      </div>
    );
  }

  const availablePlayers = getPlayers(player1.position);

  // Prepare radar chart data based on position
  const getRadarData = () => {
    const baseData = {
      name: 'Stats',
    };

    const position = player1.position;
    switch (position) {
      case 'QB':
        return [
          {
            name: 'Stats',
            [player1.name]: player1.stats.passingYards / 100,
            [player2.name]: player2.stats.passingYards / 100,
            'TD Ratio': player1.stats.passingTouchdowns * 10,
            'INT Ratio': player1.stats.interceptions * 10,
            'Comp %': player1.stats.completionPercentage / 10,
            'Y/A': player1.stats.yardsPerAttempt * 10,
          },
        ];
      case 'RB':
        return [
          {
            name: 'Stats',
            [player1.name]: player1.stats.rushingYards / 100,
            [player2.name]: player2.stats.rushingYards / 100,
            'Rush TDs': player1.stats.rushingTouchdowns * 10,
            'Rec Yards': player1.stats.receivingYards / 50,
            Receptions: player1.stats.receptions / 5,
          },
        ];
      default:
        return [
          {
            name: 'Stats',
            [player1.name]: player1.stats.receivingYards / 100,
            [player2.name]: player2.stats.receivingYards / 100,
            Receptions: player1.stats.receptions / 10,
            TDs: player1.stats.receivingTouchdowns * 10,
            'Target Share': player1.stats.targetShare,
          },
        ];
    }
  };

  const radarData = getRadarData();

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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Player Comparison</h1>

        {/* Player Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Player 1</h2>
            <select
              value={selectedPlayer1}
              onChange={(e) => {
                const newPlayer = getPlayerById(e.target.value);
                if (newPlayer && newPlayer.position === player2.position) {
                  setSelectedPlayer1(e.target.value);
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded font-medium"
            >
              {availablePlayers.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.team})
                </option>
              ))}
            </select>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Position:</strong> {player1.position}</p>
              <p><strong>Team:</strong> {player1.team}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Player 2</h2>
            <select
              value={selectedPlayer2}
              onChange={(e) => {
                const newPlayer = getPlayerById(e.target.value);
                if (newPlayer && newPlayer.position === player1.position) {
                  setSelectedPlayer2(e.target.value);
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded font-medium"
            >
              {availablePlayers.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.team})
                </option>
              ))}
            </select>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Position:</strong> {player2.position}</p>
              <p><strong>Team:</strong> {player2.team}</p>
            </div>
          </div>
        </div>

        {/* Comparison Chart */}
        <RadarChartCard
          title={`${player1.name} vs ${player2.name}`}
          data={radarData}
          dataKeys={[
            { key: player1.name, stroke: '#3b82f6' },
            { key: player2.name, stroke: '#ef4444' },
          ]}
          height={500}
        />

        {/* Stats Comparison Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mt-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Stat</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">{player1.name}</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">{player2.name}</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(player1.stats).map(([key, value], idx) => (
                  <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{value}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {(player2.stats[key] ?? 0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
