import { Component } from 'react'
import Icons from '../components/Icons.js'
import styled from 'styled-components'


export const Subtitle1 = styled.p`
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
        font-family: 'Roboto', sans-serif;
        `


class Subtitle extends Component {
  render() {
    return (
        <Subtitle1>
          <span>Byggefinansiering - Fundingmål nået</span>
            <Icons/>
        </Subtitle1>
    )
  }
}

export default Subtitle;