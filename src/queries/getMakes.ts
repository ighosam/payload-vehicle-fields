import { getDB } from '../getDb.js'

export const getMakes = async (): Promise<{ label: string; value: string }[]> =>{
  const db = await getDB()
  const rows = await db.all<{ make: string }[]>(
    `SELECT DISTINCT make 
    FROM cardb 
    ORDER BY make`
  )
  console.log("make query")
  return rows.map((r) => ({ 
    label: r.make, 
    value: r.make 
  }))
}

