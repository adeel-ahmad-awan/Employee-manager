import _ from 'lodash';
import React from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Button, Card, CardSection, Confirm } from './comman';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
  state = { showModel: false };


  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `you upcomming shift in on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }
  onDecline() {
    this.setState({ showModel: false });
  }


  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            save changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            text schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModel: !this.state.showModel })}>
            fire employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModel}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          are you sure
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeSave, employeeUpdate, employeeDelete
})(EmployeeEdit);
