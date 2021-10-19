import { Component } from 'react'
import styled from 'styled-components'
import { media } from '../MediaQueries'

export const GreenRectangule = styled.div`
        background-color: ${(props) => (props.isCompleted ? "rgba(238,202,18,.85)" : "red")};
        transform: rotate(-15deg) scale(1.25);
        display: inline-block;
        position: absolute;
        color: #fff;
        font-weight: 700;
        font-size: 1.5em;
        text-transform: uppercase;
        text-align: center;
        padding: 8px;
        height: 42px;
        width: 300px;
        top: 50%;
        left: 50%;
        margin-top: -21px;
        margin-left: -150px;
        box-sizing: border-box;
        &:first-child {
            color: #fff;
        }

        ${media.mobile} {
            
        }
        `
const state = {
            isCompleted : true
        }

        if (state.isCompleted) {
            state.isCompleted = 'Fuldtegnet'
        } else {
            state.isCompleted = 'Kommer snart'
        }
        
class Completo extends Component {
    render() {


        

        return (
                <GreenRectangule isCompleted={state.isCompleted} >
                    <span>{state.isCompleted}</span>
                </GreenRectangule>
        ) 
    }
}

export default Completo