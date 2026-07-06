// fields/vehicleGroup.ts

import type { Field } from 'payload'
import { makeField } from './makeField.js'
import { modelField } from './modelField.js'
import { vehicleSource } from './vehicleSource.js'
import { yearField } from './yearField.js'
import { trimField } from './trimField.js'
import { driveTrain } from './driveTrain.js'
import { transmission } from './transmission.js'
import { bodyField } from './bodyField.js'
import { fuelField } from './fuelField.js'
import { powerField } from './powerField.js'
import { volumeField } from './volumeField.js'
import { vinField } from './vinField.js'

export const vehicleGroup: Field = {
  name: 'vehicle',
  type: 'group',
  fields: [
    vehicleSource,
     vinField,

    {
     name: 'vehicleData',
     type: 'group',
     fields:[
         makeField,
         modelField,
         yearField,
         trimField,
         driveTrain,
         transmission,
         bodyField,
         fuelField,
         powerField,
         volumeField
     ]
    },
    /*
    {
      name: 'vehicleUi',
      type: 'ui',
      admin: {
        components: {
          Field: '/path/to/VehicleField',
        },
      },
    },
    */
  
  ],
}