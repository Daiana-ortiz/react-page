import { Component } from "react";
import styled from "styled-components";
import CheckCircle from "./CheckCircle";

export const CircProgressStyle = styled.div`
        position: relative;
        width: 100%;
        text-align: center;
        height: 120px;
`

class CircularProgress extends Component {
    render () {
        return (
            <CircProgressStyle>
                <CheckCircle/>
            </CircProgressStyle>
        )
    }
}



export default CircularProgress