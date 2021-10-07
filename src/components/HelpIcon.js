import { Component } from 'react'
import styled from 'styled-components'

export const IconStyle = styled.svg`
color: rgba(0, 0, 0, 0.87);
padding: 6px 16px;
font-size: 0.8125rem;
min-width: 64px;
box-sizing: border-box;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
font-family: Roboto,sans-serif;
font-weight: 500;
line-height: 1.75;
border-radius: 4px;
text-transform: uppercase;
border: 0;
cursor: pointer;
margin: 0;
display: inline-flex;
outline: 0;
position: relative;
align-items: center;
user-select: none;
vertical-align: middle;
-moz-appearance: none;
justify-content: center;
text-decoration: none;
background-color: transparent;
-webkit-appearance: none;
-webkit-tap-highlight-color: transparent;
vertical-align: text-top!important;
width: 16px!important;
height: 16px!important;
overflow: hidden!important;
cursor: help!important;
`

export const MuiBotton = styled.svg`
width: 100%;
display: inherit;
align-items: inherit;
font-weight: 700;
justify-content: inherit;
`

export const MuiIconBotton = styled.svg` 
fill: currentColor;
width: 1em;
height: 1em;
display: inline-block;
font-size: 1.3928571428571428rem;
transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
flex-shrink: 0;
user-select: none;
`



class HelpIcon extends Component {
    render(){
        return(
            <IconStyle tabIndex="0" role="button" aria-disabled="false" aria-label="overdækning indikerer hvor meget mere projektet er værd, når det er blevet realiseret. En høj overdækning er tegn på et solidt projekt og beregnes som det forventede provenu divideret med de samlede bygge- og salgssomkostninger.">
                    <MuiBotton >
                        <MuiIconBotton focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <g>
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                            </g>
                        </MuiIconBotton>
                    </MuiBotton>
            </IconStyle>
        )
    }
}

export default HelpIcon