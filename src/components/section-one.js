import React from "react"
import styled from 'styled-components';
const Flexdiv = styled.div`
  
 display:flex;
 flex-wrap: wrap;
  
  }
`;

class SectionOne extends React.Component {
  render() {
  
    return (
      
        <Flexdiv>
        
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
       
      </Flexdiv>
    )
  }
}

export default SectionOne
