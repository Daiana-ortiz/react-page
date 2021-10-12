import { Component } from 'react'
import Title from './components/Title.js'
import Subtitle from './components/Subtitle.js'
import Layout from './components/Layout.js'
import Text from './components/Text.js'
import Project from './components/Project.js'
import './App.css';

class App extends Component {
  render() {
    return (
      
        <Layout>
          <Title title='1 liebhavervilla ved Odense'/>
          <Subtitle/>
          <Text/> 
          <Project/>
        </Layout>
        
        
    )
  }
}

export default App;
