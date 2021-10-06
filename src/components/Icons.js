import { Component} from 'react'
import styled from 'styled-components'
import Fb from './Fb.js'
import Linkedin from './Linkedin.js'
import Mail from './Mail.js'

export const IconStyle = styled.svg`
    
        color: #2e8ffa;
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        font-size: 1.3928571428571428rem;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        flex-shrink: 0;
        
    `

    export const Link = styled.a`
        text-decoration: none;
        height: 32px;
        border-radius: 50%;
        width: 32px;
        overflow: hidden;
        display: inline-flex
        align-items: center;
        justify-content: center;
        
    `



class Icons extends Component {

    render()  { 
        return (
        <div style={{ paddingTop: '10px'}}>
            <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Dfacebook%26utm_campaign%3Dd0be9e4d4247" target="_blank" rel="noopener noreferrer">
                <IconStyle focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                   <Fb/>
                </IconStyle>
            </Link>

            <Link href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Dlinkedin%26utm_campaign%3Dd0be9e4d4247&amp;title=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2&amp;summary=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2" target="_blank" rel="noopener noreferrer">
                <IconStyle focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <Linkedin/>
                </IconStyle>
            </Link>

            <Link href="mailto:?subject=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2&amp;body=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Demail%26utm_campaign%3Dd0be9e4d4247" target="_blank" rel="noopener noreferrer">
                <IconStyle focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <Mail/>
                </IconStyle>
            </Link>
        </div>

        )
}
}


export default Icons