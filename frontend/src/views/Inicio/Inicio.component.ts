/* eslint-disable lines-between-class-members */
import { Component, Vue } from 'vue-property-decorator';
import ProductCard from '@/components/cards/ProductCard.vue';
import ProductDialog from '@/components/dialog/ProductDialog.vue';
import PicturesStore from '@/store/modules/pictures/pictures-module';
import ProductsStore from '@/store/modules/products/products-module';
import { CaroulselPictures } from '@/store/modules/pictures/pictures-types';
import { ProductsInfo } from '@/store/modules/products/products-types';

@Component({
  components: {
    ProductCard,
    ProductDialog,
  },
})
export default class Inicio extends Vue {
  carouselModel = 0;
  show = true;
  productLancamentosShowModel = 0;
  productMaisVendidosShowModel = 0;
  productTab = null;
  productDialog: ProductsInfo | null = null;

  get pictures(): Array<CaroulselPictures> {
    return PicturesStore.getPictures;
  }

  get productsMaisVendidos(): Array<ProductsInfo> {
    return ProductsStore.getProductsMaisVendidos;
  }

  get productsLancamentos(): Array<ProductsInfo> {
    return ProductsStore.getProductsLancamentos;
  }

  confirm(): void {
    // TODO: Adicionar ao carrinho
    console.log('Adicionar ao carrinho');
  }

  openProductDialog(product: ProductsInfo): void {
    this.productDialog = product;
    this.show = true;
  }
}
