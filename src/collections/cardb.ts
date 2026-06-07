import { CollectionConfig } from 'payload';
import { makeEndpoint } from '../enpoints/makeEndpoint.js';
import { modelEdnpoint } from '../enpoints/modelEndpoint.js';

//This collection is created so as the place the endpoints here
// to separate it from payload endpoints

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
    modelEdnpoint
  ]
}