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

class Subtitle extends Component {
  render() {
    return (
        <Subtitle1>
        <span>Byggefinansiering - Fundingmål nået</span>
        <Span>Del via
        <Icons/>
        </Span>
        </Subtitle1>
    )
  }
}

export default Subtitle;