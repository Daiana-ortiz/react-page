import { Component } from "react";
import styled from "styled-components";
import FooterBox from './FooterBox';
import { MuiGridStyle } from "./MuiGrid";
import { Link, IconStyle, } from "./Icons";
import Fb from "./Fb";
import Linkedin from "./Linkedin";
import Mail from "./Mail";
import { media } from '../MediaQueries.js';


export const Container = styled.div`
color: #fff;
flex-shrink: 0;
margin-bottom: -1px;
background-color: #002544;
background-image: url("https://app.fundbricks.com/static/media/teaser-splitter.afb3409a.svg");
background-size: 100%;
background-position: bottom;
background-repeat: no-repeat;
padding: 4rem 1rem 2.5rem;
align-items: center;
align-content: space-between;
`

export const BoxesContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
Max-width: 1140px;
margin: 0 auto;
   
`

export const Ul = styled.ul`
justify-content: center;
margin-top: 2rem;
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
align-items: center;
${media.mobile2} {
    flex-direction: column;
}

`

export const Li = styled.li`
color: #fff;
font-size: 12.8px;
padding-left: 16px;
width: auto;
margin: 0;
list-style: none;
display: inline-block;
padding: 16px;
font-family: "Roboto",sans-serif!important;
`

const brand = '©'
const year = '2021'
const web = 'Fundbricks.com'


class FooterContainer extends Component{
    render(){
        return(
        <Container>
            <BoxesContainer>
                <FooterBox></FooterBox>
            </BoxesContainer>
            <MuiGridStyle>
                <Ul>
                    <Li>{brand} {year} {web} </Li>
                    <Li>
                            <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Dfacebook%26utm_campaign%3Dd0be9e4d4247" target="_blank" rel="noopener noreferrer">
                                <IconStyle style={{color: 'white'}} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <Fb/>
                                </IconStyle>
                            </Link>

                            <Link href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Dlinkedin%26utm_campaign%3Dd0be9e4d4247&amp;title=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2&amp;summary=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2" target="_blank" rel="noopener noreferrer">
                                <IconStyle style={{color: 'white'}}focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <Linkedin/>
                                </IconStyle>
                            </Link>

                            <Link href="mailto:?subject=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2&amp;body=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Demail%26utm_campaign%3Dd0be9e4d4247" target="_blank" rel="noopener noreferrer">
                                <IconStyle style={{color: 'white'}}focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <Mail/>
                                </IconStyle>
                            </Link>
                    </Li>
                </Ul>
            </MuiGridStyle>
        </Container>

        )
    }
}

export default FooterContainer