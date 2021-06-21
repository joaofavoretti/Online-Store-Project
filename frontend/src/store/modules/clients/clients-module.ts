import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store/index';
import { ClientsInfo } from './clients.types';

@Module({ namespaced: true, name: 'clients', dynamic: true, store })
class ClientsStore extends VuexModule {
  clientes: Array<ClientsInfo> = [
    { id: 1, name: 'Cliente 1', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 2, name: 'Cliente 2', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 3, name: 'Cliente 3', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 4, name: 'Cliente 4', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 5, name: 'Cliente 5', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 6, name: 'Cliente 6', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 7, name: 'Cliente 7', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 8, name: 'Cliente 8', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 9, name: 'Cliente 9', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 10, name: 'Cliente 10', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 11, name: 'Cliente 11', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 12, name: 'Cliente 12', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 13, name: 'Cliente 13', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 14, name: 'Cliente 14', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 15, name: 'Cliente 15', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
  ]

  get getClientsAll(): Array<ClientsInfo> {
    return this.clientes;
  }
}

export default getModule(ClientsStore);
