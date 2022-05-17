import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setProjectTodos = (project_todos) => {

    const project = {id: project_todos.id, name: project_todos.name, description: project_todos.description};

    return {
        type: actionTypes.PROJECT_TODOS,
        project: project,
        todos: project_todos.tasks
    }
}

export const setprojectResources = (resources) => {
    return {
        type: actionTypes.PROJECT_RESOURCES,
        resources: resources
    }
}

export const projectTodos = (id) => {
    return dispatch => {
        axios.get('/projects/' + id)
		.then(response => {
			dispatch(setProjectTodos(response.data.data));
		})
        .catch(error => {
            console.log(error);
        })

        // const todos = [
        //     {id: 1, name: 'Task1', description: 'Project1', status: 'done' },
        //     {id: 2, name: 'Task2', description: 'Project2', status: 'done'},
        //     {id: 3, name: 'Task3', description: 'Project3', status: 'done' }
        //   ]
        //   dispatch(setProjectTodos(todos));


        const resources = [
            {id: 1, name: 'Megha', email: 'Project1' },
            {id: 2, name: 'SHarma', email: 'Project2' },
            {id: 3, name: 'Test', email: 'Project3' }
          ]
        dispatch(setprojectResources(resources));
    }
}




