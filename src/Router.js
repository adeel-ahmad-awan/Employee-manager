import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="employeelist"
          component={EmployeeList}
          title="Employees"
          rightTitle="add"
          onRight={() => Actions.employeeCreate()
          }
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="create employee"
        />

        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="edit employee"
        />

      </Stack>
    </Router>
  );
};

export default RouterComponent;
