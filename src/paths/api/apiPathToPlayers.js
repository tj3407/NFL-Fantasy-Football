

export const apiPathToGetPlayerSeasonGamelogs = ({ season, format }) => {
    return `https://api.mysportsfeeds.com/v2.1/pull/nfl/${season}/player_gamelogs.json?team=san`
}