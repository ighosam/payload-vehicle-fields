import type { Field } from "payload"

 export const volumeField:Field = {
  name: 'engine_volume',
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
      endpoint: '/api/car-db/engine_volume',
      name: 'Engine Volume',
      dependsOn: ['make','model','year','trim'],
    },
     // 👇 this is how the component knows where to load from
     condition: (_, siblingData) => Boolean(siblingData?.engine_power)
      
  },
}

