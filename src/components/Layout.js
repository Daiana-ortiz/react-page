import { Component } from 'react'

const styles = {
    layout: {
        padding: '8px 0 ',
        margin: '0 auto',
    },
    container: {
        width: '1200px',
        paddingTop: '20px',
        margin: '0 auto',
    }
}


class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout