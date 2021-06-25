import { RequestResponse } from '@/shared/models/request-response-model';
import { AuthenticationTokens, AuthLocalKeys } from '@/store/modules/auth/auth-types';
import Api from './api';

export default class AuthenticationService {

  static async login(token: string): Promise<void> {
    const headers = { Authorization: token };

    // TODO: Requisicao para autenticacao
    // const { data: res } = await Api.post<any, RequestResponse<AuthenticationTokens>>('your/authentication/token/uri', {}, { headers });

    this.setLocalStorageAuth(token);
  }

  static async logoff(): Promise<void> {
    this.clearLocalStorageAuth();
  }

  static setLocalStorageAuth(token: string): void {
    localStorage.setItem(AuthLocalKeys.TOKEN, token);
  }

  static get getLocalStorageAuth(): string | null {
    return localStorage.getItem(AuthLocalKeys.TOKEN);
  }

  static clearLocalStorageAuth(): void {
    localStorage.removeItem(AuthLocalKeys.TOKEN);
  }
}
