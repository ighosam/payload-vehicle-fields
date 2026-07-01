
//type FilterValue = string | number | null | undefined

export const buildWhereClause = <T extends object>(
  filters: T,
) => {
  const conditions: string[] = []
  const params: Record<string, string | number> = {}

  for (const [key, value] of Object.entries(filters)) {
  
    if (
      value != null &&
      value !== '' &&
      (typeof value === 'string' || typeof value === 'number')
    ) {
      conditions.push(`${key} = :${key}`)
      params[`:${key}`] = value
    }
  }

 
  return {
    where: conditions.length
      ? `WHERE ${conditions.join(' AND ')}`
      : '',
    params,
  }
}