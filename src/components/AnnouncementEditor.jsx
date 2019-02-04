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
  FormText,
  Button
} from "reactstrap";
import { DateRangePicker } from "react-dates";
import Moment from "moment";

const dateIds = {
  START_DATE: "announcementStartDate",
  END_DATE: "announcementEndDate"
};

export default class AnnouncementEditor extends React.Component {
  static propTypes = {
    initialText: PropTypes.string,
    initialStartDate: PropTypes.number,
    initialEndDate: PropTypes.number,
    onSave: PropTypes.func.isRequired
  };

  static defaultProps = {
    initialText: "",
    initialStartDate: null,
    initialEndDate: null
  };

  constructor(props) {
    super(props);

    this.state = {
      text: props.initialText,
      includeDate: this.shouldIncludeDate(
        props.initialStartDate,
        props.initialEndDate
      ),
      startDate: Moment(this.props.initialStartDate).isValid()
        ? Moment(this.props.initialStartDate)
        : null,
      endDate: Moment(this.props.initialEndDate).isValid()
        ? Moment(this.props.initialEndDate)
        : null,
      focusedInput: null
    };
  }

  shouldIncludeDate = (startDate, endDate) => {
    const startDateValid = startDate != null && Moment(startDate).isValid();
    const endDateValid = endDate != null && Moment(endDate).isValid();

    return startDateValid && endDateValid;
  };

  onTextChanged = e => this.setState({ text: e.target.value });

  onIncludeDateChanged = e =>
    this.setState(prevState => ({ includeDate: !prevState.includeDate }));

  onDatesChange = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  onFocusChange = focusedInput => this.setState({ focusedInput });
  onSave = () => {
    const { onSave } = this.props;
    const { text, includeDate, startDate, endDate } = this.state;
    if (includeDate) onSave(text, startDate.valueOf(), endDate.valueOf());
    else onSave(text, null, null);
  };

  render() {
    const { text, includeDate, startDate, endDate, focusedInput } = this.state;
    console.log(includeDate);
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
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  value={includeDate}
                  onChange={this.onIncludeDateChanged}
                />{" "}
                Include Date
              </Label>
            </FormGroup>
            {includeDate && (
              <FormGroup>
                <DateRangePicker
                  startDate={startDate}
                  startDateId={dateIds.START_DATE}
                  endDate={endDate}
                  endDateId={dateIds.END_DATE}
                  onDatesChange={this.onDatesChange}
                  focusedInput={focusedInput}
                  onFocusChange={this.onFocusChange}
                />
              </FormGroup>
            )}
          </Form>
        </CardBody>
        <CardFooter>
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
