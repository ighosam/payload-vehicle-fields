
'use client'

import React from 'react'
import { TextInput, useField } from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'

const TextField: FieldClientComponent = (props) => {
 const path = props.path as string

   const tField = useField<string>({path})

   //e('Acura')
 //if(path === 'vehicle.vehicleData.make') make.setValue('Acura')

  return (
    <TextInput
      label={props.field.admin?.custom?.name}
      path={tField.path}
      value={tField.value}
      //readOnly= {isReadOnly}
      placeholder = {`Enter ${props.field.admin?.custom?.name}`}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        tField.setValue(e.target.value)
      }}
    />
  )
}

export default TextField