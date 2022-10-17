export interface IArticle {
  id?: number
  title?: string
  tags: {
    tagOne: string
    tagTwo: string
  }
  imageUser: string
  nameUser?: string
  dataArticle?: string
  kudos?: number
  imageArticle?: string
  title2?: string
  caption?: string
  captionImage?: string
  paragraph1?: string
  paragraph2?: string
  paragraph3?: string
  paragraph4?: string
}

export interface IUser {
  id: number
  name?: string
  joined?: string
  gender?: string
  status?: string
  email?: string
}

export interface IPopular {
  id: number
  title?: string
  caption?: string
  kudos: number
  imageUser?: string
  nameUser?: string
  imageArticle?: string
}

export interface IFootherProfileBlock {
  id: number
  title?: string
  kudos: number
  imageUser?: string
  nameUser?: string
  imageArticle?: string
}


export interface IReaction {
  id: number
  kudos: number
  imageUser?: string
  nameUser?: string
}