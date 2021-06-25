import { RequestResponse } from '@/shared/models/request-response-model';
import { AuthenticationTokens, AuthLocalKeys, UserCadastro } from '@/store/modules/auth/auth-types';
import Api from './api';

export default class AuthenticationService {
  static async login(token: string): Promise<void> {
    const [email, password] = atob(token).split(":");
    const user: UserCadastro = { email, password, name: 'Conta teste', phone: '(99) 99999-9999', address: '221b Baker Street' };
    this.setLocalStorageAuth(user);
  }

  static async logoff(): Promise<void> {
    this.clearLocalStorageAuth();
  }

  static async signin(userCadastro: UserCadastro): Promise<void> {
    // TODO: Endpoint to create account
  }

  static setLocalStorageAuth(user: UserCadastro): void {
    const b64user = btoa(JSON.stringify(user));
    localStorage.setItem(AuthLocalKeys.TOKEN, b64user);
  }

  static get getLocalStorageAuth(): UserCadastro | null {
    const userStringified = localStorage.getItem(AuthLocalKeys.TOKEN);

    if (userStringified !== null) {
      return JSON.parse(atob(userStringified));
    }

    return null;
  }

  static clearLocalStorageAuth(): void {
    localStorage.removeItem(AuthLocalKeys.TOKEN);
  }
}
