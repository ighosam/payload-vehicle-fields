export type PluginOptions = {
  slug: string // collection slug to inject fields
  dataSource?:{
    vinDecoder:string,
    database:string
  }
}
