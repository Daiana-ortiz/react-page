import { Component } from "react";
import styled from "styled-components";

export const ContentStyle = styled.div`
    
    
`

class Content extends Component {
    render () {
        return (
            <ContentStyle>{this.props.children}</ContentStyle>
        )
    }
}



export default Content 