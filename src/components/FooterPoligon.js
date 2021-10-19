import { Component } from "react";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 64px;
z-index: 4;
position: relative;
margin-top: -63px;
margin-bottom: 0px;
`

export const Poligon = styled.svg`
width: 100%;
height: 100%;
`



class Footer extends Component{
    render(){
        return(
        <Container>
            <Poligon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 447.5" preserveAspectRatio="none">
                <polygon fill="#002544" points="0,447.5 600,447.5 600,115.5 0,445.5 "></polygon>
            </Poligon>
        </Container>
        )
    }
}

export default Footer

