import { Component } from 'react'
import styled from 'styled-components'

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
`;

class Circles extends Component {
    render() {
        return (
            <List>
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