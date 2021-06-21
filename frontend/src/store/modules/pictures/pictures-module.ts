import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store/index';
import { CaroulselPictures } from './pictures-types';

@Module({ namespaced: true, name: 'pictures', dynamic: true, store })
class PicturesStore extends VuexModule {
  caroulselPictures: Array<CaroulselPictures> = [
    { src: 'https://images.unsplash.com/photo-1447279506476-3faec8071eee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    { src: 'https://images.unsplash.com/31/RpgvvtYAQeqAIs1knERU_vegetables.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80' },
    { src: 'https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80' },
    { src: 'https://images.unsplash.com/photo-1586969593928-1c87c1f9c2ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' },
  ];

  get getPictures(): Array<CaroulselPictures> {
    return this.caroulselPictures;
  }
}

export default getModule(PicturesStore);
