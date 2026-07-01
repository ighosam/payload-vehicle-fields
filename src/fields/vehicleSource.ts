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
        label: 'Custom Vehicle',
        value: 'cusom'
    },
    {
       label: 'Vin Decoder', 
       value: 'vin-decoder'
    }
  ],
  defaultValue: 'catalog'
}

