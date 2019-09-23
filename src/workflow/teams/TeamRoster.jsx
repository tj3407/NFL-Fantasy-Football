import React, { Component } from "react";
import TeamService from "../../service/TeamService";

export default class TeamRoster extends Component {
    constructor(props) {
        super(props)
        this.team = new TeamService();
    }

    componentDidMount() {
        this.getTeamStats();
    }

    getTeamStats = async () => {
        try {
            const response = await this.team.getTeamRosterStats({ season: "2019-regular", team: "san"});
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                Team Stat - 2019
            </div>
        )
    }
}