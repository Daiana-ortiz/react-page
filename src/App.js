import { Component } from 'react'
import ProjectTitles from './components/ProjectTitles.js'
import Layout from './components/Layout.js'
import Text from './components/Text.js'
import './App.css';
import SliderProject from './components/SliderProject.js'
import Info from './components/Info.js'
import styled  from 'styled-components';
import { media } from './MediaQueries.js';



export const Wrapper = styled.div`
display: flex;

  ${media.mobile} {
    display: block;
  }
`

class App extends Component {
  render() {
    return (
      
        <Layout>
          <ProjectTitles title='1 liebhavervilla ved Odense'/>
          
          <Text/> 

          <Wrapper> 
            <SliderProject/>
            <Info/>
          </Wrapper>
   
        </Layout>
        
        
    )
  }
}

export default App;
