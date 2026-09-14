import { getDefaultValue, type Field } from "payload"

 export const vehicleSource:Field = {
  name: 'vehicleSource',
  type: 'radio',
  options:[
    {
        label: 'Vehicle Database',
        value: 'catalog'
    },
    {
        label: 'Custom or Vin-Decode',
        value: 'custom'
    },
    /*
    {
      label: 'Vin Decoder', 
       value: 'vin-decoder'
    }
     */
  ],
  defaultValue: 'custom'
}

