import { Component } from 'react'
import styled from 'styled-components'
import Subtitle from './Subtitle'
import { Colors } from './Colors'
import { media } from '../MediaQueries'


export const CenteredContainer = styled.div`
        text-align: center;
        margin-bottom: 32px;

        ${media.mobile} {
          text-align: center;
          padding: 8px 16px;
          font-size: '36px'
          margin-bottom: 16px;
        }
`
export const H1 = styled.h1`
        padding: 8px 0 ;
        margin: 0 auto ;
        max-width: 768px;
        color: ${Colors.primary};
        font-size: 43.2px;
        font-weight: 700;
        line-height: 125%;
        text-align: center;
        
        ${media.mobile} {
          font-size: 36px;
        }
        `

class ProjectTitles extends Component {
  render() {
    return (
      <CenteredContainer>
        <H1>{this.props.title}</H1>
        <Subtitle/>
      </CenteredContainer>
    )
  }
}

export default ProjectTitles;
