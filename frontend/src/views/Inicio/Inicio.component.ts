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
    console.log("teste");
  }
}
