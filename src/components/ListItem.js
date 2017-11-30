import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './comman';

class ListItem extends React.Component {
  onRoePress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
      const { name } = this.props.employee;
      return (
        <TouchableWithoutFeedback onPress={this.onRoePress.bind(this)}>
          <View>
            <CardSection>
              <Text>{ name } </Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
      );
  }
}

export default ListItem;
