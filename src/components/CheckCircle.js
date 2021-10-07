import { Component } from "react";
import styled from "styled-components";

export const SVG = styled.svg`
fill: #2e8ffa;
font-family: "Source Sans Pro",sans-serif;
font-weight: 700;
font-size: 60%;
text-anchor: middle;
fill: currentColor;
width: 1em;
height: 1em;
display: inline-block;
font-size: 1.3928571428571428rem;
transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
flex-shrink: 0;
user-select: none;
        
`



class CheckCircle extends Component {
    render () {
        return (
                    <svg viewBox="0 0 36 36">
                        <path style={{ fill: 'none', stroke: 'rgba(46,143,250,.15)', strokeWidth: '2.8' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                            <path style={{ stroke: '#51c47c!important'}} strokeDasharray="103, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                <SVG focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                                    </g>
                                </SVG>
                    </svg>

        )
    }
}



export default CheckCircle