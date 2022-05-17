import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import ProjectForm from '../../components/UI/Project/Form';

import * as actions from '../../store/actions/index';

class NewProject extends Component {

	state = {
		controls: {
			name: '',
			description: ''
		}
	}

	changeHandler = (event, inputIdentifier) => {
        console.log(event.target.value);
        const updatedControls = {...this.state.controls};
        updatedControls[inputIdentifier] = event.target.value;
        this.setState({controls: updatedControls});
    }

	submitHandler = (event) => {
		
        event.preventDefault();
        const project = {};
        project.name = this.state.controls.name;
        project.description = this.state.controls.description;
        this.props.onCreateProject(project);
            
    }

	render(){
		if(this.props.projectCreated){
                return (<Redirect to="/projects" />)
        }
        return (<ProjectForm 
        	title= "New Project"
        	submit = {this.submitHandler} 
        	stateControls = {this.state.controls}
        	changed = {this.changeHandler}
        	/>);
	}

}

const mapStatetoProps = state => {
		return {
			isAuthenticated: state.auth.token !== null,
			projectCreated: state.projectReducer.success
		}
}

const mapDispatchtoProps = dispatch => {
	return{
		onCreateProject: (project) => dispatch(actions.createProject(project))
	}
}
	
export default connect(mapStatetoProps,mapDispatchtoProps)(NewProject, axios);