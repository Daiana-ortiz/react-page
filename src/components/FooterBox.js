import { Component } from "react";
import styled from "styled-components";
import RiskIcon from "./RiskIcon";
import FooterBoxDescription from './FooterBoxDescription'
import { media } from '../MediaQueries.js'


export const Box = styled.div`
padding: 2rem;
border: 1px solid #2e8ffa;
border-radius: 3px;
margin-bottom: 3rem!important;
display: flex;
color: #fff;
align-items: flex-start;
${media.mobile2}{
    display: block;
}

`



class FooterBox extends Component{
    render(){
        return(
        <Box>
            <RiskIcon/>
            <FooterBoxDescription/>
        </Box>

        )
    }
}

export default FooterBox