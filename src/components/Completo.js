import { Component } from 'react'
import styled from 'styled-components'

export const GreenRectangule = styled.div`
        transform: rotate(-15deg) scale(1.25);
        display: inline-block;
        position: absolute;
        background-color: rgba(81,196,124,.85);
        color: #fff;
        font-weight: 700;
        font-size: 1.5em;
        text-transform: uppercase;
        text-tlign: center;
        padding: 8px;
        height: 42px;
        width: 300px;
        top: 50%;
        left: 40%;
        margin-top: -21px;
        margin-left: -150px;
        &:first-child {
            color: #fff;
            text-align: center;
        }
        `

class Completo extends Component {
    render() {
        return (
            <div>
                <GreenRectangule>
                    <span>Fuldtegnet</span>
                </GreenRectangule>
            </div>
        )
    }
}

export default Completo