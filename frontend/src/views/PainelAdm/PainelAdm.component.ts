/* eslint-disable lines-between-class-members */
import { Component, Vue } from 'vue-property-decorator';
import ProductsStore from '@/store/modules/products/products-module';
import ClientsStore from '@/store/modules/clients/clients-module';
import { ProductsInfo } from '@/store/modules/products/products-types';
import { ClientsInfo } from '@/store/modules/clients/clients.types';

@Component
export default class PainelAdm extends Vue {
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

  get getProducts(): Array<ProductsInfo> {
    return ProductsStore.getProductsAll;
  }

  get getClients(): Array<ClientsInfo> {
    return ClientsStore.getClientsAll;
  }
}
