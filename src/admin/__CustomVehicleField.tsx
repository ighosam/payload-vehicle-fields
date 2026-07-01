'use client'

import React, { useEffect, useState } from 'react'
import { useField } from '@payloadcms/ui'

type VehicleData = {
  year?: number
  make?: string
  model?: string
  trim?: string
  drivetrain?: string
  engine?: string
  bodyStyle?: string
}

const CustomVehicleField: React.FC = () => {
  const vehicleIdField = useField<number | null>({
    path: 'vehicle.vehicleId',
  })

  const vehicleDataField = useField<VehicleData>({
    path: 'vehicle.vehicleData',
  })

  // Local form state
  const [year, setYear] = useState<number | ''>('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [trim, setTrim] = useState('')
  const [drivetrain, setDrivetrain] = useState('')
  const [engine, setEngine] = useState('')
  const [bodyStyle, setBodyStyle] = useState('')

  // -----------------------------------
  // Load existing values (edit mode)
  // -----------------------------------
  useEffect(() => {
    if (!vehicleDataField.value) return

    const v = vehicleDataField.value

    setYear(v.year ?? '')
    setMake(v.make ?? '')
    setModel(v.model ?? '')
    setTrim(v.trim ?? '')
    setDrivetrain(v.drivetrain ?? '')
    setEngine(v.engine ?? '')
    setBodyStyle(v.bodyStyle ?? '')
  }, [vehicleDataField.value])

  // -----------------------------------
  // Apply manual entry → Payload fields
  // -----------------------------------
  const applyVehicle = () => {
    vehicleDataField.setValue({
      year: year ? Number(year) : undefined,
      make,
      model,
      trim,
      drivetrain,
      engine,
      bodyStyle,
    })

    // custom vehicle = no catalog reference
    vehicleIdField.setValue(null)
  }

  // Optional: auto-apply on blur/change
  // (you can remove button if you prefer)
  const autoApply = () => {
    applyVehicle()
  }

  // -----------------------------------
  // UI
  // -----------------------------------
  return (
    <div style={{ padding: 12, border: '1px solid #ddd' }}>
      <h3>Custom Vehicle</h3>

      <div style={{ display: 'grid', gap: 6 }}>
        <input
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value ? Number(e.target.value) : '')}
          onBlur={autoApply}
        />

        <input
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          onBlur={autoApply}
        />

        <input
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          onBlur={autoApply}
        />

        <input
          placeholder="Trim"
          value={trim}
          onChange={(e) => setTrim(e.target.value)}
          onBlur={autoApply}
        />

        <input
          placeholder="Drivetrain"
          value={drivetrain}
          onChange={(e) => setDrivetrain(e.target.value)}
          onBlur={autoApply}
        />

        <input
          placeholder="Engine"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
          onBlur={autoApply}
        />

        <input
          placeholder="Body Style"
          value={bodyStyle}
          onChange={(e) => setBodyStyle(e.target.value)}
          onBlur={autoApply}
        />
      </div>

      <button
        type="button"
        onClick={applyVehicle}
        style={{ marginTop: 10 }}
      >
        Save Vehicle
      </button>
    </div>
  )
}

export default CustomVehicleField