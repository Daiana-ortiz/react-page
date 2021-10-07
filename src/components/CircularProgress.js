import { Component } from "react";
import styled from "styled-components";

export const CircProgressStyle = styled.div`
        position: relative;
        width: 100%;
        text-align: center!important;
        height: 120px;
`

class CircularProgress extends Component {
    render () {
        return (
            <CircularProgress>{this.props.children}</CircularProgress>
        )
    }
}



export default CircularProgress