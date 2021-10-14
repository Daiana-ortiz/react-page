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
import Detail2 from './Detail2'
import { media } from '../MediaQueries'


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
    ${media.mobile} {
        margin: 0 16px 28px;
    }
    
`

class Info extends Component {
  render() {
    return (
        
<BoxContainer>
    <ProjectTitle title='En god forrentning'/>
        <Content>
                <Grid>
                    <CircularProgress/> 
                    <ProjectDetails>
                            <Detail span='1.660.000 DKK' />
                            <Detail2 span='Rejst beløb'/> 
                    </ProjectDetails>

                    <ProjectDetails>
                            <Detail span='1.600.000 DKK' />
                            <Detail2 span='Projektstørrelse' />
                    </ProjectDetails>

                    <ProjectDetails>                     
                            <Detail span='10.00%' />
                            <Detail2 span='Investorrente p.a.' />                    
                    </ProjectDetails>

                    <ProjectDetails>                      
                            <Detail span='10.000 DKK' />
                            <Detail2 span='Min.indskud' />                       
                    </ProjectDetails>
                    
                    <ProjectDetails>                      
                            <Detail span='10 - 12 mdr.' />
                            <Detail2 span='Projektperiode' />                     
                    </ProjectDetails>
                    
                    <ProjectDetails>
                            <Detail span='88.00%' />
                            <Detail2 span='Overdækning' />
                            <HelpIcon/>
                    </ProjectDetails>
                    
                    <MuiGrid></MuiGrid> 
                </Grid>
        </Content>
</BoxContainer>
    )
  }
}

export default Info;