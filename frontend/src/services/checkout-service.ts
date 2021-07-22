import { CheckoutModel } from '@/store/modules/checkout/checkout-types';
import { CartProduct } from '@/store/modules/cart/cart-types';
import { UserCadastro } from '@/store/modules/auth/auth-types';
import AuthenticationService from '@/services/authentications-service';
import Api from './api';

export default class CheckoutService {

    static async confirmPayment(cart:Array<CartProduct>, checkoutData:CheckoutModel): Promise<void> {
        const user: UserCadastro | null = AuthenticationService.getLocalStorageAuth;
        const signed = !!AuthenticationService.getLocalStorageAuth;
        if (signed) {
            const response = await Api.post("/sale", {
                products: cart,
                user:user,
                data:checkoutData
            });
        } else {
            alert("Faça login para finalizar a compra.");
        }
    }
}
