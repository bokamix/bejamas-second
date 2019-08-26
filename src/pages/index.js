import React from "react"
import {  graphql } from "gatsby"
import SectionOne from '../components/section-one'
import SectionSecond from '../components/section-second'


import SEO from "../components/seo"


class Index extends React.Component {
  render() {
    const { data } = this.props   
    const posts = data.allContentfulPostItem.edges
    const offers = data.allContentfulOfferItem.edges
    return (
      <div>
        <SEO title="All posts" />
        
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
    allContentfulPostItem{
      edges{
        node {
          title
          subtitle
          
          
        }
      }
    }
    allContentfulOfferItem{
      edges{
        node {
          title
          shorttext
          icon {
            resolutions {
              src
            }
          }
          
        }
      }
    }
  }
`
