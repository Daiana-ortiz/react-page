import { Component } from "react";
import styled from "styled-components";

export const ContentStyle = styled.div`
color: #333;
font-size: 16px;
line-height: 170%;
font-weight: 300;
word-break: break-word;
text-align: left;
    
`

class Content extends Component {
    render () {
        return (
            <ContentStyle>{this.props.children}</ContentStyle>
        )
    }
}



export default Content 