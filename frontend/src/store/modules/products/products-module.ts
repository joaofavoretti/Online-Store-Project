import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store/index';
import { ProductsInfo } from './products-types';

@Module({ namespaced: true, name: 'products', dynamic: true, store })
class ProductsStore extends VuexModule {
  productsMaisVendidos: Array<ProductsInfo> = [
    { name: 'Produto 0', price: 1, description: 'Muito gostoso', youtubeEmbed: '<iframe width="350" height="197" src="https://www.youtube.com/embed/wtlfcHmfKW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', src: 'https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    { name: 'Produto 1', price: 1, src: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { name: 'Produto 2', price: 1, src: 'https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80' },
    { name: 'Produto 3', price: 10, src: 'https://images.unsplash.com/photo-1556909172-89cf0b24ff02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' },
    { name: 'Produto 4', price: 10, src: 'https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { name: 'Produto 5', price: 10, src: 'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80' },
  ];

  productsLancamentos: Array<ProductsInfo> = [
    { name: 'Product 0', price: 1, src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
    { name: 'Product 1', price: 1, src: '' },
    { name: 'Product 2', price: 1, src: '' },
    { name: 'Product 3', price: 10, src: '' },
    { name: 'Product 4', price: 10, src: '' },
    { name: 'Product 5', price: 10, src: '' },
    { name: 'Product 6', price: 100, src: '' },
    { name: 'Product 7', price: 100, src: '' },
    { name: 'Product 8', price: 10000, src: '' },
  ];

  get getProductsMaisVendidos(): Array<ProductsInfo> {
    return this.productsMaisVendidos;
  }

  get getProductsLancamentos(): Array<ProductsInfo> {
    return this.productsLancamentos;
  }
}

export default getModule(ProductsStore);
