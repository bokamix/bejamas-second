import React from "react"
import styled from 'styled-components';
const Flexdiv = styled.div`  
display:flex;
flex-wrap: wrap;
justify-content: space-around;
  }
`;
const TitleSection = styled.h2`  
color:red;
  }
`;
const SubtitleSection = styled.h3`  
color:yellow;
  }
`;

class SectionSecond extends React.Component {
  render() {
  
    return (
      <>
      <TitleSection>What we offer</TitleSection>
      <SubtitleSection>Logistics Server</SubtitleSection>
        <Flexdiv>        
        {this.props.things.map(({ node }) => {
          let title = node.title 
          return (
            <article  key={node.title}>
              <img width="50" src={node.icon.resolutions.src} alt="icon"/>
              <header>
                <h3>{title}</h3>
               </header>
              <section>
                <p>{node.shorttext}</p>
              </section>
            </article>
          )
        })}
       
      </Flexdiv>
      </>
    )
  }
}

export default SectionSecond
