import { Component } from 'react'
import '../index.css'


 export const styles = {
    info: {
        boxShadow: '0 0 16px rgb(0 0 0 / 50%)',
        marginTop: '-16px',
        marginLeft: '-8px',
        zIndex: '1',
        backgroundColor: '#304060',
        color: '#fff',
        padding: '16px',
        borderRadius: '4px',
        position: 'relative',
        width: '90%'
        
    },

    title: {
        color: '#fff',
        fontWeight: '700!',
        fontSize: '20px',
        lineHeight: '170%',
        margin: '8px 0 16px'
    },
    content: {
        fontSize: '16px',
        lineHeight: '170%',
        fontWeight: '300',
        wordBreak: 'break-word',
        textAlign: 'left',
    },

    grid: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    }

  }

class Info extends Component {
  render() {
    return (
        
        <div style={styles.info}>
            <h1 style={styles.title}>En god forrentning</h1>
                <div style={styles.content} >
                <div >
                    <div style={styles.grid}>
                    <div className="MuiGrid-root Project_CircularProgress_gridItem__yL6na MuiGrid-item MuiGrid-grid-xs-12">
                    <div className="Project_projectStepTopChart__t1k6G undefined Project_projectStepTopChartCompleted__2GETH">
                        <svg viewBox="0 0 36 36">
                            <path className="Project_circleBg__1k6VD" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                            <path className="Project_chartCircle__1FuG-" strokeDasharray="103, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                <svg className="MuiSvgIcon-root Project_chartPercentage__fopv5" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                                    </g>
                                </svg>
                        </svg>
                    </div>
                    </div>
                <div className="MuiGrid-root Project_projectInvestmentDetailsItem__1zjeJ MuiGrid-item MuiGrid-grid-xs-6">
                    <div className="General_LabelPaper_content__2ZMNh ">
                        <span>1.660.000 DKK</span>
                    </div>
                    <div className="General_LabelPaper_label__3Zehv ">
                        <span>Rejst beløb</span>
                    </div>
                </div>
                    <div className="MuiGrid-root Project_projectInvestmentDetailsItem__1zjeJ MuiGrid-item MuiGrid-grid-xs-6">
                        <div className="General_LabelPaper_content__2ZMNh ">
                            <span>1.600.000 DKK</span>
                        </div>
                        <div className="General_LabelPaper_label__3Zehv ">
                            <span>Projektstørrelse</span>
                        </div>
                    </div>
                    <div className="MuiGrid-root Project_projectInvestmentDetailsItem__1zjeJ MuiGrid-item MuiGrid-grid-xs-6">
                        <div className="General_LabelPaper_content__2ZMNh ">10.00%</div>
                            <div className="General_LabelPaper_label__3Zehv ">
                                <span>Investorrente p.a.</span>
                            </div>
                        </div>
                            <div className="MuiGrid-root Project_projectInvestmentDetailsItem__1zjeJ MuiGrid-item MuiGrid-grid-xs-6">
                                <div className="General_LabelPaper_content__2ZMNh ">
                                <span>10.000 DKK</span>
                            </div>
                            <div className="General_LabelPaper_label__3Zehv ">
                                <span>Min.indskud</span>
                            </div>
                    </div>
                        <div className="MuiGrid-root Project_projectInvestmentDetailsItem__1zjeJ MuiGrid-item MuiGrid-grid-xs-6">
                            <div className="General_LabelPaper_content__2ZMNh ">10 - 12 mdr.</div>
                                <div className="General_LabelPaper_label__3Zehv ">
                                    <span>Projektperiode</span>
                                </div>
                            </div>
                        
                            <div className="MuiGrid-root Project_projectInvestmentDetailsItem__1zjeJ MuiGrid-item MuiGrid-grid-xs-6">
                                <div className="General_LabelPaper_content__2ZMNh ">88.00%</div>
                                    <div className="General_LabelPaper_label__3Zehv ">
                                        <span>Overdækning</span>
                                        <span className="MuiButtonBase-root MuiButton-root General_helpIconLink__1opYV MuiButton-text" tabIndex="0" role="button" aria-disabled="false" aria-label="overdækning indikerer hvor meget mere projektet er værd, når det er blevet realiseret. En høj overdækning er tegn på et solidt projekt og beregnes som det forventede provenu divideret med de samlede bygge- og salgssomkostninger.">
                                        <span className="MuiButton-label">
                                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <g>
                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="MuiGrid-root General_textAlignCenter__3J3PU MuiGrid-item MuiGrid-grid-xs-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            
    )
  }
}

export default Info;