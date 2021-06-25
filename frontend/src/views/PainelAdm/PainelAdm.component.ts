/* eslint-disable lines-between-class-members */
import { Component, Vue } from 'vue-property-decorator';
import ProductsStore from '@/store/modules/products/products-module';
import ClientsStore from '@/store/modules/clients/clients-module';
import { ProductsInfo } from '@/store/modules/products/products-types';
import { ClientsInfo } from '@/store/modules/clients/clients.types';
import RemoveClientDialog from '@/components/dialog/RemoveClientDialog.vue';
import EditarProdutoDialog from '@/components/dialog/EditarProdutoDialog.vue';

@Component({
  components: {
    RemoveClientDialog,
    EditarProdutoDialog,
  },
})
export default class PainelAdm extends Vue {
  loading = false;

  showRemoveClient = false;

  showEditProduct = false;

  client: ClientsInfo = { id: -1, name: '', phone: '', email: '', address: '' };

  product: ProductsInfo = { id: 0, name: '', price: 0, quantity: 0, description: '', youtubeEmbed: '', src: '' };

  productHeaders = [
    { text: 'Ingrediente', align: 'start', sortable: true, value: 'name', class: 'table-header-bg-primary' },
    { text: 'Preço', align: 'start', value: 'price', sortable: true, class: 'table-header-bg-primary' },
    { text: 'Quantidade disponível', align: 'start', value: 'quantity', sortable: true, class: 'table-header-bg-primary' },
    { text: '', align: 'end', value: 'id', sortable: false, class: 'table-header-bg-primary' },
  ];

  clientHeaders = [
    { text: 'Nome do cliente', align: 'start', sortable: true, value: 'name', class: 'table-header-bg-primary' },
    { text: 'Telefone', align: 'start', value: 'phone', sortable: true, class: 'table-header-bg-primary' },
    { text: 'E-mail', align: 'start', value: 'email', sortable: true, class: 'table-header-bg-primary' },
    { text: '', align: 'end', value: 'id', sortable: false, class: 'table-header-bg-primary' },
  ];

  handleRemoveClient(clientId: number):void {
    [this.client] = this.getClients.filter((client) => client.id === clientId);
    this.showRemoveClient = true;
  }

  handleEditProdut(productId: number): void {
    this.product = { ...this.getProducts.filter((product) => product.id === productId)[0] };
    this.showEditProduct = true;
  }

  removeClient(): void {
    ClientsStore.removeClient(this.client.id);
    this.showRemoveClient = false;
  }

  addProduto() {
    this.product = { id: 0, name: '', price: 0, quantity: 0, description: '', youtubeEmbed: '', src: '' };
    this.showEditProduct = true;
  }

  saveProduct(): void {
    // ProductsStore.saveProduct(this.product);
    this.showEditProduct = false;
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
