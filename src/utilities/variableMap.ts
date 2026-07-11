import { VehicleField } from "../type.js"

// Maps NHTSA variable names -> Payload field names
  export const variableMap:Record<string, VehicleField> = {
    Make: 'make',
    Model: 'model',
    'Model Year': 'year',
    Trim: 'trim',
    'Drive Type': 'drive',
    'Transmission Style': 'gearbox',
    'Engine Model': 'engine',
    'Body Class': 'body',
    'Fuel Type - Primary': 'engine_type',
    'Engine Brake (hp) From': 'engine_power',
    'Displacement (CC)' : 'engine_volume',
  } as const