import * as React from 'react';
import { Container, Form, FormFeedback, FormGroup, Input, Button, Label } from 'reactstrap';
import { default as FormValidationRunner } from '../validators';
import { FormData, ValidationRunner } from 'ecv-validation';

import './LoginFormView.scss';

export interface LoginFormViewProps {};

export interface LoginData {
  email?: string;
  name?: string;
}

export interface LoginFormViewState {
  data: FormData<LoginData>;
}

export default class LoginFormView extends React.Component<LoginFormViewProps, LoginFormViewState> {
  constructor(props: LoginFormViewProps) {
    super(props);

    this.state = {
      data: {
        values: {
          email: "",
          name: "",
        },
        errors: {},
        invalid: {},
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    this.setState((prevState) => {
      const { data } = prevState;
      (data.values as any)[name] = value

      return { data };
    });
  }

  handleSubmit(e: React.FormEvent<HTMLElement>) {
    // Prevent actual form submition
    e.preventDefault();
    
    this.setState(prevState => {
      const { data } = prevState;
      return { data: FormValidationRunner.runAll(data.values) };
    });
  }

  render() {
    const { data: { values, errors, invalid} } = this.state; 

    return (
      <Container>
        <div className="form-holder">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={values.email}
                invalid={invalid.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={values.name}
                invalid={invalid.email}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input className="btn-submit" tag={Button} color="success" type="submit">Submit</Input>
            </FormGroup>
          </Form>
        </div>
      </Container>
    );
  }
}
