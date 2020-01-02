import React, { Component } from "react"
import "bulma/css/bulma.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/homeSection"

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <HomeSection/>
      </Layout>
    )
  }
}
