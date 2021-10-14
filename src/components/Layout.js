import { Component } from 'react'
import styled from 'styled-components'
import { media } from '../MediaQueries'

export const MainContainer = styled.div`  
        padding: 32px 0 ;
        margin: 0 auto;
        width: 1200px;
         
        ${media.mobile} {
            margin: 0;
            width: 100%;
        }
        `

export const Container = styled.div` 
        margin: 0 auto;
    
       
    `

class Layout extends Component {
    render() {
        return (
            <MainContainer>
                <Container>
                    {this.props.children}
                </Container>
            </MainContainer>
        )
    }
}

export default Layout