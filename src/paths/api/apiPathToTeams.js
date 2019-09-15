export const apiPathToTeamPlayerStats = ({ season, team }) => {
  return `https://api.mysportsfeeds.com/v1.2/pull/nfl/${season}/cumulative_player_stats.json?team=${team}`;
}
