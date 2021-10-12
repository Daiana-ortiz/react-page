import { Component } from 'react'
import styled from 'styled-components'
import IconI from './IconI'

export const IconStyle = styled.svg`
color: #fff;
font-size: 0.8125rem;
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
                    <MuiBotton>
                        <MuiIconBotton focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <IconI/>
                        </MuiIconBotton>
                    </MuiBotton>
            </IconStyle>
            
        )
    }
}

export default HelpIcon