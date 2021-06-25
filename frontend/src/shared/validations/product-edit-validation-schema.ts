import Yup from '@/shared/yup/yup-config';
import { ProductsInfo } from '@/store/modules/products/products-types';

const productEditSchema = Yup.object<ProductsInfo>().shape<ProductsInfo>({
  name: Yup.string().required().label('Nome'),
  price: Yup.number().required().label('Preço'),
  quantity: Yup.number().required().label('Quantidade'),
  description: Yup.string().label('Descrição'),
  youtubeEmbed: Yup.string().url().label('Link para vídeo'),
  src: Yup.string().url().label('Link para imagem'),
});

export default productEditSchema;
