<template>
  <v-container>
    <v-card outlined class="card-style" width="250px" height="350px">
      <v-img
        v-if="imgsrc"
        :src="imgsrc"
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

      <v-card-title style="text-aling: center;">Produto</v-card-title>
      <v-card-text>
        A partir de R$ 49,90
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductCard extends Vue {
  @Prop(String) readonly imgsrc: string | undefined

  @Prop(String) readonly productName: string | undefined

  @Prop(Number)readonly productPrice: number | undefined
}

</script>

<style lang="scss">
.card-style {
  margin: 0 auto;
}
</style>
