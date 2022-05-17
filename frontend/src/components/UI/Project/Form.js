import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import FormContainer from '../../../hoc/FormContainer/FormContainer';

const button = (props) => {
    return(
     <FormContainer title={props.title}>
                  <Form onSubmit={props.submit}>
                    <FormGroup>
                      <Label for="projectName">Project Name:</Label>
                      <Input type="text" id ="name"
                       value={props.stateControls.name}
                       onChange = {(event) => props.changed(event, 'name')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Description: </Label>
                      <Input type="text" name="description" id="description" placeholder="Description" 
                      value={props.stateControls.description}
                      onChange = {(event) => props.changed(event,'description')} />
                    </FormGroup>
                    <Button>Submit</Button>
                  </Form>
                </FormContainer>
      )
}

export default button;