import Vue from 'vue';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import AuthenticationService from '@/services/authentications-service';
import store from '@/store/index';
import { User, UserCadastro } from './auth-types';

@Module({ namespaced: true, name: 'auth', dynamic: true, store })
class AuthStore extends VuexModule {
  loading = false;

  user: UserCadastro | null = AuthenticationService.getLocalStorageAuth;

  signed = !!AuthenticationService.getLocalStorageAuth;

  adminSigned: boolean = AuthenticationService.getAdminAccount;

  adminAccount = { email: 'admin@admin.com', password: 'admin' };

  @Action({ rawError: true })
  async login(user: User): Promise<void> {
    try {
      if (user.email === this.adminAccount.email && user.password === this.adminAccount.password) {
        AuthenticationService.setLocalStorageAuth({
          name: 'Admin',
          phone: '',
          email: 'admin@admin.com',
          address: '',
          password: 'admin',
        } as UserCadastro)
        this.setAdminSigned(true);
        this.setSigned(true);
        return;
      }

      this.setLoading(true);
      const userToken = btoa(`${user.email}:${user.password}`);
      const success = await AuthenticationService.login(userToken); 

      if (success) this.setSigned(true);
    } catch (error) {
      console.log(error);
      const [message] = error.data.messages[0];
      Vue.toasted.global.customError(message);
    } finally {
      this.setLoading(false);
      this.setUser();
    }
  }

  @Action
  async logoff(): Promise<void> {
    try {
      this.setLoading(true);
      await AuthenticationService.logoff();
        
      if(this.isAdminSigned) {
        this.setAdminSigned(false);
      } 

      this.setSigned(false);
    } catch (error) {
      const [message] = error.data.messages[0];
      Vue.toasted.global.customError(message);
    } finally {
      this.setLoading(false);
      this.setUser();
    }
  }

  @Action
  async signup(userCadastro: UserCadastro): Promise<void> {
    try {
      if (userCadastro.email === this.adminAccount.email) {
        Vue.toasted.global.error('Não é possível cadastrar uma conta com as credenciais de administrador');
      }

      this.setLoading(true);
      const success = await AuthenticationService.signup(userCadastro);

      if (success) {
        const user: User = { email: userCadastro.email, password: userCadastro.password };
        await this.login(user);
      }
    } catch (error) {
      const [message] = error.data.messages[0];
      Vue.toasted.global.customError(message);
    } finally {
      this.setLoading(false);
      this.setUser();
    }
  }

  get isSigned(): boolean {
    return this.signed;
  }

  get isLoading(): boolean {
    return this.loading;
  }

  get getUser(): UserCadastro | null {
    return this.user;
  }

  get isAdminSigned() {
    return this.adminSigned;
  }

  @Mutation
  setAdminSigned(value: boolean) {
    this.adminSigned = value;
  }

  @Mutation
  setLoading(value: boolean) {
    this.loading = value;
  }

  @Mutation
  setSigned(value: boolean) {
    this.signed = value;
  }

  @Mutation
  setUser() {
    this.user = AuthenticationService.getLocalStorageAuth;
  }
}

export default getModule(AuthStore);
