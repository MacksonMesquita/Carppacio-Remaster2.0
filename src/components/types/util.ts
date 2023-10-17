export type Icon = {
    color?: string
    fill?: boolean
  }

export type ITab = {
    title: string
    value: string
    icon: React.ReactNode
  }
  
  export type ITabContent = {
    title: string
    value: string
    subtitle: string
    description: string
    crtmedio: string
    taxadeaprovação: string
    clientes: number
    potencial2: number
  }
  
  export type ICardContent = {
    title: string
    subtitle: string
    chave: string
  }