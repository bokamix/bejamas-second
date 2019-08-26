import React from "react"
import {  graphql } from "gatsby"
import SectionOne from '../components/section-one'
import SectionSecond from '../components/section-second'
import styled from 'styled-components';
import Navigation from '../components/navigation'
import '../pages/index.css';


import SEO from "../components/seo"
const BackgroundColor = styled.div`  

background-color: #173044;
height: 820px;
padding-top:43px;
width:100%;

  }
`;

class Index extends React.Component {
  render() {
    const { data } = this.props   
    const posts = data.allContentfulPostItem.edges
    const offers = data.allContentfulOfferItem.edges
    return (
      <BackgroundColor>
         
        <SEO title="All posts" />
        <Navigation />
<SectionOne things={posts}/>
<SectionSecond things={offers}/>
               
      </BackgroundColor>
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
