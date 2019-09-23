import { apiPathToTeamPlayerStats } from "../paths/api/apiPathToTeams";

class TeamService {
    constructor() {

    }

    getTeamRosterStats({ season, team }) {
        const url = `${apiPathToTeamPlayerStats({ season, team })}`;

        return fetch(url, {
            method: "GET",
            headers: new Headers({
                "Authorization": "Basic " + btoa("djxtremor:tjdev456") 
            }),
            dataType: "json"
        })
          .then(res => res.json())
    }

    getTeams({ season }) {
        const url = `https://api.mysportsfeeds.com/v1.2/pull/nfl/${season}/overall_team_standings.json`;

        return fetch(url, {
            method: "GET",
            headers: new Headers({
                "Authorization": "Basic " + btoa("djxtremor:tjdev456") 
            }),
            dataType: "json"
        })
          .then(res => res.json())
    }

    getTeamsByDivision({ season }) {
        const url = `https://api.mysportsfeeds.com/v1.2/pull/nfl/${season}/division_team_standings.json`;

        return fetch(url, {
            method: "GET",
            headers: new Headers({
                "Authorization": "Basic " + btoa("djxtremor:tjdev456") 
            }),
            dataType: "json"
        })
          .then(res => res.json())
    }
}

export default TeamService