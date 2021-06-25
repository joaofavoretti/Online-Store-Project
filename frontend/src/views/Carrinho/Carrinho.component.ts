/* eslint-disable lines-between-class-members */
import { Component, Vue } from 'vue-property-decorator';
import { CartProduct } from '@/store/modules/cart/cart-types';
import CartStore from '@/store/modules/cart/cart-module';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog.vue';

@Component({
  components: {
    ConfirmationDialog,
  },
})
export default class Carrinho extends Vue {
  showConfirmation = false;

  loadingConfirmation = false;

  productRemove: CartProduct | null = null;

  showRemoveConfirmation(productId: number): void {
    [this.productRemove] = this.cart.filter((product) => product.id === productId);
    this.showConfirmation = true;
  }

  async confirmRemove(): Promise<void> {
    // TODO: Requisicao para remover item
    await CartStore.fetchCartProducts();
    this.showConfirmation = false;
  }

  confirmClose(): void {
    this.showConfirmation = false;
  }

  backShopping(): void {
    this.$router.push({ name: 'inicio' });
  }

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

  get loading(): boolean {
    return CartStore.isLoading;
  }

  get confirmationDescription(): string {
    return `Tem certeza de que deseja remover ${this.productRemove?.name}`;
  }
}
