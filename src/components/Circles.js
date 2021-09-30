import { Component } from 'react'

const styles = {
    circles: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
        height: '32px',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'center',
        
    },
    li1 : {
        backgroundColor: '#2e8ffa',
        transition: 'all .25s ease-in-out',
        transform: 'scale3d(1.1,1.1,1.1)',
        listStyle: 'none',
        padding: '0',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        margin: '0 4px',
        transition: 'all .25s ease-in-out',
        transform: 'scaleX(1)',
        boxShadow: '0 0 8px rgb(0 0 0 / 10%)',
        cursor: 'pointer',
        animation: 'bouncingIndex 1250ms infinite cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    
    },
    li : {
        transition: 'all .25s ease-in-out',
        transform: 'scale3d(1.1,1.1,1.1)',
        listStyle: 'none',
        padding: '0',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        margin: '0 4px',
        backgroundColor:'#002544',
        transition: 'all .25s ease-in-out',
        transform: 'scaleX(1)',
        boxShadow: '0 0 8px rgb(0 0 0 / 10%)',
        cursor: 'pointer'
    }
}

class Circles extends Component {
    render() {
        return (
            <ul style={styles.circles}>
                <li style={styles.li1}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
            </ul>
        )
    }
}

export default Circles