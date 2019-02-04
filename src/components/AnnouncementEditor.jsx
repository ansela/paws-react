import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export default class AnnouncementEditor extends React.Component {
  static propTypes = {
    initialText: PropTypes.string,
    onCancel: PropTypes.func,
    onSave: PropTypes.func.isRequired
  };

  static defaultProps = {
    initialText: "",
    onCancel: () => {}
  };

  state = { text: this.props.initialText };

  onTextChanged = e => this.setState({ text: e.target.value });

  onCancel = () => this.props.onCancel();

  onSave = () => {
    const { onSave } = this.props;
    const { text } = this.state;
    onSave(text);
  };

  render() {
    const { text } = this.state;
    return (
      <Card className="paws-announcement">
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="announcementText">Message</Label>
              <Input
                type="textarea"
                name="text"
                id="announcementText"
                value={text}
                onChange={this.onTextChanged}
              />
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter>
          <Button
            className="float-right"
            onClick={this.onCancel}
            color="secondary"
            outline
          >
            Cancel
          </Button>
          <Button
            className="float-right"
            onClick={this.onSave}
            color="success"
            outline
          >
            Save
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
