import { VueClass } from 'vue-class-component/lib/declarations';
import { formatDocument } from '@/shared/filters/text-fiilters';

const configFilters = (vueInstance: VueClass<any>): void => {
  vueInstance.filter('formatDocument', formatDocument);
};

export default configFilters;
