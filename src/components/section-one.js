import React from "react"
import styled from 'styled-components';
const Blackdiv = styled.div`
  
  background: #123123;
  
  }
`;

class SectionOne extends React.Component {
  render() {
  
    return (
      
        <Blackdiv>
        
        {this.props.things.map(({ node }) => {
          let title = node.title 
          return (
            <article  key={node.title}>
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
       
      </Blackdiv>
    )
  }
}

export default SectionOne
