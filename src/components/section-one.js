import React from "react"
import styled from 'styled-components';
import Navigation from '../components/navigation'
const Flexdiv = styled.div`  
 display:flex;
 flex-wrap: wrap;
 justify-content: space-around;
  }
`;
const SectionTitle = styled.h2`  
 color:green;
  }
`;

class SectionOne extends React.Component {
  render() {
  
    return (
      <>
      <Navigation />

      <SectionTitle>Section One Title</SectionTitle>
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
      <button>View Details</button>
      </>
    )
  }
}

export default SectionOne
