import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Dropdown, Table, Label, Input, Button, Alert } from 'reactstrap';
import classes from './Tasks.module.css';

import CustomModal from '../../components/UI/Modal/Modal';
import CustomAlert from '../../components/UI/Alert/Alert';
import TaskSearch from '../../components/Task/Search';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

class Tasks extends Component {
    state = {
        message: null,
        modal: false,
        inputValue: ''
    }

  componentDidMount() {
      this.props.onInitTasks();
  }

  updateInputValue = (evt, id) => {
    // let tathis.props.tasks.filter(id)
    let prevTask = this.props.tasks.filter( function (task) {
      console.log(task.id);
      console.log(task.id == id);
      return task.id == id
    });
    alert(this.props.tasks);
    alert(prevTask.id);
    alert(prevTask.status);
    alert(prevTask.newStatus);
    prevTask.newStatus = evt.target.value
    alert(prevTask);
  }

  
render(){

    // if(!this.props.isAuthenticated){
    //   let redirect = <Redirect to="/login" />
    //   return(redirect);
    // }
		  

    let projectRows = null;
    let notice = null;

    if(this.state.message) {
      notice =  <CustomAlert message={this.state.message} color="success" />
    }

    if (this.props.tasks){
      projectRows = (
        this.props.tasks.map(taskObject => {
        return(
          <tr key={taskObject.id}>
            <th scope="row">{taskObject.id}</th>
            <td>{taskObject.name}</td>
            <td>{taskObject.description}</td>
            <td>{taskObject.name}</td>
            <td>{taskObject.status}{taskObject.newStatus ? taskObject.newStatus : '' }</td>
            <td>
            <Input type="select" id="status" value={this.state.inputValue} onChange={(event) => this.updateInputValue(event, taskObject.id)} style={{Width: 'fit-content !important'}}>
              <option>Open</option>
              <option>InProgress</option>
              <option>Done</option>
            </Input>
            <Button color="success" size="sm" onClick={() => this.updateStatus(taskObject.id, taskObject.newStatus)}>Update Status</Button> {' '}
            </td>
          </tr>) 
        })
     )

    }

    return (
          <div className={classes.Container}>
           <TaskSearch />
           <CustomModal isOpen={this.state.modal} toggle={this.toggle} 
          title= "Delete Task" body="Are you sure you want to delete?"
          submitHandler = {this.deleteHandler} submit="CONTINUE" cancel="CANCEL"/>

           {notice}
          <div className={classes.Center}>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task Name</th>
                  <th>Task Description</th>
                  <th>Project Name</th>
                  <th>Status</th>
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
      tasks: state.tasksReducer.tasks
		}
}

const mapDispatchtoProps = dispatch => {
	return{
        onInitTasks: () => dispatch(actions.initTasks())
	}
}
	
export default connect(mapStatetoProps,mapDispatchtoProps)(Tasks, axios);