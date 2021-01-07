import React from "react";
import { Mutation } from "react-apollo";
import { createTenants } from "./graphql/mutations";
import gql from "graphql-tag";
import { v4 as uuid4 } from 'uuid';

class CreateTenants extends React.Component {
  handleSubmit = (e, createTenants) => {
    e.preventDefault();
    createTenants({
      variables: {
        input: {
          id: uuid4().toString(),
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          email: this.email.value,
          address: this.address.value,
          phoneNumber: this.phoneNumber.value,
          pets: this.pets.value
        }
      }
    }).then(res => {
      this.firstName.value = "";
      this.lastName.value = "";
      this.email.value = "";
      this.address.value = "";
      this.phoneNumber.value = "";
      this.pets.value = Boolean;
    });
  };
  render() {
    return (
      <div id='createTenant'>
        <h1>Create Tenant</h1>
        <Mutation mutation={gql(createTenants)}>
          {(createTenants, { data, loading, error }) => {
            return (
              <div>
                <form
                  className="add-tenant"
                  onSubmit={e => this.handleSubmit(e, createTenants)}
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
                    type="text" placeholder="Physical Address"
                    ref={node => (this.address = node)}
                    required
                  />
                  <input
                    type="tel" placeholder="Phone Number"
                    ref={node => (this.phoneNumber = node)}
                    required
                  />
                  <p>
                  <label for="pets radio button">Do you have pet(s)?</label>
                  </p>
                  <p>
                  <input
                    type="radio" name="check for pets"
                    value = "true"
                    ref={node => (this.pets = node)}
                    required
                  />Yes
                  </p>
                  <p>
                  <input
                    type="radio" name="check for pets"
                    value = "false"
                    ref={node => (this.pets = node)}
                    required
                  />No
                  </p>
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
export default CreateTenants;