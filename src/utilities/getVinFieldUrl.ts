import type { Field } from 'payload'

export const getVinFieldUrl = (fields: Field[]): unknown => {
  for (const field of fields) {
    if (field.admin?.custom?.url !== undefined) {
      return field.admin.custom.url
    }

    if ('fields' in field && Array.isArray(field.fields)) {
      const result = getVinFieldUrl(field.fields)
      if (result !== undefined) {
        return result
      }
    }
  }

  return undefined
}