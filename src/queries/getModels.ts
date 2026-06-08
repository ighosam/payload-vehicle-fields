import { getDB } from '../getDb.js'
// queries/getModels.ts
export async function getModelsByMake(
  make: string
): Promise<{ label: string; value: string }[]> {
  const db = await getDB()


  console.log("Make from the query point is: ",make)
  const rows = await db.all<{ model: string }[]>(
    `SELECT DISTINCT model
     FROM cardb
     WHERE make = :make
     ORDER BY model`,
    {':make':make}
  )
  return rows.map((r) => ({
    label: r.model,
    value: r.model,
  }))
}

