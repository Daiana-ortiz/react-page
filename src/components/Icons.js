import { Component} from 'react'

const styles = {
    icons: {
        color: '#2e8ffa',
        fill: 'currentColor',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fontSize: '1.3928571428571428rem',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        flexShrink: '0',
        userSelect: 'none'
    },
    a: {
        textDecoration: 'none',
        height: '32px',
        borderRadius: '50%',
        width: '32px',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
  }

class Icons extends Component {

    render()  { 
        return (
            <div>
            <a style={styles.a} href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Dfacebook%26utm_campaign%3Dd0be9e4d4247" target="_blank" rel="noopener noreferrer">
                <svg style={styles.icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path d="M12.7171122,19.0909091 L10.0566773,19.0909091 L10.0566773,12.81739 L8.72727273,12.81739 L8.72727273,10.6557458 L10.0566773,10.6557458 L10.0566773,9.35796746 C10.0566773,7.59460421 10.8069313,6.54545455 12.9398312,6.54545455 L14.7150801,6.54545455 L14.7150801,8.70789057 L13.6055495,8.70789057 C12.7752305,8.70789057 12.7203636,9.00996649 12.7203636,9.57373597 L12.7167058,10.6557458 L14.7272727,10.6557458 L14.4919547,12.81739 L12.7167058,12.81739 L12.7167058,19.0909091 L12.7171122,19.0909091 Z" fill="currentColor"></path>
                    </g>
                </svg>
            </a>

            <a style={styles.a} href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Dlinkedin%26utm_campaign%3Dd0be9e4d4247&amp;title=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2&amp;summary=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2" target="_blank" rel="noopener noreferrer">
                <svg style={styles.icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M6.82061917,10.0435162 L8.9468913,10.0435162 L8.9468913,17.453847 L6.82061917,17.453847 L6.82061917,10.0435162 Z M7.82955614,9.1166137 L7.81416232,9.1166137 C7.04447105,9.1166137 6.54545455,8.55013446 6.54545455,7.83278036 C6.54545455,7.10075787 7.05922347,6.54545455 7.84430856,6.54545455 C8.62875224,6.54545455 9.11109211,7.09936088 9.12648593,7.83068487 C9.12648593,8.54803898 8.62875224,9.1166137 7.82955614,9.1166137 L7.82955614,9.1166137 Z M17.4545455,17.4545455 L15.0434876,17.4545455 L15.0434876,13.6191108 C15.0434876,12.6153739 14.6663388,11.930849 13.8369965,11.930849 C13.2026426,11.930849 12.8498674,12.392554 12.6856666,12.8388922 C12.6240913,12.998149 12.6337125,13.2209688 12.6337125,13.4444871 L12.6337125,17.4545455 L10.2451039,17.4545455 C10.2451039,17.4545455 10.2758916,10.6609856 10.2451039,10.0435162 L12.6337125,10.0435162 L12.6337125,11.20651 C12.7748225,10.6980058 13.5380997,9.97226976 14.7561361,9.97226976 C16.2672967,9.97226976 17.4545455,11.0388712 17.4545455,13.3334265 L17.4545455,17.4545455 L17.4545455,17.4545455 Z" fill="currentColor"></path>
                    </g>
                </svg>
            </a>

            <a style={styles.a} href="mailto:?subject=1%20liebhavervilla%20ved%20Odense%20-%20Fundbricks.com%E2%84%A2&amp;body=https%3A%2F%2Fwww.fundbricks.com%2Fprojects%2F1-liebhavervilla-ved-odense%3Futm_source%3Dweb-share-button%26%26utm_medium%3Demail%26utm_campaign%3Dd0be9e4d4247" target="_blank" rel="noopener noreferrer">
                <svg style={styles.icons} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                    </g>
                </svg>
            </a>
            </div>
        )
}
}


export default Icons