import { Component } from 'react'
import Icons from '../components/Icons.js'


const styles = {
    subtitle1: {
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '170%',
        padding: '0',
        margin: '0',
        color: '#304060',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
  }

const styles2 = {
subtitle2: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 0 32px',
    borderLeft: '1px solid #ddd',
    paddingLeft: '32px',
    color: '#666',
    fontWeight: '300'
}}

class Subtitle extends Component {
  render() {
    return (
        <div style={styles.subtitle1}>
        <span>Byggefinansiering - Fundingmål nået</span>
        <span style={styles2.subtitle2} >Del via
        <Icons/>
        </span>
        </div>
    )
  }
}

export default Subtitle;