'use client'

import React, { useEffect, useState } from 'react'
import { SelectInput, useFormFields} from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload';

type Option = { label: string; value: string }

const ApiSelectField:FieldClientComponent = (props) => {
  const { path,value} = props
  ////////////////////////////
  const [options, setOptions] = useState<Option[]>([])
  

//const fields = useFormFields(([fields]) => fields)
//console.log("AM I REGISTERED: ",fields)
  // ✅ TS-safe form fields access
   const fields = useFormFields(([f]) => f)
   
  console.log("AM I REGISTERED: ",fields)


  useEffect(() => {
    fetch(`/api/car-db/make`)
      .then(res => res.json())
      .then((data: string[]) =>
        setOptions(data.map(v => ({ label: v, value: v })))
      )

  }, [])
 
  /*
    const safeOptions = currentValue
    ? [{ label: currentValue, value: currentValue }, ...options]
        .filter((v, i, a) => a.findIndex(x => x.value === v.value) === i)
    : options
  */
 
    
  return (
     // @ts-expect-error Payload injects name/path at runtime
    <SelectInput {...props} options={options}/>
 
  )
}
export default ApiSelectField
