import { Component } from 'react'
import styled from 'styled-components'
import Subtitle from './Subtitle'


export const CenteredContainer = styled.div`
        text-align: center;
        margin-bottom: 32px;
`
export const H1 = styled.h1`
        padding: 8px 0 ;
        margin: 0 auto ;
        max-width: 768px;
        color: ${props => props.color};
        font-size: 43.2px;
        font-weight: 700;
        line-height: 125%;
        text-align: center;
        `

class Title extends Component {
  render() {
    return (
      <CenteredContainer>
        <H1 color='#304060'>{this.props.title}</H1>
        <Subtitle/>
      </CenteredContainer>
    )
  }
}

export default Title;
