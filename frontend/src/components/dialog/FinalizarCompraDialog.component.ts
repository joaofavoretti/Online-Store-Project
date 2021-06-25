import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { CheckoutModel } from '@/store/modules/checkout/checkout-types';
import YupFormValidator from '@/shared/yup/yup-form-validator';
import checkoutSchema from '@/shared/validations/checkout-validation-schema';
import CheckoutStore from '@/store/modules/checkout/checkout-module';

@Component
export default class FinalizarCompraDialog extends Vue {
  @Prop(Boolean) readonly show: boolean | undefined;

  handleCheckout(): void {
    CheckoutStore.checkoutCart(this.checkout);
    this.handleClose();
  }

  @Emit('onClose')
  handleClose(): void {
    this.checkout = { card: '', cvv: '', valid: '', password: '' };
    this.validator = { errors: {}, isValid: false };
  }

  showPassword = false;

  checkout: CheckoutModel = {
    card: '',
    cvv: '',
    valid: '',
    password: '',
  };

  validator = {
    errors: {},
    isValid: false,
  };

  async validate(fieldname: keyof CheckoutModel): void {
    this.validator = await YupFormValidator.validate(checkoutSchema, fieldname, this.checkout);
  }

  get loading(): boolean {
    return CheckoutStore.isLoading;
  }
}
