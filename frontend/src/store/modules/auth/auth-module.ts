import Vue from 'vue';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import AuthenticationService from '@/services/authentications-service';
import store from '@/store/index';
import { User } from './auth-types';

@Module({ namespaced: true, name: 'auth', dynamic: true, store })
class AuthStore extends VuexModule {
  loading = false;

  signed = !!AuthenticationService.getLocalStorageAuth;

  @Action({ rawError: true })
  async login(user: User) {
    try {
      this.setLoading(true);
      const userToken = btoa(`${user.email}:${user.password}`);
      await AuthenticationService.login(userToken);
      this.setSigned(true);
    } catch (error) {
      const [message] = error.data.messages[0];
      Vue.toasted.global.customError(message);
    } finally {
      this.setLoading(false);
    }
  }

  @Action
  async logoff() {
    try {
      this.setLoading(true);
      await AuthenticationService.logoff();
      this.setSigned(false);
    } catch (error) {
      const [message] = error.data.messages[0];
      Vue.toasted.global.customError(message);
    } finally {
      this.setLoading(false);
    }
  }

  get isSigned(): boolean {
    return this.signed;
  }

  get isLoading(): boolean {
    return this.loading;
  }

  @Mutation
  setLoading(value: boolean) {
    this.loading = value;
  }

  @Mutation
  setSigned(value: boolean) {
    this.signed = value;
  }
}

export default getModule(AuthStore);
