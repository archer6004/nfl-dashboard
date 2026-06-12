import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
            NFL Fantasy Dashboard
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Analyze NFL teams and player statistics for smarter fantasy football decisions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/teams">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Team Comparison
                </h2>
                <p className="text-gray-600">
                  Compare offensive and defensive strategies across teams with radar and bar charts.
                </p>
              </div>
            </Link>

            <Link href="/positions">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Position Stats
                </h2>
                <p className="text-gray-600">
                  View and compare player statistics by position (QB, RB, WR, TE).
                </p>
              </div>
            </Link>

            <Link href="/players/compare">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Player Comparison
                </h2>
                <p className="text-gray-600">
                  Compare two players side-by-side with detailed performance metrics.
                </p>
              </div>
            </Link>

            <div className="bg-white rounded-lg shadow-lg p-8 opacity-50 cursor-not-allowed">
              <h2 className="text-2xl font-semibold text-gray-400 mb-3">
                More Coming Soon
              </h2>
              <p className="text-gray-400">
                Additional analysis tools and features in development.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              Using mock data for prototype • Real data integration coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
