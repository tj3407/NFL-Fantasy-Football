

export const apiPathToGetPlayerSeasonGamelogs = ({ season, format }) => {
    return `https://api.mysportsfeeds.com/v1.2/pull/nfl/${season}/cumulative_player_stats.json?${format}`
}