import type { Field } from "payload"

export const transmission:Field = {
      name: 'gearbox',
      type: 'text',
     
      
      admin: {
        components: {

     //Field:'payload-vehicle-fields/admin/VehicleTrimRouterField#default'
     Field: 'payload-vehicle-fields/admin/VehicleRouterField#default'
      
    },
     // 👇 this is how the component knows where to load from
      custom: {
      //optionSource: '/api/car-db/model?make={make}',
      endpoint: '/api/car-db/gearbox',
      name: 'Transmission',
      dependsOn: ['make', 'model', 'year', 'trim'],
    },
    
     condition: (_, siblingData) => Boolean(siblingData?.drive),
      },
      
  
  }      


