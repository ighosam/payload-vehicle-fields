 import type { Field } from "payload"
 
 export const vinField:Field = 
 
 {
    name: 'vinInput',
    type: 'text',
    admin:{
      
      condition: (_, siblingData) => Boolean(siblingData?.vehicleSource==='custom'),

    components:{
    //Field: 'payload-vehicle-fields/admin/VehicleMakeRouterField#default'
    Field: 'payload-vehicle-fields/admin/VinDecoderField#default'
    
    },
       custom: {
      endpoint: '/api/car-db/vinInput',
      url: `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/`,
      name: 'vinInput',
      dependsOn: [],
    },

    },
    
   }