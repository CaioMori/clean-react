import {AccountModel} from 'domain/models/account.model'

interface AuthParams {
  email: string
  password: string
}

export interface IAuthentication {
  auth(params: AuthParams): Promise<AccountModel>
}
