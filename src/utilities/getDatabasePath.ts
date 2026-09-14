import path from 'path'

export function getDatabasePath(): string {
  const configuredPath = process.env.VEHICL_FIELD_DB_PATH

  if (!configuredPath) {
    throw new Error(
      'VEHICL_FIELD_DB_PATH is not configured'
    )
  }

  return path.resolve(process.cwd(), configuredPath)
}