import * as actionTypes from '../actions/actionTypes';

const initialState = {
    projects: null
};

export const projectsReducer = (state = initialState, action) => {
            switch(action.type) {
                case actionTypes.SET_PROJECTS:
                    return {
                        ...state,
                        projects: action.projects,
                        error: false
                        }
                case actionTypes.SAVE_PROJECT:
                    return {
                        ...state,
                        projects: action.projects
                        }
                case actionTypes.PROJECT_DELETION_SUCCESS:
                 const updatedProjects = state.projects.filter((item) => {
                        return item.id !== action.projectId
                    });
                    return {
                        ...state,
                        success: true,
                        projects: updatedProjects,
                        message: action.message
                        }
               default:
                 return state;
            }
};

// export default projectsReducer;
