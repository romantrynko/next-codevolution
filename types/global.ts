export interface ISession {
  user: {
    name: string
    email: string
    image: string
    uid?: string
  }
  expires: Date
}