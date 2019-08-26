import React from "react"
import styled from 'styled-components';

const SectionWrapper = styled.div`  
background:white;

  }
`;
const MainSectionWrapper = styled.div`  
display:flex;
flex-wrap: wrap;
justify-content: flex-start;
margin: 0 auto;
margin-left:390px;
  }
`;
const TitleSection = styled.h2`  
text-align:center;
  color: #333333;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 700;
  padding-top: 69px;
  line-height: 20px;

  }
`;
const SubtitleSection = styled.h3`  
color: #888888;
font-family: 'Raleway', sans-serif;
font-size: 13px;
font-weight: 600;
line-height: 20px;
text-transform: uppercase;
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
width:555px;
height:182px;
margin-left:30px;
align-items: center;
  }
`;
const Icon = styled.img`  
margin:40px;
  }
`;
const ShortText = styled.p`  

color: #777777;
font-family: 'Open Sans', sans-serif;
font-size: 13px;
font-weight: 400;
line-height: 20px;
height: 73px;
width:354px;
  }
`;
const OfferTitle = styled.h3`  

color: #333333;
font-family: Raleway;
font-size: 18px;
font-weight: 700;
line-height: 60px;
  }
`;



class SectionSecond extends React.Component {
  render() {
  
    return (
      <SectionWrapper>
      <TitleSection>What we offer</TitleSection>
      <SubtitleSection>Logistics Server<div/></SubtitleSection>
        <MainSectionWrapper>        
        {this.props.things.map(({ node }) => {
          let title = node.title 
          return (
            <OfferElement key={node.title}>
              <Icon  src={node.icon.resolutions.src} alt="icon"/>
                <div><OfferTitle>{title}</OfferTitle>
                <ShortText>{node.shorttext}</ShortText>
                </div>
            </OfferElement>
          )
        })}
       
      </MainSectionWrapper>
      </SectionWrapper>
    )
  }
}

export default SectionSecond
