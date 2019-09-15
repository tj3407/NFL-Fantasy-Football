import React, { Component } from "react"
import PlayerService from "../../service/PlayerService"

export class PlayerStatsBySeason extends Component {
  constructor(props) {
    super(props)
    this.player = new PlayerService()
    this.state = {
      playerStat: {
        player: {},
        stats: {},
        team: {},
      },
    }
  }

  componentDidMount() {
    this.getPlayerStat()
  }

  getPlayerStat = async () => {
    try {
      const response = await this.player.getPlayerSeasonLogs({
        season: "2019-regular",
        playerName: "george-kittle",
      })
      this.setState({
        playerStat: response.cumulativeplayerstats.playerstatsentry[0],
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { player, stats, team } = this.state.playerStat

    return (
      <div>
        Player Stats - 2019
        <div>
          {Object.keys(player).map((item, index) => {
            if (item !== "ID") {
              return (
                <div key={index}>
                  {item} : {player[item]}
                </div>
              )
            }
          })}
        </div>
        {/* <div>
                    {Object.keys(stats).map((item, index) => {
                        return (<div key={index}>{item} : {stats[item]}</div>)
                    })}
                </div> */}
        <div>
          {Object.keys(team).map((item, index) => {
            if (item !== "ID") {
              return (
                <div key={index}>
                  {item} : {team[item]}
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}
