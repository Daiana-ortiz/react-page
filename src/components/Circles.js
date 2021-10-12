import { Component } from 'react'
import styled, { keyframes } from 'styled-components'


export const Animation = keyframes`
50% {
    transform: scale3d(1.1,1.1,1.1) translate3d(0,-3px,0);
}
`
export const List = styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        height: 32px;
        align-items: center;
        width: 100%;
        justify-content: center;
             
       
    `

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

`

export const ExtendedListItem = styled(DotListItem)`
        animation: ${Animation} 1.25s cubic-bezier(.175,.885,.32,1.275) infinite;
        background-color: #2e8ffa;
        transform: scale3d(1.1,1.1,1.1);
        &:hover {
            background-color: #2e8ffa;
        }
`
;

class Circles extends Component {
    render() {
        return (
            <List>
                <ExtendedListItem/>
                <DotListItem/>
                <DotListItem/>
                <DotListItem/>
                <DotListItem/>
                <DotListItem/>
                <DotListItem/>
            </List>
        )
    }
}

export default Circles