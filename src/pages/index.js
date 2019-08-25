import React from "react"
import {  graphql } from "gatsby"
import SectionOne from '../components/section-one'
import SectionSecond from '../components/section-second'
import Navigation from '../components/navigation'

import SEO from "../components/seo"


class Index extends React.Component {
  render() {
    const { data } = this.props   
    const posts = data.allContentfulPost.edges
    const offers = data.allContentfulOffer.edges
    return (
      <div>
        <SEO title="All posts" />
        <Navigation />
<SectionOne things={posts}/>
<SectionSecond things={offers}/>
               
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost{
      edges{
        node {
          title
          subtitle
          
        }
      }
    }
    allContentfulOffer{
      edges{
        node {
          title
          shorttext
          
        }
      }
    }
  }
`
