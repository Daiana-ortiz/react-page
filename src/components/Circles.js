import { Component } from 'react'
import styled from 'styled-components'

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

export const DotListItem = styled.li`
        list-style: none;
        padding: 0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin: 0 4px;
        background-color: #002544;
        transition: all .25s ease-in-out;
        transform: scaleX(1);
        box-shadow: 0 0 8px rgb(0 0 0 / 10%);
        cursor: pointer;
        &:hover {
            background-color: #92c4fc;
        }
`;

const Heading = styled.h1`
    color: red;
`

class Circles extends Component {
    render() {
        return (
            <ul style={styles.circles}>
                <Heading> HELLO </Heading>
                <DotListItem/>
            </ul>
        )
    }
}

export default Circles