'use client'

import { useEffect, useState } from 'react'
import { SelectInput,useField, useFormFields} from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'
import { capitalize } from '../utilities/capitalize.js'

type Option = { label: string; value: string }

const VehicleModelField: FieldClientComponent = (props) => {
  const [options, setOptions] = useState<Option[]>([])
   const path = props.path as string

   const field = useField<string>({path})

 const make = useFormFields(([fields]) => fields.make?.value)
 //const model = useFormFields(([fields]) => fields.model?.value)



  useEffect(() => {
    
    if (!make) {
      setOptions([])
      return
    }

    fetch(`/api/car-db/model?make=${make}`)
      .then((res) => res.json())
      .then((data: Option[]) =>{
        //setOptions(data.map((v) => ({ label: v, value: v })))
      setOptions(data)

      if (
           field.value &&
          !data.some((o) => o.value === field.value)
        ) {
    field.setValue('')
  }

      }
      )
  }, [make])


//const myModel = 'Model'

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

export default VehicleModelField
