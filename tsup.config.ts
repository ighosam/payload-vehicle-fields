import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'admin/VehicleMakeField': 'src/admin/VehicleMakeField.tsx',
    'admin/VehicleModelField': 'src/admin/VehicleModelField.tsx',
    'admin/VehicleYearField': 'src/admin/VehicleYearField.tsx',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
    external: [
    'payload',
    '@payloadcms/ui',
    'react',
    'react-dom',
  ],
})