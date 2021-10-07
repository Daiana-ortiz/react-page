import { Component } from "react";
import styled from "styled-components";

export const ProjectDetailsStyle = styled.div`
text-align: center;
padding: 16px 0;
flex-grow: 0;
max-width: 50%;
flex-basis: 50%;
margin: 0;
box-sizing: border-box;
`

class ProjectDetails extends Component {
    render() {
        return (
        <ProjectDetailsStyle>{this.props.children}</ProjectDetailsStyle>
        )
    }
}

export default ProjectDetails