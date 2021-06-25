import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store/index';
import { CartProduct } from './cart-types';

@Module({ namespaced: true, name: 'cart', dynamic: true, store })
class CartStore extends VuexModule {
  products: Array<CartProduct> = [
    { name: 'Produto 0', quantity: 5, price: 1, brandName: 'Brand&Name', description: 'Muito gostoso', src: 'https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    { name: 'Produto 1', quantity: 5, price: 1, src: '' },
    { name: 'Produto 2', quantity: 5, price: 1, src: 'https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80' },
    { name: 'Produto 3', quantity: 5, price: 10, src: 'https://images.unsplash.com/photo-1556909172-89cf0b24ff02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' },
    { name: 'Produto 4', quantity: 5, price: 10, src: 'https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { name: 'Produto 5', quantity: 5, price: 10, src: 'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80' },
  ];

  get getCart(): Array<CartProduct> {
    return this.products;
  }
}

export default getModule(CartStore);