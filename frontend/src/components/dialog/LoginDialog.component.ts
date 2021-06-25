import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { User } from '@/store/modules/auth/auth-types';
import YupFormValidator from '@/shared/yup/yup-form-validator';
import AuthStore from '@/store/modules/auth/auth-module';
import loginSchema from '@/shared/validations/login-validation-schema';

@Component
export default class LoginDialog extends Vue {
  @Prop(Boolean) readonly show: boolean | undefined;

  @Emit('onCreate')
  handleCreate(): void {
    this.handleClose();
  }

  @Emit('onClose')
  handleClose(): void {
    this.user = { email: '', password: '' };
    this.validator = { errors: {}, isValid: false };
  }

  showPassword = false;

  user: User = {
    email: '',
    password: '',
  };

  validator = {
    errors: {},
    isValid: false,
  };

  async validate(fieldname: keyof User): void {
    this.validator = await YupFormValidator.validate(loginSchema, fieldname, this.user);
  }

  get loading(): boolean {
    return AuthStore.isLoading;
  }

  async login(): void {
    await AuthStore.login(this.user);
    this.handleClose();
  }
}
