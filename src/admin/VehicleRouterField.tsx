'use client'


import { useField } from '@payloadcms/ui'
import type { FieldClientComponent} from 'payload'
import TextField from "./components/TextField.js"
import DbField from './components/DbField.js'

const VehicleRouterField:FieldClientComponent = (props) => {

  const source = useField({ path: 'vehicle.vehicleSource' })

  switch (source.value) {
    case 'catalog':
    return <DbField {...props} />  
    case 'cusom':
      return <TextField {...props} />
    default:
      return null
  }
}
export default VehicleRouterField