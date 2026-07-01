import type { Field } from "payload"

export const trimField:Field = {
      name: 'trim',
      type: 'text',
     
      
      admin: {
        components: {

     //Field:'payload-vehicle-fields/admin/VehicleTrimRouterField#default'
     Field: 'payload-vehicle-fields/admin/VehicleRouterField#default'
      
    },
     // 👇 this is how the component knows where to load from
      custom: {
      //optionSource: '/api/car-db/model?make={make}',
      endpoint: '/api/car-db/trim',
      name: 'Trim',
      dependsOn: ['make', 'model', 'year'],
    },
    
     condition: (_, siblingData) => Boolean(siblingData?.year),
      },
      
  
  }      


