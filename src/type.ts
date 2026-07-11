export type PluginOptions = {
  slug: string // collection slug to inject fields
  dataSource?:{
    vinDecoder:string,
    database:string
  }
}
// vehicleFields.ts
export type VehicleField =
  | 'make'
  | 'model'
  | 'year'
  | 'trim'
  | 'drive'
  | 'gearbox'
  | 'engine'
  | 'body'
  | 'engine_type'
  | 'engine_power'
  | 'engine_volume'