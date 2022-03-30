import { AccountModel } from '../models/AccountModel'

type AuthenticationParams = {
  email: string
  password: string
}

export interface IAuthetication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
