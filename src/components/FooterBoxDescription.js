import { Component } from "react";
import styled from "styled-components";
import Button from './Button'


export const Box = styled.div`
padding: 2rem;
border: 1px solid #2e8ffa;
border-radius: 3px;
margin-bottom: 3rem!important;
display: flex;
color: #fff;
align-items: flex-start;
 $first-child{
    margin: 0;
}
`

export const P = styled.p`
    color: #fff;
    font-weight: 300;
    margin: 0 0 1rem;
}
`



class FooterBoxDescription extends Component{
    render(){
        return(
        <div style={{padding: '0 1rem'}}>
            <h2 style={{margin: '0'}}>Risiko?</h2>
            <P>Historisk afkast er ingen garanti for fremtidigt afkast. De penge som du udlåner til projekter kan derfor både øge og mindske sin værdi og der er ingen garanti for at du får hele det udlånte beløb retur.</P>
            <Button></Button>
        </div>

        )
    }
}

export default FooterBoxDescription