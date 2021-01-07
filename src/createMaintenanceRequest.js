import React from "react";
import { Mutation } from "react-apollo";
import { createMaintenanceRequests as createTicket } from "./graphql/mutations";
import gql from "graphql-tag";
import { v4 as uuid4 } from 'uuid';

class CreateTicket extends React.Component {
  handleSubmit = (e, createTicket) => {
    function x(e) {
        for (let i = 0; i < e.length; i++) {
            const a = e[i];
            console.log(a)
        }
    }
    x(e)
    /*function x(e) {
        var z = e.targets.elements.severity.value
        console.log(z)
        return (z == "1") ? 1
        : (z == "2") ? 2
        : (z == "3") ? 3
        : (z == "4") ? 4
        : 5;
    };
    var newSeverity = x(e);
    */
    e.preventDefault();
    var d = new Date().toISOString();
    createTicket({
      variables: {
        input: {
          id: uuid4().toString(),
          creationDate: d,
          severity: this.severity.value, //newSeverity
          maintenanceworkersID: "1232344325",
          tenantsID: "hello there"
        }
      }
    }).then(res => {
      this.severity.value = "";
    });
  };
  render() {
    return (
      <div id='createTicket'>
        <h1>Create Maintenaince Request</h1>
        <Mutation mutation={gql(createTicket)}>
          {(createTicket, { data, loading, error }) => {
            console.log(data)
            return (
              <div>
                <form
                  className="createTicket"
                  onSubmit={e => this.handleSubmit(e, createTicket)}
                >
                  <p>
                      Severity Level ( 1 is the lowest severity ).
                  </p>
                  <p>
                  <input
                    type="radio" name="severity" value = "1"
                    ref={node => (this.severity = node)}
                    required
                  /> 1
                  </p>
                  <p>
                  <input
                    type="radio" name="severity" value = "2"
                    ref={node => (this.severity = node)}
                    required
                  /> 2
                  </p>
                  <p>
                  <input
                    type="radio" name="severity" value = "3"
                    ref={node => (this.severity = node)}
                    required
                  /> 3
                  </p>
                  <p>
                  <input
                    type="radio" name="severity" value = "4"
                    ref={node => (this.severity = node)}
                    required
                  /> 4
                  </p>
                  <p>
                  <input
                    type="radio" name="severity" value = "5"
                    ref={node => (this.severity = node)}
                    required
                  /> 5
                  </p>
                  <button>{loading ? "Yes boss..." : "Submit Maintenance Request"}
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
export default CreateTicket;