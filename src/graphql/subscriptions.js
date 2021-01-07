/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMaintenanceWorkers = /* GraphQL */ `
  subscription OnCreateMaintenanceWorkers {
    onCreateMaintenanceWorkers {
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
export const onUpdateMaintenanceWorkers = /* GraphQL */ `
  subscription OnUpdateMaintenanceWorkers {
    onUpdateMaintenanceWorkers {
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
export const onDeleteMaintenanceWorkers = /* GraphQL */ `
  subscription OnDeleteMaintenanceWorkers {
    onDeleteMaintenanceWorkers {
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
export const onCreateTenants = /* GraphQL */ `
  subscription OnCreateTenants {
    onCreateTenants {
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
export const onUpdateTenants = /* GraphQL */ `
  subscription OnUpdateTenants {
    onUpdateTenants {
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
export const onDeleteTenants = /* GraphQL */ `
  subscription OnDeleteTenants {
    onDeleteTenants {
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
export const onCreateMaintenanceRequests = /* GraphQL */ `
  subscription OnCreateMaintenanceRequests {
    onCreateMaintenanceRequests {
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
export const onUpdateMaintenanceRequests = /* GraphQL */ `
  subscription OnUpdateMaintenanceRequests {
    onUpdateMaintenanceRequests {
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
export const onDeleteMaintenanceRequests = /* GraphQL */ `
  subscription OnDeleteMaintenanceRequests {
    onDeleteMaintenanceRequests {
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
export const onCreateProperties = /* GraphQL */ `
  subscription OnCreateProperties {
    onCreateProperties {
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
export const onUpdateProperties = /* GraphQL */ `
  subscription OnUpdateProperties {
    onUpdateProperties {
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
export const onDeleteProperties = /* GraphQL */ `
  subscription OnDeleteProperties {
    onDeleteProperties {
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
export const onCreateDocuments = /* GraphQL */ `
  subscription OnCreateDocuments {
    onCreateDocuments {
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
export const onUpdateDocuments = /* GraphQL */ `
  subscription OnUpdateDocuments {
    onUpdateDocuments {
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
export const onDeleteDocuments = /* GraphQL */ `
  subscription OnDeleteDocuments {
    onDeleteDocuments {
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
export const onCreatePropertiesTenants = /* GraphQL */ `
  subscription OnCreatePropertiesTenants {
    onCreatePropertiesTenants {
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
export const onUpdatePropertiesTenants = /* GraphQL */ `
  subscription OnUpdatePropertiesTenants {
    onUpdatePropertiesTenants {
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
export const onDeletePropertiesTenants = /* GraphQL */ `
  subscription OnDeletePropertiesTenants {
    onDeletePropertiesTenants {
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
