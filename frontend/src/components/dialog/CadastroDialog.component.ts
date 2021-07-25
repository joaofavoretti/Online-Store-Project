import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { UserCadastro } from '@/store/modules/auth/auth-types';
import YupFormValidator from '@/shared/yup/yup-form-validator';
import AuthStore from '@/store/modules/auth/auth-module';
import cadastroSchema from '@/shared/validations/cadastro-validation-schema';

@Component
export default class LoginDialog extends Vue {
  @Prop(Boolean) readonly show: boolean | undefined;

  @Emit('onLogin')
  handleEntrar(): void {
    this.handleClose();
  }

  @Emit('onClose')
  handleClose(): void {
    this.user = { name: '', phone: '', email: '', address: '', password: '' };
    this.validator = { errors: {}, isValid: false };
  }

  showPassword = false;

  user: UserCadastro = {
    name: '',
    phone: '',
    email: '',
    address: '',
    password: '',
  };

  validator = {
    errors: {},
    isValid: false,
  };

  async validate(fieldname: keyof UserCadastro): Promise<void> {
    this.validator = await YupFormValidator.validate(cadastroSchema, fieldname, this.user);
  }

  get loading(): boolean {
    return AuthStore.isLoading;
  }

  async signup(): Promise<void> {
    await AuthStore.signup(this.user);
    this.handleClose();
  }
}
