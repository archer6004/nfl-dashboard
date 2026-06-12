# NFL Dashboard Project Guidelines

## Project Structure
- **Location:** `/Users/josh/Projects/nfl-dashboard`
- **Repository:** https://github.com/archer6004/nfl-dashboard
- **Tech Stack:** Next.js 16 + React 19 + TypeScript + Tailwind 4 + Recharts

## Development Workflow

### Branches
- `main` — production-ready code
- `test` — testing/development branch

### Git Workflow
1. Feature work on `test` branch
2. Test locally with `npm run dev`
3. Push to `test` when ready for review
4. Merge to `main` after verification
5. **Never commit environment variables** — use `.env.local` for local development only (already in .gitignore)

## Code Style
- Follow the same conventions as my-trading-dashboard
- Use TypeScript with strict mode
- Component names in PascalCase
- Utility functions in camelCase
- Data fetching functions should abstract the data source (allows mock → real data swap)

## Data Management
- Mock data lives in `data/mock/`
- Data types defined in `data/types.ts`
- All pages import data through `getTeams()`, `getPlayers()` functions
- Real data integration: only swap function internals, keep interface unchanged

## Progress Tracking
- Update `ROADMAP.md` after each work session
- Document completed items, in-progress work, and next steps
- Link to this CLAUDE.md from ROADMAP.md for reference

## Testing
Before marking work complete:
1. `npm run dev` — verify all 4 pages load without errors
2. `npm run build` — ensure TypeScript and build check pass
3. `npm run lint` — verify linting passes
4. Test each page in browser (home, teams, positions, player-compare)

@AGENTS.md
