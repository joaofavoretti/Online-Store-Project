/* eslint-disable lines-between-class-members */
import { Component, Vue } from 'vue-property-decorator';
import CartStore from '@/store/modules/cart/cart-module';
import { CartProduct } from '@/store/modules/cart/cart-types';

@Component
export default class Carrinho extends Vue {
  get cart(): Array<CartProduct> {
    return CartStore.getCart;
  }

  get getCartTotal(): number {
    const total = this.cart.reduce((acc, cur) => {
      acc += cur.price;
      return acc;
    }, 0);

    return total;
  }

  backShopping(): void {
    this.$router.push({ name: 'inicio' });
  }
}
