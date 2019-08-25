import React from "react"
import {  graphql } from "gatsby"



import SEO from "../components/seo"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props   
    const posts = data.allContentfulPost.edges
    const offers = data.allContentfulOffer.edges
    return (
      <div>
        <SEO title="All posts" />
        
        {posts.map(({ node }) => {
          let title = node.title 
          return (
            <article key={node.title}>
              <header>
                <h3
                 
                >
                  
                    {title}
                  
                </h3>
               
              </header>
              <section>
                <p>{node.subtitle}</p>
              </section>
            </article>
          )
        })}
        {offers.map(({ node }) => {
          let title = node.title 
          return (
            <article key={node.title}>
              <header>
                <h3>
                  {title}
                </h3>
               
              </header>
              <section>
                <p>{node.shorttext}</p>
              </section>
            </article>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

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
