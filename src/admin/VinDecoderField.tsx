'use client'

import React, { useState } from 'react'
import { useField, TextInput } from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'

const VinDecoderField: FieldClientComponent = (props) => {
  const path = props.path as string
  const tField = useField<string>({ path })

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

  type FieldKey = keyof typeof fields

  const vinField = useField<string>({
    path: 'vehicle.vinInput',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const decodeVin = async () => {
    const vin = vinField.value

    if (!vin) {
      setError('Please enter a VIN')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/car-db/vin/${vin}`)

      if (!res.ok) {
        throw new Error('VIN decode failed')
      }

      const data: Partial<Record<FieldKey, string>> = await res.json()

      for (const [key, value] of Object.entries(data) as [FieldKey, string][]) {
        if (value != null) {
          fields[key].setValue(value)
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'VIN decode failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', width:'80%' }}>
      <h3>VIN Decoder</h3>

      <TextInput
        path={tField.path}
        value={tField.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          tField.setValue(e.target.value)
        }
        style={{ width: '80%', marginBottom: 8, padding:'1rem'}}

        
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