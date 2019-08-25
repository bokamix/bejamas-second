import React from "react"
import styled from 'styled-components';
import Navigation from '../components/navigation'
import {  Link } from "gatsby"

const SectionWrapper = styled.div`  
background:black;
padding-bottom:30px;
  }
`;
const ContentWrapper = styled.div`  
width:940px;
margin:0 auto;
  }
`;
const PostWrapper = styled.div`  
 display:flex;
 flex-wrap: wrap;
 justify-content: center;
  }
`;
const SectionTitle = styled.h2`  
 color:green;
 
  }
`;
const PostBox = styled.div`  
background:gray;
width:300px;
margin:6px;
  }
`;
const BoxContent = styled.div`  
background:white;
padding:8px;
min-height:120px;
  }
`;
const BoxImg = styled.div`  
background:Gray;
height:100px;
position: relative; 
  }
`;
const SectionMainButton = styled.div`  
width:100px;
background:white;
margin:0 auto;
margin-bottom:30px;
text-align:center;
a{
  display:block;
  text-decoration: none;
}
  }
`;
const SectionButton = styled.div`  
width:100px;
position: absolute; 
bottom: 0;
right:0;
background:white;
text-align:center;
a{
  display:block;
  text-decoration: none;
}
span{
  background:yellow;
}

  }
`;

class SectionOne extends React.Component {
  render() {
  
    return (
      <SectionWrapper>
        <ContentWrapper>
      <Navigation />

      <SectionTitle>Section One Title</SectionTitle>
        <PostWrapper>
        
        {this.props.things.map(({ node }) => {
          let title = node.title 
          return (
            <PostBox key={node.title}>
                <BoxImg>
                <SectionButton><Link to="#">View Details<span> > </span></Link></SectionButton>
                </BoxImg>
                <BoxContent><h3>
                {title}
                </h3>    
                <p>{node.subtitle}</p>
                </BoxContent>
          </PostBox>
          )
        })}
       
      </PostWrapper>
      <SectionMainButton><Link to="#">View Details</Link></SectionMainButton>
      </ContentWrapper>
      </SectionWrapper>
    )
  }
}

export default SectionOne
