import { Component } from 'react'
import styled from 'styled-components'
import { media } from '../MediaQueries'

export const TextStyle = styled.h4`
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: #333;
        margin: 25px auto;
        max-width: 870px;
        padding: 0 32px 16px;
        text-align: center;
        font-family: "Roboto",sans-serif;
        &:first-child {
         margin: 0 0 1rem;
         
        }
        
        ${media.mobile} {
          margin-top: 24px;
          margin-bottom: 8px;
          text-align: center;
          padding: 8px 16px;
        }
        `


class Text extends Component {
  render() {
    return (
      
        <TextStyle>
            <p>Grunden, som er på over 3000 m2, er meget smukt beliggende i kanten af  en skov, hvor ege og bøgetræer pryder grunden.</p>
            <p>Grunden er unik, da den er meget højt beliggende, hvilket giver en usædvanlig smuk udsigt mod skove, søer og marker  (så langt øjet rækker).</p>
            <p>Grunden er beliggende ca. 10 km. fra Odense centrum og ikke lang fra byen Vissenbjerg, hvor der er læge, skole, børnehave, plejehjem tillige med meget gode indkøbsmuligheder fra flere supermarkeder.</p>
            <p>Vissenbjerg er en mellemstor by med stadig stigende udvikling og der opføres for tiden mange nye enfamiliehuse i udkanten af byen.</p>
            <p>Der er adskillige afgange med bus til Odense dagligt.</p>
            <p>Vi har nu rejst kapital til denne udvikler 2 gange (Stjær og Thorsager) og derfor hjælper vi udvikler med, at bygge sit eget drømmehus. Så vi er 110% trygge ved, at lægge sagen på Fundbricks.com. </p>
        </TextStyle>
      
    )
  }
}

export default Text;