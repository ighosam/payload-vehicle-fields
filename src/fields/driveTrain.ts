import type { Field } from "payload"

export const driveTrain:Field = {
      name: 'drive',
      type: 'text',
     
      
      admin: {
       
        components: {

     //Field:'payload-vehicle-fields/admin/VehicleTrimRouterField#default'
     Field: 'payload-vehicle-fields/admin/VehicleRouterField#default'
      
    },
     // 👇 this is how the component knows where to load from
      custom: {
      //optionSource: '/api/car-db/model?make={make}',
      endpoint: '/api/car-db/drive',
      name: 'DriveType',
      dependsOn: ['make', 'model', 'year', 'trim'],
    },
    
     condition: (_, siblingData) => Boolean(siblingData?.trim),
      },
      
  
  }      


