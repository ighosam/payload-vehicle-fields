# Payload Vehicle Fields
Author -- Sam Ighodaro

This plugin add vehicle fields to listings to make it vehicle listings
for both the admin section and for front end consuming app.

## Features Provided By This Plugin
- Vehicle Make field
- Vehicle Model field
- Vehicle Trim field
- vehicle year field
- vehicle body style field

External database used: SQLITE
sqlite database file containing vehicle specification data downloaded from the internet and saved to the plugin directory.

The package manager i used for the plugin is pnpm, you can use npm or yarn

Also typescript is used when building this plugin.


## Step Followed To Create This Plugin

- create the plugin folder -- ```mkdir payload-vehicle-field```.
change directory into the plugin folder.

##              package.json file

- create the package.json file -- `pnpm init`
add this lines to package.json:
 "type": "module",  //
  "main": "dist/index.js", //plugin entry point when the package is built
  "types": "dist/index.d.ts", //typscript inside the built package

  then add the export section:

"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js"
  },
  "./admin/VehicleMakeField": {
    "types": "./dist/admin/VehicleMakeField.d.ts",
    "import": "./dist/admin/VehicleMakeField.js"
  }
},
these are the entry point to the plugin after the plugin is built
VehicleMakeField.js is built inside admin directory, the original extension prior to being built is .tsx

Also add the files line:

"files": ["dist","cardb.db"], this is very importand, files is what get sent after built. you noticed the cardb.db (database), if it not added, the consuming app will not have access to the database.

## Dependencies:
  - dependency: whatever in this section is requested to be installed by the consuming app
 - devDependency: applications here are only needed for the plugin development
 - peerDependency: applications are already expected to also be in the consuming app. so be careful to make sudre that the application version matches that of the dependencies in the consuming app.

 ##                 tsconfig.json file

 - create tsconfig.json file using this command `pnpm exec tsc --init`
 - make sure the following lines are in your tsconfig.json file:
  "target": "ES2022",
    "module": "nodenext",  
    "moduleResolution": "nodenext",

    "outDir": "dist",
    "rootDir": "src",
      "include": ["src"]


    with `module: noedenext` requires that import file wlll requre .js extension


    # Some difficuties enncountered.

    - writing admin ui component to use to modify the reqular input file

    all admin components were placed in admin folder inside the plugin.

    I will leave a working example of the amin ui componet here: 

    ```'use client'

import { SelectInput, useField,Options } from '@payloadcms/ui'
import type { FieldClientComponent} from 'payload'
import { fieldIsPresentationalOnly } from 'payload/shared'
import { useEffect, useState } from 'react'

type Option = { label: string; value: string }


const VehicleMakeField: FieldClientComponent = (props) => {
 
  const [options, setOptions] = useState<Option[]>([])

  const path = props.path as string

    const field = useField<string>({path})

  useEffect(() => {
    fetch('/api/car-db/make')
      .then((res) => res.json())
      .then((data) =>
        setOptions(data)
      )
  }, [])

  return <SelectInput
  path={field.path}
  name={field.path}
  value={field.value}
  options={options}
  onChange={(option) => {
  field.setValue((option as { value: string }).value) // cast option
}}
   />
  }
   


export default VehicleMakeField ```

How to use this plugin:

Create a payload cms or from any existing payload cms app root directory
givie this command: 
```pnpm add file:../payload-vehicle-field```

where ../ is the directory path to the plugin.

# tsup.config.ts

Though it is optional to have this file, but it is very useful
for organization.
 
 Below is my tsup.config.ts:

```import { defineConfig } from 'tsup'

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
})```

If you decides to us tsup.config.ts, don't forget to update your script section in your package.json section:

```"build": "tsup"```

