import { Component } from 'react'

const styles = {
    text: {
        fontWeight: '300',
        fontSize: '16px',
        fontFamily: '"Roboto",sans-serif!important',
        lineHeight: '150%',
        color: '#333',
        margin: '25px auto',
        maxWidth: '960px',
        padding: '0 32px 16px',
        textAlign: 'center'
    },
    p: {
        margin: '0 0 1rem'
    }
  }

class Text extends Component {
  render() {
    return (
        <h4 style={styles.text}>
            <p style={styles.p}>Grunden, som er på over 3000 m2, er meget smukt beliggende i kanten af  en skov, hvor ege og bøgetræer pryder grunden.</p>
            <p style={styles.p}>Grunden er unik, da den er meget højt beliggende, hvilket giver en usædvanlig smuk udsigt mod skove, søer og marker  (så langt øjet rækker).</p>
            <p style={styles.p}>Grunden er beliggende ca. 10 km. fra Odense centrum og ikke lang fra byen Vissenbjerg, hvor der er læge, skole, børnehave, plejehjem tillige med meget gode indkøbsmuligheder fra flere supermarkeder.</p>
            <p style={styles.p}>Vissenbjerg er en mellemstor by med stadig stigende udvikling og der opføres for tiden mange nye enfamiliehuse i udkanten af byen.</p>
            <p style={styles.p}>Der er adskillige afgange med bus til Odense dagligt.</p>
            <p style={styles.p}>Vi har nu rejst kapital til denne udvikler 2 gange (Stjær og Thorsager) og derfor hjælper vi udvikler med, at bygge sit eget drømmehus. Så vi er 110% trygge ved, at lægge sagen på Fundbricks.com. </p>
        </h4>
    )
  }
}

export default Text;