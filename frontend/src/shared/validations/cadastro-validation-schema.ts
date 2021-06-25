/* eslint-disable newline-per-chained-call */
import Yup from '@/shared/yup/yup-config';
import { UserCadastro } from '@/store/modules/auth/auth-types';

const cadastroSchema = Yup.object<UserCadastro>().shape<UserCadastro>({
  name: Yup.string().required().label('Nome'),
  phone: Yup.string().min(14).max(15).required().label('Telefone'),
  address: Yup.string().required().label('Endereço'),
  email: Yup.string().email().required().label('E-mail'),
  password: Yup.string().length(6).required().label('Senha'),
});

export default cadastroSchema;
