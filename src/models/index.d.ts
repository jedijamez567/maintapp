import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class MaintenanceWorkers {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly email?: string;
  readonly assignedTickets?: string;
  readonly propertiesID?: string[];
  constructor(init: ModelInit<MaintenanceWorkers>);
  static copyOf(source: MaintenanceWorkers, mutator: (draft: MutableModel<MaintenanceWorkers>) => MutableModel<MaintenanceWorkers> | void): MaintenanceWorkers;
}

export declare class MaintenanceRequests {
  readonly id: string;
  readonly creationDate?: string;
  readonly completionDate?: string;
  readonly severity?: number;
  readonly tenantID?: number;
  readonly resolverID?: number;
  readonly maintenanceworkersID?: string[];
  readonly tenantsID: string;
  constructor(init: ModelInit<MaintenanceRequests>);
  static copyOf(source: MaintenanceRequests, mutator: (draft: MutableModel<MaintenanceRequests>) => MutableModel<MaintenanceRequests> | void): MaintenanceRequests;
}

export declare class Tenants {
  readonly id: string;
  readonly propertyID?: string;
  readonly leasePeriod?: string;
  readonly payments?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly address?: string;
  readonly phoneNumber?: string;
  readonly pets?: boolean;
  readonly perferredContactTime?: string;
  readonly openRequests?: string;
  readonly emergencyContactFirstName?: string;
  readonly emergencyContactLastName?: string;
  readonly emergencyContactPhone?: string;
  readonly emergencyContactAddress?: string;
  readonly properties?: (PropertiesTenants | null)[];
  readonly MaintenanceRequests?: (MaintenanceRequests | null)[];
  constructor(init: ModelInit<Tenants>);
  static copyOf(source: Tenants, mutator: (draft: MutableModel<Tenants>) => MutableModel<Tenants> | void): Tenants;
}

export declare class Documents {
  readonly id: string;
  readonly s3url?: string;
  readonly tenantsID?: string[];
  readonly Properties?: Properties;
  constructor(init: ModelInit<Documents>);
  static copyOf(source: Documents, mutator: (draft: MutableModel<Documents>) => MutableModel<Documents> | void): Documents;
}

export declare class Properties {
  readonly id: string;
  readonly propertyName?: string;
  readonly PropertiesTenants?: (PropertiesTenants | null)[];
  constructor(init: ModelInit<Properties>);
  static copyOf(source: Properties, mutator: (draft: MutableModel<Properties>) => MutableModel<Properties> | void): Properties;
}

export declare class PropertiesTenants {
  readonly id: string;
  readonly tenants: Tenants;
  readonly properties: Properties;
  constructor(init: ModelInit<PropertiesTenants>);
  static copyOf(source: PropertiesTenants, mutator: (draft: MutableModel<PropertiesTenants>) => MutableModel<PropertiesTenants> | void): PropertiesTenants;
}