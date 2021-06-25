/* eslint-disable lines-between-class-members */
import { Component, Vue } from 'vue-property-decorator';
import ProductsStore from '@/store/modules/products/products-module';
import ClientsStore from '@/store/modules/clients/clients-module';
import { ProductsInfo } from '@/store/modules/products/products-types';
import { ClientsInfo } from '@/store/modules/clients/clients.types';
import RemoveClientDialog from '@/components/dialog/RemoveClientDialog.vue';

@Component({
  components: {
    RemoveClientDialog,
  },
})
export default class PainelAdm extends Vue {
  loading = false;

  showRemoveClient = false;

  client: ClientsInfo | null = null;

  productHeaders = [
    { text: 'Ingrediente', align: 'start', sortable: true, value: 'name', class: 'table-header-bg-primary' },
    { text: 'Preço', align: 'start', value: 'price', sortable: true, class: 'table-header-bg-primary' },
    { text: 'Quantidade disponível', align: 'start', value: 'quantity', sortable: true, class: 'table-header-bg-primary' },
    { text: '', align: 'end', value: 'id', sortable: false, class: 'table-header-bg-primary' },
  ];

  clientHeaders = [ // TODO: Adicionar classe header
    { text: 'Nome do cliente', align: 'start', sortable: true, value: 'name', class: 'table-header-bg-primary' },
    { text: 'Telefone', align: 'start', value: 'phone', sortable: true, class: 'table-header-bg-primary' },
    { text: 'E-mail', align: 'start', value: 'email', sortable: true, class: 'table-header-bg-primary' },
    { text: '', align: 'end', value: 'id', sortable: false, class: 'table-header-bg-primary' },
  ];

  handleRemoveClient(clientId: number):void {
    [this.client] = this.getClients.filter((client) => client.id === clientId);
    this.showRemoveClient = true;
  }

  removeClient(): void {
    if (this.client === null) return;

    ClientsStore.removeClient(this.client.id);
    this.showRemoveClient = false;
  }

  get getClientsLoading(): boolean {
    return ClientsStore.getLoading;
  }

  get getProductsLoading(): boolean {
    return ProductsStore.getLoading;
  }

  get getProducts(): Array<ProductsInfo> {
    return ProductsStore.getProductsAll;
  }

  get getClients(): Array<ClientsInfo> {
    return ClientsStore.getClientsAll;
  }
}
