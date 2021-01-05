// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MaintenanceWorkers, MaintenanceRequests, Tenants, Documents, Properties, PropertiesTenants } = initSchema(schema);

export {
  MaintenanceWorkers,
  MaintenanceRequests,
  Tenants,
  Documents,
  Properties,
  PropertiesTenants
};