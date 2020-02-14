export interface IParseNPMVersion {
  readonly name: string
  version: string
}

export interface IArticle {
  readonly id: number
  text: string
  authors?: number[] | any
}

export interface IAuthor {
  readonly id: number
  name: string
}

export interface ITeam {
  readonly id: number
  name: string
  members: number[]
}

export interface IInput {
  name: string
  register: any
  type: string
  errors: any
  args?: any[]
  [key: string]: any
}