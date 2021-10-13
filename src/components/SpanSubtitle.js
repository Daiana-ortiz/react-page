import { Component } from "react";



class SpanSubtitle extends Component {
    render() {

        const project = {
            status: true,
            type: true
        }
       
        if (project.status && project.type) {
            project.status='Byggefinansiering '
            project.type=' Fundingmål nået'
        } else {
            project.status='status?'
            project.type='type?'
        }

        return (
            
            <span>
                {project.status} 
                -
                {project.type} 
            </span>
        )
    }
}

export default SpanSubtitle