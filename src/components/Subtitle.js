import { Component } from 'react'
import Icons from '../components/Icons.js'
import styled from 'styled-components'


export const Subtitle1 = styled.div`
        font-weight: 700;
        font-size: 16px;
        line-height: 170%;
        padding: 0;
        margin: 0;
        color: #304060;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        &:first-child {
          color: #fff;
         }

        `

export const Span = styled.span`
        text-align: left;
        display: flex;
        align-items: center;
        margin: 0 0 0 32px;
        border-left: 1px solid #ddd;
        padding-left: 32px;
        color: #666;
        font-weight: 300;
        `

export const LeftSpan = styled.span`
        font-family: 'Roboto', sans-serif;
        `

class Subtitle extends Component {
  render() {
    return (
        <Subtitle1>
          <LeftSpan>{this.props.span}</LeftSpan>
          <Span>Del via
            <Icons/>
          </Span>
        </Subtitle1>
    )
  }
}

export default Subtitle;