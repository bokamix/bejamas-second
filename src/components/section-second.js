import React from "react"
import styled from 'styled-components';
const Reddiv = styled.div`
  
  background: #123123;
  
  }
`;

class SectionSecond extends React.Component {
  render() {
  
    return (
      
        <Reddiv>
        
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
                <p>{node.shorttext}</p>
              </section>
            </article>
          )
        })}
       
      </Reddiv>
    )
  }
}

export default SectionSecond
