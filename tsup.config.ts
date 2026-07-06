import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    
    'admin/VehicleRouterField': 'src/admin/VehicleRouterField.tsx',
    'admin/VinDecoderField': 'src/admin/VinDecoderField.tsx'
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