'use client'

import { SelectInput, useField,Options } from '@payloadcms/ui'
import type { FieldClientComponent} from 'payload'
import { fieldIsPresentationalOnly } from 'payload/shared'
import { useEffect, useState } from 'react'

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
