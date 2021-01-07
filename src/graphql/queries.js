/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMaintenanceWorkers = /* GraphQL */ `
  query GetMaintenanceWorkers($id: ID!) {
    getMaintenanceWorkers(id: $id) {
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
export const listMaintenanceWorkerss = /* GraphQL */ `
  query ListMaintenanceWorkerss(
    $filter: ModelMaintenanceWorkersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaintenanceWorkerss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        MaintenanceRequests {
          nextToken
        }
        assignedTickets
        propertiesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTenants = /* GraphQL */ `
  query GetTenants($id: ID!) {
    getTenants(id: $id) {
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
export const listTenantss = /* GraphQL */ `
  query ListTenantss(
    $filter: ModelTenantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenantss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMaintenanceRequests = /* GraphQL */ `
  query GetMaintenanceRequests($id: ID!) {
    getMaintenanceRequests(id: $id) {
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
export const listMaintenanceRequestss = /* GraphQL */ `
  query ListMaintenanceRequestss(
    $filter: ModelMaintenanceRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaintenanceRequestss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getProperties = /* GraphQL */ `
  query GetProperties($id: ID!) {
    getProperties(id: $id) {
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
export const listPropertiess = /* GraphQL */ `
  query ListPropertiess(
    $filter: ModelPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertiess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDocuments = /* GraphQL */ `
  query GetDocuments($id: ID!) {
    getDocuments(id: $id) {
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
export const listDocumentss = /* GraphQL */ `
  query ListDocumentss(
    $filter: ModelDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        s3url
        tenantsID
        Properties {
          id
          propertyName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
