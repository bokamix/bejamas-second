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
div{
    width:15px;
    height:0px;
    border: solid 1px yellow;
    margin:0 auto;
    margin-top:4px;
}
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
      <SubtitleSection>Logistics Server<div/></SubtitleSection>
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
