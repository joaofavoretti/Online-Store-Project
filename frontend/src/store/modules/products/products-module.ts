import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import ProducsService from '@/services/products-service';
import store from '@/store/index';
import { ProductsInfo } from './products-types';

@Module({ namespaced: true, name: 'products', dynamic: true, store })
class ProductsStore extends VuexModule {
  loading = false;

  productsMaisVendidos: Array<ProductsInfo> = [];

  productsLancamentos: Array<ProductsInfo> = [];

  productsAll: Array<ProductsInfo> = []

  @Mutation
  async saveProduct(product: ProductsInfo): Promise<void> {
      ProducsService.saveProduct(product);
  }

  get getProductsMaisVendidos(): Array<ProductsInfo> {
    return this.productsMaisVendidos;
  }

  get getProductsLancamentos(): Array<ProductsInfo> {
    return this.productsLancamentos;
  }

  get getProductsAll(): Array<ProductsInfo> {
    return this.productsAll;
  }

  get getLoading(): boolean {
    return this.loading;
  }

  @Mutation
  setLoading(value: boolean) {
    this.loading = value;
  }

  @Mutation
  async getProducts(): Promise<void> {
    const products = await ProducsService.getProducts();


    this.productsAll = products;
    this.productsLancamentos = products;
    this.productsMaisVendidos = products;
  }
}

export default getModule(ProductsStore);
