import React, { Component } from "react";
import PlayerService from "../../service/PlayerService";

export class PlayerStatsBySeason extends Component {
    constructor(props) {
        super(props)
        this.player = new PlayerService();
    }

    componentDidMount() {
        this.getPlayerStat();
    }

    getPlayerStat = async () => {
        try {
            const playerStat = await this.player.getPlayerSeasonLogs({ season: "2019-regular", playerName: "George" });
            console.log(playerStat);
        } catch (error) {
            console.log(error);
        }
    }
 
    render() {
        return (
            <div>
                Player Stats - 2019
            </div>
        )
    }
}