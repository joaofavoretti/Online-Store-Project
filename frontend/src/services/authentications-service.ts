import { RequestResponse } from '@/shared/models/request-response-model';
import { AuthenticationTokens, AuthLocalKeys, UserCadastro } from '@/store/modules/auth/auth-types';
import Api from './api';
import Vue from 'vue';

export default class AuthenticationService {
  static async login(token: string): Promise<boolean> {
    const [email, password] = atob(token).split(":");
    
    const response = await Api.post("/login", {token: token});

    if (response.status == 202) {
      const user: UserCadastro = response.data;
      this.setLocalStorageAuth(user);
      return true;
    } else {
      Vue.toasted.global.error("Email ou senha incorreto");
      return false;
    }
  }

  static async logoff(): Promise<void> {
    this.clearLocalStorageAuth();
  }

  static async signup(userCadastro: UserCadastro): Promise<boolean> {
    const response = await Api.post("/signup", userCadastro);
    if (response.status == 201) {
      return true;
    } else {
      return false;
    }
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

  static get getAdminAccount(): boolean {
    const userStringified = localStorage.getItem(AuthLocalKeys.TOKEN);

    if (userStringified === null) {
      return false;
    }

    const user = JSON.parse(atob(userStringified));
    
    return (user.email === "admin@admin.com" && user.password === "admin")    
  }

  static clearLocalStorageAuth(): void {
    localStorage.removeItem(AuthLocalKeys.TOKEN);
  }
}
