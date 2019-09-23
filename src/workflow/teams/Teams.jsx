import React, { useState, useEffect } from "react"
import TeamService from "../../service/TeamService"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Skeleton from '@material-ui/lab/Skeleton';

const Teams = props => {
  const [teams, setTeams] = useState({ teamStats: [], division: [] })
  const [loading, setLoading] = useState(true)
  const team = new TeamService()

  useEffect(() => {
    // getTeamStats()
    getTeamStatsByDivision()
  }, [])

  const getTeamStats = async () => {
    try {
      const response = await team.getTeams({ season: "2019-regular" })

      if (response) {
        setTeams({
          ...teams,
          teamStats: response.overallteamstandings.teamstandingsentry,
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getTeamStatsByDivision = async () => {
    try {
      const response = await team.getTeamsByDivision({ season: "2019-regular" })
      if (response) {
        setTeams({
          ...teams,
          division: response.divisionteamstandings.division,
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {teams.division.map(team => {
          const division = team["@name"]
          const { teamentry } = team

          return (
            <Grid item xs={3}>
              <Paper>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>{division.split("/")[1]}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {teamentry.map(team => {
                      const { Name, City } = team.team
                      return (
                        <TableRow hover>
                          <TableCell>
                            {City} {Name}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default Teams
