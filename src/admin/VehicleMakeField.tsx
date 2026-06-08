'use client'

import { SelectInput, useField } from '@payloadcms/ui'
import type { FieldClientComponent} from 'payload'
import { useEffect, useState } from 'react'
import { capitalize } from '../utilities/capitalize.js'

type Option = { label: string; value: string }


const VehicleMakeField: FieldClientComponent = (props) => {
 
  const [options, setOptions] = useState<Option[]>([])

  const path = props.path as string

    const field = useField<string>({path})

  useEffect(() => {
    fetch('/api/car-db/make')
      .then((res) => res.json())
      .then((data) =>
        setOptions(data)
      )
  }, [])

  return <SelectInput
  label={capitalize(field.path)}
  path={field.path}
  name={field.path}
  value={field.value}
  options={options}
  onChange={(option) => {
  field.setValue((option as { value: string }).value) // cast option
}}
   />
  }
   


export default VehicleMakeField
