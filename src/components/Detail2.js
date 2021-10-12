import { Component } from 'react'
import styled from 'styled-components'

export const DetailStyle2 = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 11.2px;
    line-height: 100%;
    color: #fff;
`

class Detail2 extends Component {
    render(){
        return(
            <DetailStyle2>{this.props.span}</DetailStyle2>
        )
    }
}

export default Detail2