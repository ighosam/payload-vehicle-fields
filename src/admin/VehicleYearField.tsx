'use client'
/*
import { useEffect, useState } from 'react'
import { SelectInput, useFormFields } from '@payloadcms/ui'
import type { FieldClientComponent, SelectField } from 'payload'

type Option = { label: string; value: string }

type VehicleYearFieldProps = SelectField & {
  path: string
}

const VehicleYearField: FieldClientComponent = (props) => {
  const [options, setOptions] = useState<Option[]>([])
  const fields = useFormFields(([f]) => f)
const {path}=props
  const make = fields.make?.value
  const model = fields.model?.value

  useEffect(() => {
    if (!make || !model) return

    fetch(`/api/car-db/year?make=${make}&model=${model}`)
      .then(res => res.json())
      .then((data: string[]) =>
        setOptions(data.map(v => ({ label: v, value: v })))
      )
  }, [make, model])
  
   
  return <SelectInput {...props} options={options} />
}

export default VehicleYearField
*/