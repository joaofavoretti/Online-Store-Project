import Yup from '@/shared/yup/yup-config';
import { User } from '@/store/modules/auth/auth-types';

const loginSchema = Yup.object<User>().shape<User>({
  email: Yup.string().email().required().label('E-mail'),
  password: Yup.string().min(5).required().label('Senha'),
});

export default loginSchema;
