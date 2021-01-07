/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMaintenanceWorkers = /* GraphQL */ `
  mutation CreateMaintenanceWorkers(
    $input: CreateMaintenanceWorkersInput!
    $condition: ModelMaintenanceWorkersConditionInput
  ) {
    createMaintenanceWorkers(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      email
      MaintenanceRequests {
        items {
          id
          creationDate
          completionDate
          severity
          tenantID
          resolverID
          maintenanceworkersID
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      assignedTickets
      propertiesID
      createdAt
      updatedAt
    }
  }
`;
export const updateMaintenanceWorkers = /* GraphQL */ `
  mutation UpdateMaintenanceWorkers(
    $input: UpdateMaintenanceWorkersInput!
    $condition: ModelMaintenanceWorkersConditionInput
  ) {
    updateMaintenanceWorkers(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      email
      MaintenanceRequests {
        items {
          id
          creationDate
          completionDate
          severity
          tenantID
          resolverID
          maintenanceworkersID
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      assignedTickets
      propertiesID
      createdAt
      updatedAt
    }
  }
`;
export const deleteMaintenanceWorkers = /* GraphQL */ `
  mutation DeleteMaintenanceWorkers(
    $input: DeleteMaintenanceWorkersInput!
    $condition: ModelMaintenanceWorkersConditionInput
  ) {
    deleteMaintenanceWorkers(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      email
      MaintenanceRequests {
        items {
          id
          creationDate
          completionDate
          severity
          tenantID
          resolverID
          maintenanceworkersID
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      assignedTickets
      propertiesID
      createdAt
      updatedAt
    }
  }
`;
export const createTenants = /* GraphQL */ `
  mutation CreateTenants(
    $input: CreateTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    createTenants(input: $input, condition: $condition) {
      id
      propertyID
      leasePeriod
      payments
      firstName
      lastName
      email
      address
      phoneNumber
      pets
      perferredContactTime
      openRequests
      emergencyContactFirstName
      emergencyContactLastName
      emergencyContactPhone
      emergencyContactAddress
      Documents {
        items {
          id
          s3url
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      properties {
        items {
          id
          tenantsID
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      MaintenanceRequests {
        items {
          id
          creationDate
          completionDate
          severity
          tenantID
          resolverID
          maintenanceworkersID
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTenants = /* GraphQL */ `
  mutation UpdateTenants(
    $input: UpdateTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    updateTenants(input: $input, condition: $condition) {
      id
      propertyID
      leasePeriod
      payments
      firstName
      lastName
      email
      address
      phoneNumber
      pets
      perferredContactTime
      openRequests
      emergencyContactFirstName
      emergencyContactLastName
      emergencyContactPhone
      emergencyContactAddress
      Documents {
        items {
          id
          s3url
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      properties {
        items {
          id
          tenantsID
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      MaintenanceRequests {
        items {
          id
          creationDate
          completionDate
          severity
          tenantID
          resolverID
          maintenanceworkersID
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTenants = /* GraphQL */ `
  mutation DeleteTenants(
    $input: DeleteTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    deleteTenants(input: $input, condition: $condition) {
      id
      propertyID
      leasePeriod
      payments
      firstName
      lastName
      email
      address
      phoneNumber
      pets
      perferredContactTime
      openRequests
      emergencyContactFirstName
      emergencyContactLastName
      emergencyContactPhone
      emergencyContactAddress
      Documents {
        items {
          id
          s3url
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      properties {
        items {
          id
          tenantsID
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      MaintenanceRequests {
        items {
          id
          creationDate
          completionDate
          severity
          tenantID
          resolverID
          maintenanceworkersID
          tenantsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMaintenanceRequests = /* GraphQL */ `
  mutation CreateMaintenanceRequests(
    $input: CreateMaintenanceRequestsInput!
    $condition: ModelMaintenanceRequestsConditionInput
  ) {
    createMaintenanceRequests(input: $input, condition: $condition) {
      id
      creationDate
      completionDate
      severity
      tenantID
      resolverID
      maintenanceworkersID
      tenantsID
      createdAt
      updatedAt
    }
  }
`;
export const updateMaintenanceRequests = /* GraphQL */ `
  mutation UpdateMaintenanceRequests(
    $input: UpdateMaintenanceRequestsInput!
    $condition: ModelMaintenanceRequestsConditionInput
  ) {
    updateMaintenanceRequests(input: $input, condition: $condition) {
      id
      creationDate
      completionDate
      severity
      tenantID
      resolverID
      maintenanceworkersID
      tenantsID
      createdAt
      updatedAt
    }
  }
`;
export const deleteMaintenanceRequests = /* GraphQL */ `
  mutation DeleteMaintenanceRequests(
    $input: DeleteMaintenanceRequestsInput!
    $condition: ModelMaintenanceRequestsConditionInput
  ) {
    deleteMaintenanceRequests(input: $input, condition: $condition) {
      id
      creationDate
      completionDate
      severity
      tenantID
      resolverID
      maintenanceworkersID
      tenantsID
      createdAt
      updatedAt
    }
  }
`;
export const createProperties = /* GraphQL */ `
  mutation CreateProperties(
    $input: CreatePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    createProperties(input: $input, condition: $condition) {
      id
      propertyName
      MaintenanceWorkers {
        items {
          id
          firstName
          lastName
          phoneNumber
          email
          assignedTickets
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      PropertiesTenants {
        items {
          id
          tenantsID
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProperties = /* GraphQL */ `
  mutation UpdateProperties(
    $input: UpdatePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    updateProperties(input: $input, condition: $condition) {
      id
      propertyName
      MaintenanceWorkers {
        items {
          id
          firstName
          lastName
          phoneNumber
          email
          assignedTickets
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      PropertiesTenants {
        items {
          id
          tenantsID
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProperties = /* GraphQL */ `
  mutation DeleteProperties(
    $input: DeletePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    deleteProperties(input: $input, condition: $condition) {
      id
      propertyName
      MaintenanceWorkers {
        items {
          id
          firstName
          lastName
          phoneNumber
          email
          assignedTickets
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      PropertiesTenants {
        items {
          id
          tenantsID
          propertiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDocuments = /* GraphQL */ `
  mutation CreateDocuments(
    $input: CreateDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    createDocuments(input: $input, condition: $condition) {
      id
      s3url
      tenantsID
      Properties {
        id
        propertyName
        MaintenanceWorkers {
          nextToken
        }
        PropertiesTenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDocuments = /* GraphQL */ `
  mutation UpdateDocuments(
    $input: UpdateDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    updateDocuments(input: $input, condition: $condition) {
      id
      s3url
      tenantsID
      Properties {
        id
        propertyName
        MaintenanceWorkers {
          nextToken
        }
        PropertiesTenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDocuments = /* GraphQL */ `
  mutation DeleteDocuments(
    $input: DeleteDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    deleteDocuments(input: $input, condition: $condition) {
      id
      s3url
      tenantsID
      Properties {
        id
        propertyName
        MaintenanceWorkers {
          nextToken
        }
        PropertiesTenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPropertiesTenants = /* GraphQL */ `
  mutation CreatePropertiesTenants(
    $input: CreatePropertiesTenantsInput!
    $condition: ModelPropertiesTenantsConditionInput
  ) {
    createPropertiesTenants(input: $input, condition: $condition) {
      id
      tenantsID
      propertiesID
      tenants {
        id
        propertyID
        leasePeriod
        payments
        firstName
        lastName
        email
        address
        phoneNumber
        pets
        perferredContactTime
        openRequests
        emergencyContactFirstName
        emergencyContactLastName
        emergencyContactPhone
        emergencyContactAddress
        Documents {
          nextToken
        }
        properties {
          nextToken
        }
        MaintenanceRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      properties {
        id
        propertyName
        MaintenanceWorkers {
          nextToken
        }
        PropertiesTenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePropertiesTenants = /* GraphQL */ `
  mutation UpdatePropertiesTenants(
    $input: UpdatePropertiesTenantsInput!
    $condition: ModelPropertiesTenantsConditionInput
  ) {
    updatePropertiesTenants(input: $input, condition: $condition) {
      id
      tenantsID
      propertiesID
      tenants {
        id
        propertyID
        leasePeriod
        payments
        firstName
        lastName
        email
        address
        phoneNumber
        pets
        perferredContactTime
        openRequests
        emergencyContactFirstName
        emergencyContactLastName
        emergencyContactPhone
        emergencyContactAddress
        Documents {
          nextToken
        }
        properties {
          nextToken
        }
        MaintenanceRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      properties {
        id
        propertyName
        MaintenanceWorkers {
          nextToken
        }
        PropertiesTenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePropertiesTenants = /* GraphQL */ `
  mutation DeletePropertiesTenants(
    $input: DeletePropertiesTenantsInput!
    $condition: ModelPropertiesTenantsConditionInput
  ) {
    deletePropertiesTenants(input: $input, condition: $condition) {
      id
      tenantsID
      propertiesID
      tenants {
        id
        propertyID
        leasePeriod
        payments
        firstName
        lastName
        email
        address
        phoneNumber
        pets
        perferredContactTime
        openRequests
        emergencyContactFirstName
        emergencyContactLastName
        emergencyContactPhone
        emergencyContactAddress
        Documents {
          nextToken
        }
        properties {
          nextToken
        }
        MaintenanceRequests {
          nextToken
        }
        createdAt
        updatedAt
      }
      properties {
        id
        propertyName
        MaintenanceWorkers {
          nextToken
        }
        PropertiesTenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
