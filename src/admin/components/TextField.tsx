
'use client'

import React from 'react'
import { TextInput, useField } from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'

const TextField: FieldClientComponent = (props) => {
 const path = props.path as string

  // ALWAYS call hooks first
  //const { value, setValue } = useField<string>({path, })
   const tField = useField<string>({path})

  return (
    <TextInput
      path={tField.path}
      value={tField.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        tField.setValue(e.target.value)
      }}
    />
  )
}

export default TextField