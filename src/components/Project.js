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
        width: '75%',
        position: 'absolute'
        
    }, 
    info : {
        width: '25%',
        position: 'absolute',
        left: '67%',
        top: '64%'
    },
    imagen : {
        width: '75%',
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
                    <img style={styles.imagen} data-sizes="auto" data-srcset="https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_256/v1631281133/nvw7yzxqr1nlpvg4przf.png 256w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_512/v1631281133/nvw7yzxqr1nlpvg4przf.png 512w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_768/v1631281133/nvw7yzxqr1nlpvg4przf.png 768w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1024/v1631281133/nvw7yzxqr1nlpvg4przf.png 1024w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1280/v1631281133/nvw7yzxqr1nlpvg4przf.png 1280w" src="https://res.cloudinary.com/fundbricks/image/upload/v1631281133/nvw7yzxqr1nlpvg4przf.png" srcset="https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_256/v1631281133/nvw7yzxqr1nlpvg4przf.png 256w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_512/v1631281133/nvw7yzxqr1nlpvg4przf.png 512w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_768/v1631281133/nvw7yzxqr1nlpvg4przf.png 768w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1024/v1631281133/nvw7yzxqr1nlpvg4przf.png 1024w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1280/v1631281133/nvw7yzxqr1nlpvg4przf.png 1280w" alt="project image" class="lazyautosizes ls-is-cached lazyloaded" sizes="551px"/>
                </div>
                <div>
                    <Circles/>
                </div>
                <div>
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