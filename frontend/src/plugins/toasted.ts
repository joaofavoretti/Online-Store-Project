import { VueClass } from 'vue-class-component/lib/declarations';
import ToastedPlugin from 'vue-toasted';

const configToasted = (vueInstance: VueClass<any>): void => {
  vueInstance.use(ToastedPlugin, {
    position: 'bottom-center',
    theme: 'bubble',
    duration: 5000,
    singleton: true,
  });

  vueInstance.toasted.register('error', (message) => message, {
    className: ['toast-error'],
  });

  vueInstance.toasted.register('info', (message) => message, {
    className: ['toast-info'],
  });

  vueInstance.toasted.register('success', (message) => message, {
    className: ['toast-success'],
  });
};

export default configToasted;
