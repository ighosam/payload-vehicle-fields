// src/queries/decodeVin.ts

export type DecodedVinResult = {
  vin: string
  make: string | null
  model: string | null
  year: string | null
  manufacturer: string | null
  vehicleType: string | null
  bodyClass: string | null
  engine: string | null
  raw: unknown[]
}

type NHTSAResponse = {
  Results: {
    Variable: string
    Value: string | null
  }[]
}

export const decodeVin = async (vin: string,uri:string): Promise<DecodedVinResult> => {
  if (!vin || vin.length < 11) {
    throw new Error('Invalid VIN')
  }

  const url = `${uri}${vin}?format=json`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Failed to decode VIN: ${res.status}`)
  }

  const data = (await res.json()) as NHTSAResponse

  const results = data?.Results ?? []

  const getValue = (key: string): string | null =>
    results.find((item) => item.Variable === key)?.Value ?? null

  return {
    vin,

    make: getValue('Make'),
    model: getValue('Model'),
    year: getValue('Model Year'),

    manufacturer: getValue('Manufacturer Name'),
    vehicleType: getValue('Vehicle Type'),
    bodyClass: getValue('Body Class'),
    engine: getValue('Engine Number of Cylinders'),

    raw: results,
  }
}