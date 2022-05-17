import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Table, Button, Alert } from 'reactstrap';
import classes from './Projects.module.css';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import CustomModal from '../../components/UI/Modal/Modal';
import CustomAlert from '../../components/UI/Alert/Alert';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

class Projects extends Component {

  state = {
    modal: false,
    message: null
  }

  componentDidMount() {
      this.props.onInitProjects();
  }
  
  newHandler = () => {
		this.props.history.push({pathname: '/projects/new'});
  }
  
  showHandler = (id) => {
		this.props.history.push({pathname: '/projects/' + id});
  }
  
  editHandler = (id) => {
		this.props.history.push({pathname: '/projects/' + id + '/edit'});
  }
  
  deleteHandler = () => {
    this.toggle();
    this.props.onDeleteProject(this.state.id);
  }

  componentWillReceiveProps(nextProps) {
     this.setState({
         projects: nextProps.projects, 
         message: nextProps.message
     })
  }

  deleteConfirm = (id) => {
    this.setState({id: id})
    this.toggle();
  }
  
  toggle = (event) => {
		this.setState(prevState => ({
      modal: !prevState.modal
    }));
	}

	render(){

    if(!this.props.isAuthenticated){
      let redirect = <Redirect to="/login" />
      return(redirect);
    }
		  

    let projectRows = null;
    let notice = null;

    if(this.state.message) {
      notice =  <CustomAlert message={this.state.message} color="success" />
    }

    if (this.props.projects){
      projectRows = (
        this.props.projects.map(projectObject => {
        return(
          <tr key={projectObject.id}>
            <th scope="row">{projectObject.id}</th>
            <td>{projectObject.name}</td>
            <td>{projectObject.description}</td>
            <td>
            <Button color="primary" size="sm" onClick={() => this.showHandler(projectObject.id)}>Show</Button>{' '} 
            <Button color="success" size="sm" onClick={() => this.editHandler(projectObject.id)}>Edit</Button> {' '}
            <Button color="danger" size="sm" onClick={() => this.deleteConfirm(projectObject.id)}>Delete</Button> 
            </td>
          </tr>) 
        })
     )

    }

    return (
          <div className={classes.Container}>
          <CustomModal isOpen={this.state.modal} toggle={this.toggle} 
          title= "Delete Project" body="Are you sure you want to delete?"
          submitHandler = {this.deleteHandler} submit="CONTINUE" cancel="CANCEL"/>

           {notice}

          <Button color="primary" size="md"  onClick={() => this.newHandler()}

          style={ {   
            float: 'right',
            margin: '-16px',
            marginRight: '-84px'
          }}>New Project</Button>
          <div className={classes.Center}>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th colSpan="3">Actions</th>
                </tr>
              </thead>
              <tbody>
              {projectRows}
              </tbody>
            </Table>
            </div>
          </div>
          );
	}

}

const mapStatetoProps = state => {
		return {
      isAuthenticated: state.auth.token !== null,
      projects: state.projectsReducer.projects,
      message: state.projectsReducer.message
		}
}

const mapDispatchtoProps = dispatch => {
	return{
    onInitProjects: () => dispatch(actions.initProjects()),
    onDeleteProject: (projectId) => dispatch(actions.deleteProject(projectId)),
    saveProject: (projectId) => dispatch(actions.saveProject(projectId))
	}
}
	
export default connect(mapStatetoProps,mapDispatchtoProps)(Projects, axios);