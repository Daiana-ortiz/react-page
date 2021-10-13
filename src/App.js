import { Component } from 'react'
import ProjectTitles from './components/ProjectTitles.js'
import Layout from './components/Layout.js'
import Text from './components/Text.js'
import './App.css';
import SliderProject from './components/SliderProject.js'
import Info from './components/Info.js'

class App extends Component {
  render() {
    return (
      
        <Layout>
          <ProjectTitles title='1 liebhavervilla ved Odense'/>
          
          <Text/> 

          <div style={{ display: 'flex'}}> 
            <SliderProject/>
            <Info/>
          </div>
   
        </Layout>
        
        
    )
  }
}

export default App;
