'use client'
/*
import React, { useEffect, useState } from 'react'
import { SelectInput, useFormFields} from '@payloadcms/ui'
import { FieldClientComponent } from 'payload'

type Option = { label: string; value: string }

const ApiSelectField:FieldClientComponent = (props) => {
  const { path } = props
  const [options, setOptions] = useState<Option[]>([])
  const fields = useFormFields(([f]) => f)

  useEffect(() => {
    fetch('/api/resolve-options')
      .then(res => res.json())
      .then((data: string[]) =>
        setOptions(data.map(v => ({ label: v, value: v })))
      )
  }, [])

  return (
   
    <SelectInput
      {...props}
      options={options}
    />
  )
}
export default ApiSelectField

*/