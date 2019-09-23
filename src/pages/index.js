import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PlayerStatsBySeason from "../workflow/players/PlayerStatsBySeason"
import TeamRoster from "../workflow/teams/TeamRoster"
import Teams from "../workflow/teams/Teams"
import { Switch } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        {/* <Router>
          <Switch>
            <Route exact path="/" component={Teams}/>
            <Route exact path="/teams/:team" component={TeamRoster} />
          </Switch>
        </Router> */}
        <Teams />
      </Layout>
    )
  }
}

export default IndexPage
