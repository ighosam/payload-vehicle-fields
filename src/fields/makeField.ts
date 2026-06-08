import type { Field } from "payload"

 export const makeField:Field = {
  name: 'make',
  type: 'text',
 
 
  // IMPORTANT: options MUST be an array at init
//options: await getMakes(),

  admin: {
    components:{

    Field: 'payload-vehicle-fields/admin/VehicleMakeField#default'
    
    },
       custom: {
      //optionSource: '/api/car-db/make',
    },
     // 👇 this is how the component knows where to load from
    
  },
}

