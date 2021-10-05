import { Component } from 'react'
import Circles from '../components/Circles.js'
import Completo from '../components/Completo.js'
import Info from '../components/Info.js'


const styles = {
    project: {
        display: 'flex',
        justifyContent: 'space-between',
        
    },
    container : {
        width: '100%', 
    }, 
    info : {
        width: '35%',
        position: 'relative'
        
    },
    imagen : {
        width: '100%',
        height: 'auto',
        top: '0',
        left: '0',
        position: 'relative'
    }
  }

class Project extends Component {
  render() {
    return (
        <div style={styles.project}>
            <div style={styles.container}>
                <div>
                    <div style={{ position: 'relative'}}>
                        <img style={styles.imagen} alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/> 
                    <Completo/>
                    </div>
                    
                </div>
                <div>
                    <Circles/>
                </div>
                
            </div>
            <div style={styles.info}>
                <Info/>
            </div>
        </div>
    )
  }
}

export default Project;