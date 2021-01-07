import React from "react";
import { Mutation } from "react-apollo";
import { createMaintenanceWorkers as registerPersonnell } from "./graphql/mutations";
import gql from "graphql-tag";
import { v4 as uuid4 } from 'uuid';

class RegisterPersonnell extends React.Component {
  handleSubmit = (e, registerPersonnell) => {
    e.preventDefault();
    registerPersonnell({
      variables: {
        input: {
          id: uuid4().toString(),
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          email: this.email.value,
          phoneNumber: this.phoneNumber.value
        }
      }
    }).then(res => {
      this.firstName.value = "";
      this.lastName.value = "";
      this.email.value = "";
      this.phoneNumber.value = "";
    });
  };
  render() {
    return (
      <div id='registerPersonnell'>
        <h1>Register Personnell</h1>
        <Mutation mutation={gql(registerPersonnell)}>
          {(registerPersonnell, { data, loading, error }) => {
            return (
              <div>
                <form
                  className="register-personnell"
                  onSubmit={e => this.handleSubmit(e, registerPersonnell)}
                >
                  <input
                    type="text" placeholder="First name"
                    ref={node => (this.firstName = node)}
                    required
                  />
                  <input
                    type="text" placeholder="Last name"
                    ref={node => (this.lastName = node)}
                    required
                  />
                  <input
                    type="email" placeholder="Email"
                    ref={node => (this.email = node)}
                    required
                  />
                  <input
                    type="tel" placeholder="Phone Number"
                    ref={node => (this.phoneNumber = node)}
                    required
                  />
                  <button>{loading ? "Yes boss..." : "Create Tenant"}
                  </button>
                </form>
                {error && <p>{error.message}</p>}
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
export default RegisterPersonnell;