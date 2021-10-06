import { Component } from 'react'
import Circles from '../components/Circles.js'
import Completo from '../components/Completo.js'
import Info from '../components/Info.js'


const styles = {

    wrapper : {
        width: '1200px', 
        display: 'flex',
        margin: '0'

    }, 
    info : {
        height: '530px',
        width: '50%'
        
    },
    imagen : {
        width: '100%',
        top: '0',
        left: '0',
        position: 'relative',
        height: '400px',
        marginBotton: '32px'
    }
  }

class Project extends Component {
  render() {
    return (
            <div style={styles.wrapper}>
                <div style={{ width: '100%'}}>
                    <div style={{ position: 'relative', height: '500px', width: '100%'}}>
                        <img style={styles.imagen} alt="Project" data-sizes="auto" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png"/> 
                        <Circles/>
                    <Completo/>
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