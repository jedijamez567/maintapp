import React, { Component } from 'react';
import CreateTenants from './createTenant';
import RegisterPersonnell from './maintRegistration';
import CreateTicket from './createMaintenanceRequest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <CreateTenants />
        </p>
        <p>
          <RegisterPersonnell />
        </p>
        <p>
          <CreateTicket />
        </p>
      </div>
    );
  }
}
export default App;