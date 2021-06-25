<template>
  <v-dialog
    @click:outside="handleClose"
    v-model="show"
    max-width="350px"
    id="dialog-class"
  >
    <v-card class="card-style" width="350px">
      <v-img
        v-if="product.src"
        :src="product.src"
        width="350px"
        height="350px"
      />
      <v-sheet
        v-else
        color="grey"
        elevation="1"
        height="350"
        width="350"
      ></v-sheet>

      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-text>{{ product.description }}</v-card-text>

      <div class="d-flex justify-center" v-if="product.youtubeEmbed">
        <iframe
          width="320"
          height="180"
          :src="product.youtubeEmbed"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <v-card-text class="mt-4">
        A partir de {{ product.price | toCurrency }}
      </v-card-text>

      <v-card-actions class="dialog-actions">
        <v-btn
          color="primary"
          block
          :loading="loading || false"
          @click="handleConfirm"
        >
          Adicionar ao carrinho
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { ProductsInfo } from "@/store/modules/products/products-types";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductDialog extends Vue {
  @Prop(Object) readonly product: ProductsInfo | undefined;

  @Prop(Boolean) readonly show: boolean | undefined;

  @Prop(Boolean) readonly loading: boolean | undefined;

  @Emit("onConfirm")
  handleConfirm(): void {}

  @Emit("onClose")
  handleClose(): void {}
}
</script>

<style lang="scss" scoped>
@import "@/shared/styles/dialog.scss";
</style>
