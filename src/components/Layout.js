import { Component } from 'react'

const styles = {
    layout: {
        padding: '8px 0 ',
        margin: '0 auto',
        width: '1200px',

    },
    container: {
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