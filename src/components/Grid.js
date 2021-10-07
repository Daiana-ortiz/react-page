import { Component } from "react";
import styled from "styled-components";

export const ContentStyle = styled.div`
        align-items: center;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    
`

class Grid extends Component {
    render () {
        return (
            <Grid>{this.props.children}</Grid>
        )
    }
}



export default Grid