// src/queries/decodeVin.ts
import { variableMap } from "../utilities/variableMap.js"

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

export const decodeVin = async (vin: string,url:string) => {

  //const URI = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/`
    const URI = url

  if (!vin || vin.length < 11) {
    throw new Error('Invalid VIN')
  }
/*
  const url = `${URI}${vin}?format=json`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Failed to decode VIN: ${res.status}`)
  }

  const data = (await res.json()) as NHTSAResponse

  const results = data?.Results ?? []

  const getValue = (key: string): string | null =>
    results.find((item) => item.Variable === key)?.Value ?? null
*/
    const decoded: Record<string, string> = {}
try {
      const res = await fetch(`${URI}${vin}?format=json`)

      console.log(`${URI}${vin}?format=json`)

      if (!res.ok) {
        throw new Error('Failed to decode VIN')
      }

      const data: NHTSAResponse = await res.json()
     

      console.log(data.Results)

      for (const result of data.Results) {
        if (!result.Value || result.Value === 'Not Applicable') continue

        const fieldName = variableMap[result.Variable]

        if (!fieldName) continue

        decoded[fieldName] = result.Value
      }

      console.log(decoded)

    } catch (err) {
      console.log("Somthing went wrong ****")
    } 
      return decoded
}