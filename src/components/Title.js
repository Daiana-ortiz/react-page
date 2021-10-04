import { Component } from 'react'
import styled from 'styled-components'

export const H1 = styled.h1`
        padding: 8px 0 ;
        margin: 0 auto ;
        max-width: 768px;
        color: #304060;
        font-size: 43.2px;
        font-weight: 700;
        line-height: 125%;
        text-align: center;
        `

class Title extends Component {
  render() {
    return (
      <H1>1 liebhavervilla ved Odense</H1>
    )
  }
}

export default Title;
