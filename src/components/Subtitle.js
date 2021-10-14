import { Component } from 'react'
import Icons from '../components/Icons.js'
import styled from 'styled-components'
import SpanSubtitle from '../components/SpanSubtitle.js'
import { Colors } from './Colors.js'
import { media } from '../MediaQueries.js'


export const Subtitle1 = styled.p`
        font-weight: 700;
        font-size: 16px;
        line-height: 170%;
        padding: 0;
        margin: 0;
        color: ${Colors.primary};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;

        ${media.mobile} {
          flex-direction: column;
          padding: 8px 16px;
          text-align: center;
        }
        `



class Subtitle extends Component {
  render() {
    return (
        <Subtitle1>
          <SpanSubtitle/>
          <Icons/>
        </Subtitle1>
    )
  }
}

export default Subtitle;