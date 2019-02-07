import React from "react";
import axios from "axios";
import {
  Container,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    message: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    axios
      .post("/auth/login", { username, password })
      .then(result => {
        console.log("success!", result);
        localStorage.setItem("jwtToken", result.data.token);

        this.setState({ message: "" });
        this.props.history.push("/admin");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: "login failed. Username or password does not match."
          });
        } else console.error(error);
      });
  };

  render() {
    const { username, password, message } = this.state;

    return (
      <Container>
        <Card>
          <CardBody>
            {message !== "" && <Alert color="danger">{message}</Alert>}
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="email"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button onClick={this.onSubmit}>Login</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
