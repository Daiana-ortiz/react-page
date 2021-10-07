import { Component } from "react";
import styled from "styled-components";

export const H1 = styled.h1`
    font-family: "Source Sans Pro",sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 170%;
    margin: 8px 0 16px;
    color: #fff;
`

class ProjectTitle extends Component {
    render () {
        return  <H1>{this.props.title}</H1>
    }
}

export default ProjectTitle 