import React, { Component } from "react";
import {apiPathToGetPlayerSeasonGamelogs} from "../paths/api/apiPathToPlayers";

class PlayerService {
    constructor(props) {
        this.state = {
            stats: []
        }
    }

    getPlayerSeasonLogs({ playerName, season }) {
        const format = `player=${playerName}`;
        const url = `${apiPathToGetPlayerSeasonGamelogs({ season, format })}`;
        return fetch(url, {
            method: "GET",
            headers: new Headers({
                "Authorization": "Basic " + btoa("djxtremor:tjdev456") 
            }),
            dataType: "json"
        })
          .then(res => res.json())
        //   .then((result) => {
        //     console.log(result)
        //   },
        //   (error) => {
        //     console.log(error);
        //   })
    }
}

export default PlayerService
