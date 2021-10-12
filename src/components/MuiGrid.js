import { Component } from 'react'
import styled from 'styled-components'

export const MuiGridStyle = styled.div`
flex-grow: 0;
max-width: 100%;
flex-basis: 100%;
margin: 0;
box-sizing: border-box;
text-align: center!important;
height: 40px;

`

class MuiGrid extends Component {
    render(){
        return(
           <MuiGridStyle></MuiGridStyle>
        )
    }
}

export default MuiGrid