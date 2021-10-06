import { Component } from 'react'
import styled from 'styled-components'

export const MainContainer = styled.div` = 
        padding: 8px 0 ;
        margin: 0 auto;
        width: 1200px;
        `

export const Container = styled.div` = 
        padding-top: 20px;
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