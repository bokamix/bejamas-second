import React from "react"
import styled from 'styled-components';
const MainSectionWrapper = styled.div`  
display:flex;
flex-wrap: wrap;
justify-content: space-around;
width: 700px;
margin: 0 auto;
  }
`;
const TitleSection = styled.h2`  
color:red;
text-align:center;

  }
`;
const SubtitleSection = styled.h3`  
color:yellow;
text-align:center;
  }
`;
const OfferElement = styled.div`  
display:flex;
width:300px;
align-items: center;
  }
`;
const Icon = styled.img`  
margin-right:10px;
  }
`;

class SectionSecond extends React.Component {
  render() {
  
    return (
      <>
      <TitleSection>What we offer</TitleSection>
      <SubtitleSection>Logistics Server</SubtitleSection>
        <MainSectionWrapper>        
        {this.props.things.map(({ node }) => {
          let title = node.title 
          return (
            <OfferElement key={node.title}>
              <Icon width="50" height="50" src={node.icon.resolutions.src} alt="icon"/>
                <div><h3>{title}</h3>
                <p>{node.shorttext}</p>
                </div>
            </OfferElement>
          )
        })}
       
      </MainSectionWrapper>
      </>
    )
  }
}

export default SectionSecond
