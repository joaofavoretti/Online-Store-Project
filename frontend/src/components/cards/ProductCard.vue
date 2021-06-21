<template>
  <v-container>
    <v-card outlined class="card-style" width="250px" height="350px">
      <v-img
        v-if="product.src"
        :src="product.src"
        width="250px"
        height="250px"
      />
      <v-sheet
        v-else
        color="grey"
        elevation="1"
        height="250"
        width="250"
      ></v-sheet>

      <v-card-title style="text-aling: center;">{{ product.name }}</v-card-title>
      <v-card-text>
        A partir de {{ product.price | toCurrency }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ProductsInfo } from '@/store/modules/products/products-types';

@Component
export default class ProductCard extends Vue {
  @Prop(Object) readonly product: ProductsInfo | undefined
}

</script>

<style lang="scss">
.card-style {
  margin: 0 auto;
}
</style>
