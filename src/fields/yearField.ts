import type { Field } from "payload"

export const yearField:Field = {
      name: 'year',
      type: 'text',
     
      
      admin: {
       
        components: {

     //Field:'payload-vehicle-fields/admin/VehicleYearRouterField#default'
     Field: 'payload-vehicle-fields/admin/VehicleRouterField#default'
      
    },
     // 👇 this is how the component knows where to load from
      custom: {
      //optionSource: '/api/car-db/model?make={make}',
      endpoint: '/api/car-db/year',
      name: 'Year',
      dependsOn: ['make', 'model'],
    },
    
     condition: (_, siblingData) => Boolean(siblingData?.model),
      },
      
  
  }      


