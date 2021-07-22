import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import CheckoutService from '@/services/checkout-service';
import store from '@/store/index';
import CartStore from '@/store/modules/cart/cart-module';
import { CartProduct } from '@/store/modules/cart/cart-types';
import { CheckoutModel } from './checkout-types';

@Module({ namespaced: true, name: 'checkout', dynamic: true, store })
class CheckoutStore extends VuexModule {
  loading = false;

  @Action
  checkoutCart(checkoutData: CheckoutModel): void {
    this.setLoading(true);
    const cart:Array<CartProduct> = CartStore.getCart;

    CheckoutService.confirmPayment(cart, checkoutData);
    this.setLoading(false);

    CartStore.fetchCartProducts();
  }

  get isLoading(): boolean {
    return this.loading;
  }

  @Mutation
  setLoading(value: boolean) {
    this.loading = value;
  }

}

export default getModule(CheckoutStore);
