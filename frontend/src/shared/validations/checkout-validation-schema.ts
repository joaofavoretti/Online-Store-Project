/* eslint-disable newline-per-chained-call */
import Yup from '@/shared/yup/yup-config';
import { CheckoutModel } from '@/store/modules/checkout/checkout-types';

const checkoutSchema = Yup.object<CheckoutModel>().shape<CheckoutModel>({
  card: Yup.string().length(19).required().label('Cartão de crédito'),
  cvv: Yup.string().length(3).required().label('CVV'),
  valid: Yup.string().length(5).required().label('Data de validade'),
  password: Yup.string().length(4).required().label('Senha'),
});

export default checkoutSchema;
