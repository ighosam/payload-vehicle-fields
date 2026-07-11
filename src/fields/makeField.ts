import type { Field } from "payload"

 export const makeField:Field = {
  name: 'make',
  type: 'text',
 
 
  // IMPORTANT: options MUST be an array at init
//options: await getMakes(),

  admin: {
    
    components:{

    
    //Field: 'payload-vehicle-fields/admin/VehicleMakeRouterField#default'
    Field: 'payload-vehicle-fields/admin/VehicleRouterField#default'
    
    },
       custom: {
      //optionSource: '/api/car-db/make',
      endpoint: '/api/car-db/make',
      name: 'Make',
      dependsOn: [],
    },
     // 👇 this is how the component knows where to load from
    
  },
}

