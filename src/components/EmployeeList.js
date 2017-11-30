import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView } from 'react-native';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
  }// end componentWillMount

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enabelEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      >

      </ListView>
    );
  }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
