import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import { withRouter } from 'react-router-dom';

export const setProjects = (projects) => {
    return {
        type: actionTypes.SET_PROJECTS,
        projects: projects
    }
}

export const projectCreationSuccess = () => {
    return {
        type: actionTypes.PROJECT_CREATION_SUCCESS
    }
}

export const projectDeletionSuccess = (projectId) => {
    return {
        type: actionTypes.PROJECT_DELETION_SUCCESS,
        message: 'Deleted successfully',
        projectId: projectId
    }
}

export const initProjects = () => {
    return dispatch => {
        axios.get('/projects')
		.then(response => {
			dispatch(setProjects(response.data.data));
		})
        .catch(error => {
            console.log(error);
        })
    }
}

export const createProject = (project) => {
    return dispatch => {
        axios.post('/projects', project)
        .then(response => {
            dispatch(projectCreationSuccess());
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const updateProject = (project) => {
    return dispatch => {
        axios.put('/projects/' + project.id, project)
        .then(response => {
            dispatch(projectCreationSuccess());
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const deleteProject = (projectId) => {
    return dispatch => {
        axios.delete('/projects/' + projectId)
        .then(response => {
            dispatch(projectDeletionSuccess(projectId));
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const saveProject = (projectId) => {
    console.log(this.props.projects);
    return {
        type: actionTypes.SAVE_PROJECT
    }
}