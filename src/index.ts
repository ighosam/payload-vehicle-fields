import type { Plugin, Config } from 'payload'
import { PluginOptions } from './type.js'
import { makeField } from './fields/makeField.js'
import { modelField } from './fields/modelField.js'
import { yearField } from './fields/yearField.js'
import { CarDbEnpoint } from './collections/cardb.js'

export const payloadVehicleFieldsPlugin =
  (options: PluginOptions):Plugin =>
  (incomingConfig: Config): Config => ({
      ...incomingConfig,
      collections: [
        ...(incomingConfig.collections || []).map((collection) => {
          console.log(collection.slug)
          if (collection.slug !== options.slug) return collection

          return {
            ...collection,
            fields: [
              ...(collection.fields || []),
              makeField,
            ],
          }
        }),
        CarDbEnpoint,
      ],
    
  })