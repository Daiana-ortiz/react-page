import { Component } from "react";
import styled from "styled-components";
import FooterPoligon from './FooterPoligon.js'
import FooterContainer from './FooterContainer.js'

export const FooterWrapper = styled.div`
flex-grow: 0;
max-width: 100%;
flex-basis: 100%;
margin: 0;
box-sizing: border-box;
`

export const GeneralSpace = styled.div`
height: 4rem;
width: 100%;
`



class Footer extends Component{
    render(){
        return(
        <FooterWrapper>
            <GeneralSpace></GeneralSpace>
            <FooterPoligon/>
            <FooterContainer/>
        </FooterWrapper>

        )
    }
}

export default Footer
