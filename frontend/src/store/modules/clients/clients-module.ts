import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import ClientsService from '@/services/clients-service';
import store from '@/store/index';
import { ClientsInfo } from './clients-types';

@Module({ namespaced: true, name: 'clients', dynamic: true, store })
class ClientsStore extends VuexModule {
  loading = false;

  clientes: Array<ClientsInfo> = [];

  @Action
  async removeClient(clientId: number): Promise<void> {
    this.setLoading(true);

    ClientsService.removeClient(clientId);

    this.fetchClients();
    this.setLoading(false);
  }


  get getClientsAll(): Array<ClientsInfo> {
    return this.clientes;
  }

  get getLoading() {
    return this.loading;
  }

  @Mutation
  setLoading(value: boolean):void {
    this.loading = value;
  }

  @Mutation
  async fetchClients(): Promise<void> {
    var clients = await ClientsService.fetchClients();
    this.clientes = clients;

  }
}

export default getModule(ClientsStore);
