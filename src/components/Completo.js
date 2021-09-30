import { Component } from 'react'

const styles = {
    completo: {
        transform: 'rotate(-15deg) scale(1.25)',
        display: 'inline-block',
        position: 'absolute',
        backgroundColor: 'rgba(81,196,124,.85)',
        color: '#fff',
        fontWeight: '700',
        fontSize: '1.5em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '8px',
        height: '42px',
        width: '300px',
        top: '50%',
        left: '40%',
        marginTop: '-21px',
        marginLeft: '-150px'
        
    }

}

class Completo extends Component {
    render() {
        return (
            <div style={styles.completo}>
                <span>Fuldtegnet</span>
            </div>
        )
    }
}

export default Completo