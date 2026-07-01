'use client'

import { useEffect, useState } from 'react'
import { SelectInput, useField,useFormFields } from '@payloadcms/ui'
import type { FieldClientComponent } from 'payload'


type Option = {
  label: string
  value: string
}

const DbField: FieldClientComponent = (props) => {
  const [options, setOptions] = useState<Option[]>([])

  const path = props.path as string

  const field = useField<string>({ path })

  const make = useField({ path: 'vehicle.vehicleData.make' }).value
  const model = useField({ path: 'vehicle.vehicleData.model' }).value
  const year = useField({ path: 'vehicle.vehicleData.year' }).value
  const trim = useField({ path: 'vehicle.vehicleData.trim' }).value
  const drive = useField({ path: 'vehicle.vehicleData.drive' }).value
  const gearbox = useField({path: 'vehicle.vehicleData.gearbox'}).value
  const engine = useField({path:'vehicle.vehicleData.engine'}).value
  const body =useField({path:'vehicle.vehicleData.body'}).value
  const engine_type = useField({path:'vehicle.vehicleData.engine_type'}).value
  const engine_power = useField({path: 'vehicle.vehicleData.engine_power'}).value
  const engine_volume = useField({path: 'vehicle.vehicleData.engine_volume'}).value
  
   //const fields = useFormFields(([fields])=>fields)

 
  const endpoint = props.field.admin?.custom?.endpoint
  const value = {make,model,year,trim,drive,gearbox,engine,body,engine_type,engine_power,engine_volume}

 type stringMap = 
                  'make'|
                  'model'|
                  'trim'|
                  'year'|
                  'drive'|
                  'gearbox'|
                  'engine'|
                  'body'|
                  'engine_type'|
                  'engine_power'|
                  'engine_volume'



  useEffect(() => {
    const controller = new AbortController()


const loadOptions = async () => {

  let filters = {}

 
/*
switch (path) {
  case 'vehicle.vehicleData.make':
    filters = {}
    break

  case 'vehicle.vehicleData.model':
    filters = { make }
    break

  case 'vehicle.vehicleData.year':
    filters = { make, model }
    break

  case 'vehicle.vehicleData.trim':
    filters = { make, model, year }
    break

  case 'vehicle.vehicleData.drive':
    filters = { make, model, year, trim }
    break

  case 'vehicle.vehicleData.gearbox':
   filters = { make, model, year, trim}
}

*/
///////
  const dependsOn = props.field.admin?.custom?.dependsOn

  console.log('the endpoint is: ',endpoint)

  filters = Object.fromEntries(
  dependsOn.map((res:stringMap) =>[res,value[res]])
 )
  
//////

//console.log(JSON.stringify(filters,null,2))

  const params = new URLSearchParams()

  Object.entries(filters).forEach(([key, value]) => {
    if (value != null && value !== '') {
      params.append(key, String(value))
    }
  })
  

 

// Not sure if i still need the if condition below
/*
  if (!params.toString() && endpoint !== '/api/car-db/make') {
    setOptions([])
    return
  }
*/
  try {
    console.log('Params:', params.toString())

    const res = await fetch(`${endpoint}?${params}`, {
      signal: controller.signal,
    })

    const data: Option[] = await res.json()

    setOptions(data)

    if (
      field.value &&
      !data.some(option => option.value === field.value)
    ) {
      field.setValue('')
    }
  } catch (err) {
    if ((err as Error).name !== 'AbortError') {
      console.error(err)
    }
  }
}

    loadOptions()

    return () => controller.abort()
  }, [
    make,
    model,
    year,
    trim,
    drive,
    endpoint,
    field,
  ])

  return (
    <SelectInput
      label={props.field.admin?.custom?.name}
      path={field.path}
      name={field.path}
      value={field.value}
      options={options}
      onChange={(option) =>
        field.setValue((option as Option).value)
      }
    />
  )
}

export default DbField