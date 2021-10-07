import { Component } from 'react'
import styled from 'styled-components'

export const DetailStyle = styled.div`
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
        color: #03448c;
`

class Detail extends Component {
    render(){
        return(
            <DetailStyle>{this.props.span}</DetailStyle>
        )
    }
}

export default Detail