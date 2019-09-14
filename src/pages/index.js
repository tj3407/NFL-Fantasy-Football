import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { PlayerStatsBySeason } from "../workflow/players/PlayerStatsBySeason"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PlayerStatsBySeason />
  </Layout>
)

export default IndexPage
