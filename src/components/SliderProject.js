import { Component } from 'react'
import styled from 'styled-components'
import Circles from '../components/Circles.js'
import Completo from '../components/Completo.js'

export const BlockSlider = styled.div`
background: transparent;
width: 100%;
position: relative;
margin-bottom: 32px;
        `
    
export const ViewContainer = styled.div`
flex-direction: row;
transition: all 0s ease 0s;
direction: ltr;
display: flex;
will-change: transform;
transform: translate(0%, 0px);

`
export const Img = styled.img`
width: 100%;
height: auto;
position: relative;
top: 0;
left: 0;
overflow: hidden;
border-radius: 5.33333px;
box-shadow: 0 1px 16px 0 rgb(0 0 0 / 10%);

`



class SliderProject extends Component {
  render() {
    return (
            <BlockSlider>
                <div style={{overflowX: 'hidden'}}>
                    <ViewContainer>
                        <div style={{ width: '100%', flexShrink: '0', overflow: 'auto'}}>
                            
                                <div>
                                    <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/>
                                </div>
                            
                        </div>
                        <div style={{ width: '100%', flexShrink: '0', overflow: 'auto'}}>
                            
                                <div>
                                    <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/>
                                </div>
                          
                        </div>
                        <div style={{ width: '100%', flexShrink: '0', overflow: 'auto'}}>
                            
                                <div>
                                    <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/>
                                </div>
                          
                        </div>
                        <div style={{ width: '100%', flexShrink: '0', overflow: 'auto'}}>
                           
                                <div>
                                    <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/>
                                </div>
                           
                        </div>
                        <div style={{ width: '100%', flexShrink: '0', overflow: 'auto'}}>
                           
                                <div>
                                    <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/>
                                </div>
                          
                        </div>
                        <div style={{ width: '100%', flexShrink: '0', overflow: 'auto'}}>
                           
                                <div>
                                    <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/>
                                </div>
                           
                        </div>
                        <div style={{ width: '100%', flexShrink: '0', overflow: 'auto'}}>
                          
                                <div>
                                    <Img alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/>
                                </div>
                         
                        </div>
                        
                    </ViewContainer>
                </div>
                <Circles/>
                <Completo span='Fuldtegnet'/>
            </BlockSlider>
    )
  }
}

export default SliderProject;