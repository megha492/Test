import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import ProjectForm from '../../components/UI/Project/Form';

import * as actions from '../../store/actions/index';

class EditProject extends Component {

	state = {
    controls: {id: '', name: '', description: ''},
    message: null
	}

  componentDidMount(){
    const projectId = this.props.match.params.projectId;
    this.props.onInitProject(projectId);
  }

  componentWillReceiveProps(nextProps) {
     this.setState({
         controls: nextProps.project
     })
  }

  
  submitHandler = (event) => {
    event.preventDefault();
    const project = {};
    project.id = this.state.controls.id;
    project.name = this.state.controls.name;
    project.description = this.state.controls.description;
    this.props.onUpdateProject(project);
  }

  changeHandler = (event, inputIdentifier) => {
        const updatedControls = {...this.state.controls};
        updatedControls[inputIdentifier] = event.target.value;
        this.setState({controls: updatedControls});
    }

	render(){

        if(this.props.projectCreated){
                return (<Redirect to="/projects" />)
        }
        let form = null;
        if (this.props.project){
              form = (<ProjectForm 
              title= "Edit Project"
              submit = {this.submitHandler} 
              stateControls = {this.state.controls}
              changed = {this.changeHandler}
              />); }
        return (form);
	     }

}

const mapStatetoProps = state => {
		return {
			isAuthenticated: state.auth.token !== null,
      project: state.projectReducer.project,
      projectCreated: state.projectReducer.success
		}
}

const mapDispatchtoProps = dispatch => {
	return{
    onInitProject: (projectId) => dispatch(actions.projectTodos(projectId)),
    onUpdateProject: (project) => dispatch(actions.updateProject(project))
  }
}
	
export default connect(mapStatetoProps,mapDispatchtoProps)(EditProject, axios);