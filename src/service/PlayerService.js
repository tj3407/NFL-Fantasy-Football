import React, { Component } from "react";
import {apiPathToGetPlayerSeasonGamelogs} from "../paths/api/apiPathToPlayers";

class PlayerService extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats: []
        }
    }

    getPlayerSeasonLogs({ playerName, season }) {
        const format = `player=${playerName}`;
        const url = `${apiPathToGetPlayerSeasonGamelogs({ season, format })}`;
        fetch(url, {
            method: "GET",
            headers: new Headers({
                "Authorization": "Basic " + btoa("djxtremor" + ":" + "MYSPORTSFEEDS") 
            })
        })
          .then(res => res.json())
          .then((result) => {
            //   this.setState({ stats: result.gamelogs});
              return result;
          },
          (error) => {
            console.log(error);
          })
    }
}

export default PlayerService
