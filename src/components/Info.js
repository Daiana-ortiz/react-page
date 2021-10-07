import { Component } from 'react'
import '../index.css'
import styled from 'styled-components'
import ProjectTitle from './ProjectTitle'
import Content from './Content'
import Grid from './Grid'
import CircularProgress from './CircularProgress'
import ProjectDetails from './ProjectDetails'
import Detail from './Detail'
import HelpIcon from './HelpIcon'
import MuiGrid from './MuiGrid'

export const BoxContainer = styled.div`
    box-shadow: 0 0 16px rgb(0 0 0 / 50%);
    margin-top: -16px;
    margin-left: -8px;
    z-index: 1;
    height: calc(100 % -16px);
    background-color: #304060;
    color: # fff;
    padding: 16px;
    border-radius: 4px;
    position: relative;
    
`

class Info extends Component {
  render() {
    return (
        
<BoxContainer>
    <ProjectTitle title='En god forrentning'/>
        <Content>
            <div style={{ color: '#fff!important'}}>
                <Grid>
                    <CircularProgress/> 
                    <ProjectDetails>
                        <div style={{ fontWeight: '300', fontSize: '16px', lineHeight: '16px'}}>
                            <Detail span='1.660.000 DKK' />
                            <Detail span='Rejst beløb' />
                        </div>
                    </ProjectDetails>

                    <ProjectDetails>
                        <div style={{ fontWeight: '300', fontSize: '16px', lineHeight: '16px'}}>
                            <Detail span='1.600.000 DKK' />
                            <Detail span='Projektstørrelse' />
                        </div>
                    </ProjectDetails>

                    <ProjectDetails>
                        <div style={{ fontWeight: '300', fontSize: '16px', lineHeight: '16px'}}>
                            <Detail span='10.00%' />
                            <Detail span='Investorrente p.a.' />
                        </div>
                    </ProjectDetails>

                    <ProjectDetails>
                        <div style={{ fontWeight: '300', fontSize: '16px', lineHeight: '16px'}}>
                            <Detail span='10.000 DKK' />
                            <Detail span='Min.indskud' />
                        </div>
                    </ProjectDetails>
                    
                    <ProjectDetails>
                        <div style={{ fontWeight: '300', fontSize: '16px', lineHeight: '16px'}}>
                            <Detail span='10 - 12 mdr.' />
                            <Detail span='Projektperiode' />
                        </div>
                    </ProjectDetails>
                    
                    <ProjectDetails>
                        <div style={{ fontWeight: '300', fontSize: '16px', lineHeight: '16px'}}>
                            <Detail span='88.00%' />
                            <Detail span='Overdækning' />
                            <HelpIcon/>
                        </div>
                    </ProjectDetails>
                    
                    <MuiGrid></MuiGrid>
                        
                </Grid>
            </div>
        </Content>
</BoxContainer>
    )
  }
}

export default Info;