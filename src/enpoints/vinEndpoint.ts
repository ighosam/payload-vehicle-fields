import { type Endpoint } from 'payload'
import { decodeVin } from '../queries/decodeVin.js'

export const vinEndpoint: Endpoint = {
  path: '/vin/:vin',
  method: 'get',
  handler: async (req) => {
    const vin = req.routeParams?.vin

    if (typeof vin !== 'string') {
      return Response.json(
        { error: 'VIN is required' },
        { status: 400 },
      )
    }

    const result = await decodeVin(vin)

    return Response.json(result)
  },
}