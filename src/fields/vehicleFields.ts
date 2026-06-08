import type { GroupField } from 'payload'
import { makeField } from './makeField.js'
import { modelField } from './modelField.js'

export const vehicleFields: GroupField = {
  name: 'vehicle',
  label: 'Vehicle Information',
  type: 'group',
  fields: [
    makeField,
    modelField,
    // yearField,
  ],
}