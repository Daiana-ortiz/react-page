import { Component } from "react";
import styled from "styled-components";
import CheckCircle from './CheckCircle'

export const CircCompleteStyle = styled.div`
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
            border-radius: 50%;
            padding: 0;
            top: 50%;
            left: 50%;
            `

class CircleComplete extends Component {
    render () {
        return (
            <CircleComplete>
                    <CheckCircle/>
            </CircleComplete>
        )
    }
}



export default CircleComplete