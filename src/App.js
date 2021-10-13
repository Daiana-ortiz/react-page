import { Component } from 'react'
import ProjectTitles from './components/ProjectTitles.js'
import Layout from './components/Layout.js'
import Text from './components/Text.js'
import Project from './components/Project.js'
import './App.css';

class App extends Component {
  render() {
    return (
      
        <Layout>
          <ProjectTitles title='1 liebhavervilla ved Odense'/>
          <Text/> 
          <Project/>
        </Layout>
        
        
    )
  }
}

export default App;
