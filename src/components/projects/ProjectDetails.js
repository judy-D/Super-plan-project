import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import  { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import  { deleteProject } from '../../store/actions/projectActions';




const ProjectDetails = (props) => {

//    const handleDelete = e => {
//         const { id } = this.props;
//         e.preventDefault();
//         this.props.deleteProject(id);
//         // you can push to dashboard after deleting...
//     }
    const { project, auth } = props;
    if(!auth.uid) return <Redirect to="/signin" />

    if(project) {
        
        return(
   <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                    <div className="card-action grey lighten-4 grey-text" >
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                    {/* <button onClick={this.handleDelete}>Delete</button> */}
            </div>
        </div>
    </div>
        )
     
    }
    else {
        return (
                <div className="container center">
                    <p>Loading project...</p>
                </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        id: id,
        project: project,
        auth: state.firebase.auth
    }
}

const mapDistpacthToProps = dispatch => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDistpacthToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);
