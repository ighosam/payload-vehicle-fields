import { getDB } from '../getDb.js'
// queries/getModels.ts
export async function getModelsByMake(
  make: string,
  year?: number
): Promise<{ label: string; value: string }[]> {
  const db = await getDB()
  const rows = await db.all<{ model: string }[]>(
    `SELECT DISTINCT model FROM cardb WHERE make = ? ${year ? 'AND year = ?' : ''} ORDER BY model`,
    year ? [make, year] : [make]
  )
  return rows.map((r) => ({ label: r.model, value: r.model }))
}

