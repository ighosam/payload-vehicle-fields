import type { Field } from "payload"

 export const powerField:Field = {
  name: 'engine_power',
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
      endpoint: '/api/car-db/engine_power',
      name: 'Engine Power',
      dependsOn: ['make','model','year','trim'],
    },
     // 👇 this is how the component knows where to load from
     condition: (_, siblingData) => Boolean(siblingData?.engine_type)
      
  },
}

