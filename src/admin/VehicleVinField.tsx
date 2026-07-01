'use client'

import { TextInput, useField } from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'
import { ChangeEvent, useEffect } from 'react'

const VehicleVinField: FieldClientComponent = (props) => {
  const path = props.path as string

  const vinField = useField<string>({ path:'vin' })

  const makeField = useField<string>({ path: 'make' })
  const modelField = useField<string>({ path: 'model' })
  const yearField = useField<number>({ path: 'year' })
  const trimField = useField<string>({ path: 'trim' })

  useEffect(() => {
    const vin = vinField.value

    if (!vin || vin.length !== 17) return

    const decodeVin = async () => {
      try {
        const response = await fetch(`/api/vin/${vin}`)

        if (!response.ok) {
          throw new Error('VIN lookup failed')
        }

        const vehicle = await response.json()

        makeField.setValue(vehicle.make ?? '')
        modelField.setValue(vehicle.model ?? '')
        yearField.setValue(vehicle.year ? Number(vehicle.year) : undefined)
        trimField.setValue(vehicle.trim ?? '')
      } catch (error) {
        console.error('VIN decode error:', error)
      }
    }

    decodeVin()
  }, [vinField.value])

  return (
    <TextInput
  path={vinField.path}
  value={vinField.value || ''}
  onChange={(e: ChangeEvent<HTMLInputElement>) =>
    vinField.setValue(e.target.value)
  }
/>
  )
}

export default VehicleVinField

  