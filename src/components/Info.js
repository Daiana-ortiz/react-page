import { Component } from 'react'
import '../index.css'
import styled from 'styled-components'
import ProjectTitle from './ProjectTitle'
import Content from './Content'
import Grid from './Grid'
import CircularProgress from './CircularProgress'

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

                    <CircularProgress>
                        
                    </CircularProgress>

                    <div>
                        <div>
                            <span>1.660.000 DKK</span>
                        </div>
                            <div >
                                <span>Rejst beløb</span>
                            </div>
                    </div>

                    <div>
                        <div>
                            <span>1.600.000 DKK</span>
                        </div>
                            <div >
                                <span>Projektstørrelse</span>
                            </div>
                    </div>

                    <div>
                        <div>
                            10.00%
                        </div>
                        <div>
                            <span>Investorrente p.a.</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span>10.000 DKK</span>
                        </div>

                        <div>
                            <span>Min.indskud</span>
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            10 - 12 mdr.
                        </div>

                        <div>
                            <span>Projektperiode</span>
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            88.00%
                        </div>

                            <div>
                                <span>Overdækning</span>
                                <span  tabIndex="0" role="button" aria-disabled="false" aria-label="overdækning indikerer hvor meget mere projektet er værd, når det er blevet realiseret. En høj overdækning er tegn på et solidt projekt og beregnes som det forventede provenu divideret med de samlede bygge- og salgssomkostninger.">
                                    <span>
                                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                            </div>
                            
                    </div>

                    <div></div>
                        
                </Grid>
            </div>
        </Content>
</BoxContainer>
    )
  }
}

export default Info;