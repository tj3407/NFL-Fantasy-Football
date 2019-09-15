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
}