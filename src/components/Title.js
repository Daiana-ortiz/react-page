import { Component } from 'react'

const styles = {
    title: {
        padding: '8px 0 ',
        margin: '0 auto' ,
        maxWidth: '768px',
        color: '#304060',
        fontSize: '43.2px',
        fontWeight: '700',
        lineHeight: '125%',
        textAlign: 'center'
    }
  }

class Title extends Component {
  render() {
    return (
      <h1 style={styles.title}>1 liebhavervilla ved Odense</h1>
    )
  }
}

export default Title;
