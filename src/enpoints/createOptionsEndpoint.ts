import { type Endpoint } from 'payload'
import { getOptions } from '../queries/getOptions.js'

interface VehicleFilters {
  make?: string
  model?: string
  year?: number
  trim?: string
  drive?: string
  gearbox?: string
  body?: string,
  engine_type?: string
  engine_power?: string
  engine_volume?: string

}

export const createOptionsEndpoint = (field: keyof VehicleFilters): Endpoint => ({
  path: `/${field}`,
  method: 'get',
  handler: async (req) => {
    const filters: VehicleFilters = {
      make: req.query?.make as string | undefined,
      model: req.query?.model as string | undefined,
      year: req.query?.year
        ? Number(req.query.year)
        : undefined,
      trim: req.query?.trim as string | undefined,
      drive: req.query?.drive as string | undefined,
      gearbox: req.query?.gearbox as string | undefined,
      body: req.query?.body as string | undefined,
      engine_type: req.query?.engine_type as string | undefined
    }

    const rows = await getOptions(field, filters)

    return Response.json(rows)
  },
})