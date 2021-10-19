import { Component } from "react";
import styled from "styled-components";


export const Link = styled.a`
text-decoration: none;
color: #2e8ffa;
`

export const Boton = styled.button`
color: #2e8ffa;
border: 1px solid rgba(46, 143, 250, 0.5);
padding: 5px 15px;
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
background: transparent;
}
`

export const Span = styled.span`
width: 100%;
display: inherit;
align-items: inherit;
font-weight: 700;
justify-content: inherit;`



class Button extends Component{
    render(){
        return(
            <Link href="https://www.fundbricks.com/legal/risk" target="_blank" rel="noopener noreferrer">
                <Boton tabindex="0" type="button">
                    <Span>Læs mere om risiko</Span>
                </Boton>
            </Link>
        )
    }
}

export default Button