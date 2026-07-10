'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getPlayers } from '@/data';

type Position = 'QB' | 'RB' | 'WR' | 'TE';

export default function PositionsPage() {
  const [selectedPosition, setSelectedPosition] = useState<Position>('QB');
  const positions: Position[] = ['QB', 'RB', 'WR', 'TE'];

  const players = getPlayers(selectedPosition);

  const getColumnHeaders = (position: Position) => {
    switch (position) {
      case 'QB':
        return ['Name', 'Team', 'Pass Yards', 'TDs', 'INTs', 'Comp %', 'Y/A'];
      case 'RB':
        return ['Name', 'Team', 'Rush Yards', 'Rush TDs', 'Receptions', 'Rec Yards', 'Rec TDs'];
      case 'WR':
        return ['Name', 'Team', 'Receptions', 'Rec Yards', 'TDs', 'Avg/Rec', 'Target Share'];
      case 'TE':
        return ['Name', 'Team', 'Receptions', 'Rec Yards', 'TDs', 'Avg/Rec', 'Target Share'];
    }
  };

  const getStatValues = (player: any, position: Position) => {
    switch (position) {
      case 'QB':
        return [
          player.name,
          player.team,
          player.stats.passingYards,
          player.stats.passingTouchdowns,
          player.stats.interceptions,
          player.stats.completionPercentage.toFixed(1),
          player.stats.yardsPerAttempt.toFixed(1),
        ];
      case 'RB':
        return [
          player.name,
          player.team,
          player.stats.rushingYards,
          player.stats.rushingTouchdowns,
          player.stats.receptions,
          player.stats.receivingYards,
          player.stats.receivingTouchdowns,
        ];
      case 'WR':
        return [
          player.name,
          player.team,
          player.stats.receptions,
          player.stats.receivingYards,
          player.stats.receivingTouchdowns,
          player.stats.averagePerReception.toFixed(1),
          player.stats.targetShare.toFixed(1),
        ];
      case 'TE':
        return [
          player.name,
          player.team,
          player.stats.receptions,
          player.stats.receivingYards,
          player.stats.receivingTouchdowns,
          player.stats.averagePerReception.toFixed(1),
          player.stats.targetShare.toFixed(1),
        ];
    }
  };

  const headers = getColumnHeaders(selectedPosition);
  const sortedPlayers = [...players].sort((a, b) => {
    const aStats = a.stats as Record<string, number>;
    const bStats = b.stats as Record<string, number>;

    let keyA = '';
    switch (selectedPosition) {
      case 'QB':
        keyA = 'passingYards';
        break;
      case 'RB':
        keyA = 'rushingYards';
        break;
      default:
        keyA = 'receivingYards';
    }

    return bStats[keyA] - aStats[keyA];
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Position Statistics</h1>

        {/* Position Tabs */}
        <div className="flex gap-2 mb-6 md:mb-8 flex-wrap">
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setSelectedPosition(pos)}
              className={`px-6 py-3 font-semibold rounded transition-colors ${
                selectedPosition === pos
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Stats Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedPlayers.map((player, idx) => {
                  const stats = getStatValues(player, selectedPosition);
                  return (
                    <tr
                      key={player.id}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      {stats.map((stat, i) => (
                        <td key={i} className="px-6 py-4 text-sm text-gray-900">
                          {stat}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
