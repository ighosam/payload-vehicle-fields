import { CollectionConfig } from 'payload';
//import { makeEndpoint } from '../enpoints/makeEndpoint.js';
//import { modelEdnpoint } from '../enpoints/modelEndpoint.js';
//import { yearEdnpoint } from '../enpoints/yearEndpoint.js';
//import { trimEdnpoint } from '../enpoints/trimEndpoint.js';
import { createOptionsEndpoint } from '../enpoints/createOptionsEndpoint.js';

//This collection is created so as the place the endpoints here
// to separate it from payload endpoints
const yearEndpoint = createOptionsEndpoint('year')
const makeEndpoint = createOptionsEndpoint('make')
const modelEndpoint = createOptionsEndpoint('model')
const trimEndpoint = createOptionsEndpoint('trim')
const driveEndpoint = createOptionsEndpoint('drive')
const transmissionEndpoint = createOptionsEndpoint('gearbox')
const bodyStyleEndpoint = createOptionsEndpoint('body')
const fuelTypeEndpoint = createOptionsEndpoint('engine_type')
const powerEndpoint = createOptionsEndpoint('engine_power')
const volumeEndpoint = createOptionsEndpoint('engine_volume')

export const CarDbEnpoint: CollectionConfig = {
  slug: 'car-db',
  access: {
    read: () => true, // Adjust permissions as needed
    create: () => true, // Disable creating documents if you only want endpoints
    update: () => true,
    delete: () => true,
  },
  admin: {
    hidden: true, // Hide from admin panel if you don't need UI
  },
  // No fields defined - completely empty collection
  fields: [],
  endpoints:[
    makeEndpoint,
    modelEndpoint,
    yearEndpoint,
    trimEndpoint,
    driveEndpoint,
    transmissionEndpoint,
    bodyStyleEndpoint,
    fuelTypeEndpoint,
    powerEndpoint,
    volumeEndpoint
  ]
}