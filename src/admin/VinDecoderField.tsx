'use client'

import React, { useState } from 'react'
import { useField, TextInput } from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'

type Result = {
  Value: string
  ValueId: string
  Variable: string
  VariableId: number|string
}

type VinResponse = {
  Results: Result[]
}

const VinDecoderField: FieldClientComponent = (props) => {
  const path = props.path as string
  const tField = useField<string>({ path })

  const URI = props.field.admin?.custom?.url ?? ''

  // Payload fields
  const fields = {
    make: useField<string>({ path: 'vehicle.vehicleData.make' }),
    model: useField<string>({ path: 'vehicle.vehicleData.model' }),
    year: useField<string>({ path: 'vehicle.vehicleData.year' }),
    trim: useField<string>({ path: 'vehicle.vehicleData.trim' }),
    drive: useField<string>({ path: 'vehicle.vehicleData.drive' }),
    gearbox: useField<string>({ path: 'vehicle.vehicleData.gearbox' }),
    engine: useField<string>({ path: 'vehicle.vehicleData.engine' }),
    body: useField<string>({ path: 'vehicle.vehicleData.body' }),
    engine_type: useField<string>({ path: 'vehicle.vehicleData.engine_type' }),
    engine_power: useField<string>({ path: 'vehicle.vehicleData.engine_power' }),
    engine_volume: useField<string>({ path: 'vehicle.vehicleData.engine_volume' }),
  }

  const vinField = useField<string>({
    path: 'vehicle.vinInput',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Maps NHTSA variable names -> Payload field names
  const variableMap: Record<string, keyof typeof fields> = {
    Make: 'make',
    Model: 'model',
    'Model Year': 'year',
    Trim: 'trim',
    'Drive Type': 'drive',
    'Transmission Style': 'gearbox',
    'Engine Model': 'engine',
    'Body Class': 'body',
    'Fuel Type - Primary': 'engine_type',
    'Engine Brake (hp) From': 'engine_power',
    'Displacement (CC)' : 'engine_volume',
  }

  const decodeVin = async () => {
    const vin = vinField.value

    if (!vin) {
      setError('Please enter a VIN')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${URI}${vin}?format=json`)

      console.log(`${URI}${vin}?format=json`)

      if (!res.ok) {
        throw new Error('Failed to decode VIN')
      }

      const data: VinResponse = await res.json()
      const decoded: Record<string, string> = {}

      console.log(data.Results)

      for (const result of data.Results) {
        if (!result.Value || result.Value === 'Not Applicable') continue

        const fieldName = variableMap[result.Variable]

        if (!fieldName) continue

        fields[fieldName].setValue(result.Value)
        decoded[fieldName] = result.Value
      }

      console.log(decoded)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'VIN decode failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd' }}>
      <h3>VIN Decoder</h3>

      <TextInput
        path={tField.path}
        value={tField.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          tField.setValue(e.target.value)
        }
        style={{ width: '100%', marginBottom: 8 }}
      />

      <button
        type="button"
        onClick={decodeVin}
        disabled={loading}
      >
        {loading ? 'Decoding...' : 'Decode VIN'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default VinDecoderField