import { Component } from 'react'
import Circles from '../components/Circles.js'
import Completo from '../components/Completo.js'
import Info from '../components/Info.js'
import styled from 'styled-components'

export const Wrapper = styled.div`
        width: 1200px;
        display: flex;
        margin: 0;
        `

export const Box = styled.div`
        height: 530px;
        width: 50%;
        fill: #fff;
        font-size: 16px;
        line-height: 170%;
        font-weight: 300;
        word-break: break-word;
        text-align: left;
        `

export const Img = styled.img`
        width: 100%;
        top: 0;
        left: 0;
        position: relative;
        height: 400px;
        margin-botton: 32px;
        border-radius: 5.33333px;
        box-shadow: 0 1px 16px 0 rgb(0 0 0 / 10%);
    `

export const ImgContainer = styled.div`
        position: relative; 
        height: 430px; 
        width: 100%;
`



class Project extends Component {
  render() {
    return (
            <Wrapper>
                
                    <ImgContainer>
                        <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/> 
                        <Circles/>
                        <Completo/>
                    </ImgContainer>
                
                <Box>
                    <Info/>
                </Box>

            </Wrapper>
    )
  }
}

export default Project;