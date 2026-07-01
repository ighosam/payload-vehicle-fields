import { getDB } from '../getDb.js'
import { buildWhereClause } from '../utilities/buildWhereClause.js';

interface VehicleFilters {
  make?: string
  model?: string
  year?: number
  trim?: string
  drive?: string
  gearbox?:string
  body?:string
  engine_type?: string
  engine_power?: string
  engine_volume?:string
}

export async function getOptions(
  name:string,filters: VehicleFilters
): Promise<{ label: string; value: string }[]> {

  const db = await getDB()

  const { where, params } = buildWhereClause(filters)


const rows = await db.all(
  `
    SELECT DISTINCT ${name}
    FROM cardb
    ${where}
    ORDER BY ${name} 
  `,
  params,
)

  return rows.map((r) => ({
    label: String(r[name]),
    value: String(r[name]),
  }))
}
