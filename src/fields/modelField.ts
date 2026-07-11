import type { Field } from "payload"

export const modelField:Field = {
      name: 'model',
      type: 'text',
     
      
      admin: {
       
        components: {
     
       //Field: 'payload-vehicle-fields/admin/VehicleModelRouterField#default'
       Field: 'payload-vehicle-fields/admin/VehicleRouterField#default'
      
    },
     // 👇 this is how the component knows where to load from
      custom: {
      //optionSource: '/api/car-db/model?make={make}',
      endpoint: '/api/car-db/model',
      name: 'Model',
      dependsOn: ['make'],
    },
    
     condition: (_, siblingData) => Boolean(siblingData?.make),
      },
      
  
  }      


