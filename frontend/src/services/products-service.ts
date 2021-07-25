import { ProductsInfo } from '@/store/modules/products/products-types';
import Api from './api';

export default class ProducsService {

    static async getProducts(): Promise<Array<ProductsInfo>> {
        const response = await Api.get("/products");
        return response.data;
    }

    static async saveProduct(product: ProductsInfo): Promise<void> {
        const response = await Api.put("/products", product);
    }

    static async saveNewProduct(product: ProductsInfo): Promise<void> {
        const response = await Api.post("/products", product);
    }
}