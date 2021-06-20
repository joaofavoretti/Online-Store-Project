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
        v-model="tab"
      >
        <v-tab class="mx-4">Mais vendidos</v-tab>
        <v-tab class="mx-4">Lancamentos</v-tab>
      </v-tabs>
    </div>

    <div class="tabs-content">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <ProductCard />
        </v-tab-item>
        <v-tab-item>
          lancamentos
        </v-tab-item>
      </v-tabs-items>
    </div>

  </v-container>
</template>

<script lang="ts" src="./Inicio.component" />

<style lang="scss">
.action-tabs {
  margin: 3rem 0;
}
</style>
