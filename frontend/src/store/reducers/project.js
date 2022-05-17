import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: null,
    resources: null
};

const projectReducer = (state = initialState, action) => {
            switch(action.type) {
                case actionTypes.PROJECT_TODOS:
                    return {
                        ...state,
                        todos: action.todos,
                        project: action.project,
                        error: false
                        }
                case actionTypes.PROJECT_CREATION_SUCCESS:
                    return {
                        ...state,
                        success: true
                        }
                case actionTypes.PROJECT_RESOURCES:
                    return {
                        ...state,
                        resources: action.resources,
                        error: false
                        }
               default:
                 return state;
            }
};

export default projectReducer;
