'use client'
/*
import { useEffect, useState } from 'react'
import { SelectInput, useFormFields } from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'

type Option = { label: string; value: string }

const VehicleModelField: FieldClientComponent = (props) => {
  const [options, setOptions] = useState<Option[]>([])
  const fields = useFormFields(([f]) => f)

  // Watch make field
  const make = fields.make?.value

  useEffect(() => {
    if (!make) {
      setOptions([])
      return
    }

    fetch(`/api/car-db/model?make=${make}`)
      .then((res) => res.json())
      .then((data: string[]) =>
        setOptions(data.map((v) => ({ label: v, value: v })))
      )
  }, [make])

  return <SelectInput {...props} options={options} />
}

export default VehicleModelField
*/