import type { Field } from "payload"

export const modelField:Field = {
      name: 'model',
      type: 'text',
     
      admin: {
        components: {
     Field:'payload-vehicle-fields/admin/VehicleModelField#default',
      
    },
     // 👇 this is how the component knows where to load from
      custom: {
      optionSource: '/api/car-db/model?make={make}',
    },
    
     condition: (_, siblingData) => Boolean(siblingData?.make),
      },
      
  
  }      


