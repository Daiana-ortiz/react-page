import { Component } from 'react'
import ProjectTitles from './components/ProjectTitles.js'
import Text from './components/Text.js'
import './App.css';
import SliderProject from './components/SliderProject.js'
import Info from './components/Info.js'
import styled  from 'styled-components';
import { media } from './MediaQueries.js';

export const MainContainer= styled.div`
padding: 32px 0;  
}
`

export const ProjectTitleContainer = styled.div`
display: grid;
grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
      "top-title"
      "top-image"
      "teaser-text"
      "top-invest"
      "top-usp";
  margin-bottom: -32px;

${media.tablet} {

display: grid;
grid-template-rows: auto;
grid-template-columns: repeat(6,1fr);
    grid-template-areas:
        "top-title top-title top-title top-title top-title top-title"
        "teaser-text teaser-text teaser-text teaser-text teaser-text teaser-text"
        "top-image top-image top-image top-image top-invest top-invest"
        "top-usp top-usp top-usp top-usp top-usp top-usp";
    max-width: 1140px;
    margin: 0 auto -32px;
}
`


class App extends Component {
  render() {
    return (
      <MainContainer>
        <ProjectTitleContainer>
          
            <ProjectTitles title='1 liebhavervilla ved Odense'/>
            <SliderProject/>
            <Text/>
            <Info/>
              
        </ProjectTitleContainer>
      </MainContainer> 
        
    )
  }
}

export default App;
