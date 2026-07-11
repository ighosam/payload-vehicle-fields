import type { Field } from "payload"

 export const fuelField:Field = {
  name: 'engine_type',
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
      endpoint: '/api/car-db/engine_type',
      name: 'Fuel Type',
      dependsOn: ['make','model','year','trim'],
    },
     // 👇 this is how the component knows where to load from
     condition: (_, siblingData) => Boolean(siblingData?.body)
      
  },
}

