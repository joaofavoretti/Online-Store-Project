import { Component, Vue } from 'vue-property-decorator';
import ProductCard from '@/components/cards/ProductCard';

@Component({
  components: {
    ProductCard,
  },
})
export default class Inicio extends Vue {
  carouselModel = 0;

  pictures = [
    { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
    { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
  ];

  tab = null;

  items = [
    { tab: 'One', content: 'Tab 1 Content' },
    { tab: 'Two', content: 'Tab 2 Content' },
    { tab: 'Three', content: 'Tab 3 Content' },
    { tab: 'Four', content: 'Tab 4 Content' },
    { tab: 'Five', content: 'Tab 5 Content' },
    { tab: 'Six', content: 'Tab 6 Content' },
    { tab: 'Seven', content: 'Tab 7 Content' },
    { tab: 'Eight', content: 'Tab 8 Content' },
    { tab: 'Nine', content: 'Tab 9 Content' },
    { tab: 'Ten', content: 'Tab 10 Content' },
  ];
}
