'use client'

import React, { useState } from 'react'
import { useField } from '@payloadcms/ui'

type DecodedVehicle = {
  vehicleId?: number | null
  year?: number
  make?: string
  model?: string
  trim?: string
  drivetrain?: string
  engine?: string
}

const VinDecoderField: React.FC = () => {
  const vinField = useField<string>({
    path: 'vehicle.vin',
  })

  const vehicleIdField = useField<number | null>({
    path: 'vehicle.vehicleId',
  })

  const vehicleDataField = useField<any>({
    path: 'vehicle.vehicleData',
  })

  const [loading, setLoading] = useState(false)
  const [decoded, setDecoded] = useState<DecodedVehicle | null>(null)
  const [error, setError] = useState<string | null>(null)

  // -----------------------------
  // Decode VIN
  // -----------------------------
  const decodeVin = async () => {
    const vin = vinField.value

    if (!vin) {
      setError('Please enter a VIN')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/vehicle/vin/${vin}`)

      if (!res.ok) {
        throw new Error('Failed to decode VIN')
      }

      const data: DecodedVehicle = await res.json()

      setDecoded(data)
    } catch (err: any) {
      setError(err.message || 'VIN decode failed')
    } finally {
      setLoading(false)
    }
  }

  // -----------------------------
  // Apply decoded vehicle → Payload fields
  // -----------------------------
  const applyVehicle = () => {
    if (!decoded) return

    vehicleDataField.setValue({
      year: decoded.year ?? null,
      make: decoded.make ?? '',
      model: decoded.model ?? '',
      trim: decoded.trim ?? '',
      drivetrain: decoded.drivetrain ?? '',
      engine: decoded.engine ?? '',
    })

    // optional catalog match
    vehicleIdField.setValue(decoded.vehicleId ?? null)
  }

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd' }}>
      <h3>VIN Decoder</h3>

      {/* VIN input is usually already a Payload field,
          but included here for clarity */}
      <input
        type="text"
        placeholder="Enter VIN"
        value={vinField.value || ''}
        onChange={(e) => vinField.setValue(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />

      <button
        type="button"
        onClick={decodeVin}
        disabled={loading}
      >
        {loading ? 'Decoding...' : 'Decode VIN'}
      </button>

      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}

      {/* ----------------------------- */}
      {/* Preview decoded result */}
      {/* ----------------------------- */}
      {decoded && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            background: '#f7f7f7',
          }}
        >
          <h4>Decoded Vehicle</h4>

          <p>Year: {decoded.year}</p>
          <p>Make: {decoded.make}</p>
          <p>Model: {decoded.model}</p>
          <p>Trim: {decoded.trim}</p>
          <p>Engine: {decoded.engine}</p>
          <p>Drivetrain: {decoded.drivetrain}</p>

          <button
            type="button"
            onClick={applyVehicle}
            style={{ marginTop: 10 }}
          >
            Use This Vehicle
          </button>
        </div>
      )}
    </div>
  )
}

export default VinDecoderField