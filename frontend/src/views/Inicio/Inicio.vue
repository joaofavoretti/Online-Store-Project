<template>
  <v-container>
    <div class="carousel">
      <v-carousel
        cycle
        show-arrows-on-hover
        height="20rem"
        v-model="carouselModel"
        >
        <v-carousel-item
          v-for="(pic, i) in pictures"
          :key="i"
          :src="pic.src"
        />
      </v-carousel>
    </div>

    <div class="action-tabs">
      <v-tabs
        class="d-flex justify-center"
        v-model="productTab"
      >
        <v-tab class="mx-4">Produtos</v-tab>
        <!-- <v-tab class="mx-4">Lancamentos</v-tab> -->
      </v-tabs>
    </div>

    <div class="tabs-content">
      <v-tabs-items v-model="productTab">
        <v-tab-item>
          <v-carousel
            v-if="productsMaisVendidos.length > 0"
            hide-delimiters
            show-arrows-on-hover
            height="25rem"
            v-model="productMaisVendidosShowModel"
            >
            <v-carousel-item
              v-for="(productPage, i) in Math.ceil(productsMaisVendidos.length/3)"
              :key="i"
            >
              <div class="d-flex justify-center">
                <ProductCard
                  v-if="productsMaisVendidos[3*(productPage-1)+0]"
                  @onClick="openProductDialog(productsMaisVendidos[3*(productPage-1)+0])"
                  :product="productsMaisVendidos[3*(productPage-1)+0]"
                />
                <ProductCard
                  v-if="productsMaisVendidos[3*(productPage-1)+1]"
                  @onClick="openProductDialog(productsMaisVendidos[3*(productPage-1)+1])"
                  :product="productsMaisVendidos[3*(productPage-1)+1]"
                />
                <ProductCard
                  v-if="productsMaisVendidos[3*(productPage-1)+2]"
                  @onClick="openProductDialog(productsMaisVendidos[3*(productPage-1)+2])"
                  :product="productsMaisVendidos[3*(productPage-1)+2]"
                />
              </div>
            </v-carousel-item>
          </v-carousel>
          <v-alert
            v-else
            color="primary"
            type="warning"
            prominent
            border="left"
          >
            Nenhum produto encontrado no estoque.
          </v-alert>
        </v-tab-item>

        <!-- <v-tab-item>
          <v-carousel
            v-if="productsLancamentos.length"
            hide-delimiters
            show-arrows-on-hover
            height="25rem"
            v-model="productLancamentosShowModel"
            >
            <v-carousel-item
              v-for="(productPage, i) in (productsLancamentos.length/3)"
              :key="i"
            >
              <div class="d-flex justify-center">
                <ProductCard
                  :product="productsLancamentos[3*(productPage-1)+0]"
                  @onClick="openProductDialog(productsLancamentos[3*(productPage-1)+0])"
                />
                <ProductCard
                  @onClick="openProductDialog(productsLancamentos[3*(productPage-1)+1])"
                  :product="productsLancamentos[3*(productPage-1)+1]"
                />
                <ProductCard
                  @onClick="openProductDialog(productsLancamentos[3*(productPage-1)+2])"
                  :product="productsLancamentos[3*(productPage-1)+2]"
                />
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-tab-item> -->
      </v-tabs-items>
    </div>
    <ProductDialog
      :product="productDialog"
      :show="show"
      :loading="false"
      @onConfirm="confirm"
      @onClose="show = false"
    />
  </v-container>
</template>

<script lang="ts" src="./Inicio.component" />

<style lang="scss">
.action-tabs {
  margin: 3rem 0;
}
</style>
