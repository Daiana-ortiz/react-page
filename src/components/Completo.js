import { Component } from 'react'
import styled from 'styled-components'

export const GreenRectangule = styled.div`
        background-color: rgba(81,196,124,.85);
        transform: rotate(-15deg) scale(1.25);
        display: inline-block;
        position: absolute;
        color: #fff;
        font-weight: 700;
        font-size: 1.5em;
        text-transform: uppercase;
        text-align: center;
        padding: 8px;
        height: 42px;
        width: 300px;
        top: 50%;
        left: 50%;
        margin-top: -21px;
        margin-left: -150px;
        &:first-child {
            color: #fff;
        }
        `

class Completo extends Component {
    render() {
        return (
                <GreenRectangule>
                    <span>{this.props.span}</span>
                </GreenRectangule>
        )
    }
}

export default Completo