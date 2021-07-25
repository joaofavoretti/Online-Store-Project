import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store/index';
import { CartProduct } from './cart-types';

@Module({ namespaced: true, name: 'cart', dynamic: true, store })
class CartStore extends VuexModule {
  loading = false;

  products: Array<CartProduct> = this.fetchCartProducts();

  @Action
  fetchCartProducts(): Array<CartProduct> {
    const b64products = localStorage.getItem("cart");

    if (b64products !== null) {
      const products = JSON.parse(atob(b64products));
      return products;
    }
    return [];    
  }

  @Action
  addToCart(product: Object): void {
    this.products.push(<CartProduct> product);

    const b64products = btoa(JSON.stringify(this.products));
    localStorage.setItem("cart", b64products);
  }

  @Mutation
  resetCartList(): void {
    this.products = [];

    const b64products = btoa(JSON.stringify(this.products));
    localStorage.setItem("cart", b64products);
    this.fetchCartProducts();
  }

  @Mutation
  removeProductFromCard(product: CartProduct | null): void {
    if (product === null) return;

    this.products = this.products.filter(p => p._id !== product._id);

    const b64products = btoa(JSON.stringify(this.products));
    localStorage.setItem("cart", b64products);
  }

  get isLoading():boolean {
    return this.loading;
  }

  @Mutation
  setLoading(value: boolean) {
    this.loading = value;
  }

  get getCart(): Array<CartProduct> {
    return this.products;
  }
}

export default getModule(CartStore);
