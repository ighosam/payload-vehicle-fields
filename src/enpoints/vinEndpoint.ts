import { type Endpoint } from 'payload'
import { decodeVin } from '../queries/decodeVin.js'
import { getVinFieldUrl } from '../utilities/getVinFieldUrl.js'


export const vinEndpoint: Endpoint = {
  path: '/vin/:vin',
  method: 'get',
  handler: async (req) => {
    const vin = req.routeParams?.vin

////////////////

   const collection = req.payload.config.collections.find(
  (c) => c.slug === 'listings',
)
if(!collection) return Response.json(
        { error: 'can not find url' },
        { status: 400 },
      )

const vinField_url =  getVinFieldUrl(collection.fields) as string

console.log(vinField_url)

 //////////// 

    if (typeof vin !== 'string') {
      return Response.json(
        { error: 'VIN is required' },
        { status: 400 },
      )
    }

    const result = await decodeVin(vin,vinField_url)

    return Response.json(result)
  },
}