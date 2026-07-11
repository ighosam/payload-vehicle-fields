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

const halfWidth = (field: Field): Field => ({
  ...field,
  admin: {
    ...(field as any).admin,
    width: '100%',
    style: {
          width: '100%',
        },
  },
})

export const vehicleGroup: Field = {
  name: 'vehicle',
  type: 'group',
  fields: [
    vehicleSource,
    vinField,

    {
      name: 'vehicleData',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            halfWidth(makeField),
            halfWidth(modelField),
          ],
        },

        {
          type: 'row',
          fields: [
            halfWidth(yearField),
            halfWidth(trimField),
          ],
        },

        {
          type: 'row',
          fields: [
            halfWidth(driveTrain),
            halfWidth(transmission),
          ],
        },

        {
          type: 'row',
          fields: [
            halfWidth(bodyField),
            halfWidth(fuelField),
          ],
        },

        {
          type: 'row',
          fields: [
            halfWidth(powerField),
            halfWidth(volumeField),
          ],
        },
      ],
    },
  ],
}