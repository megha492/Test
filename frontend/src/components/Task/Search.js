import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import searchImg from '../../assets/images/Task/search.png';
import classes from './Task.module.css';

// import FormContainer from '../../hoc/FormContainer/FormContainer';

const button = (props) => {
    return(
      <div>
        <Form inline className={classes.Search}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="taskName" className="mr-sm-2">Task Name</Label>
              <Input type="name" name="name" id="taskName" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="projectName" className="mr-sm-2">Project Name</Label>
              <Input type="projectName" name="projectName" id="projectName"/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="status" className="mr-sm-2">Status</Label>
              <Input type="select" name="status" id="status">
                  <option>Open</option>
                  <option>InProgress</option>
                  <option>Done</option>
                </Input>
            </FormGroup>
            <img src={searchImg}/>
        </Form>
    </div>
      )
}

export default button;