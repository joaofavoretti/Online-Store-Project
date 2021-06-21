<template>
  <v-container>
    <div class="carrinho-header py-16">
      <h1>Shopping Cart</h1>
      <p><a>{{ cart.length }}</a> itens no seu carrinho</p>
    </div>

    <div class="cart-list">
      <v-simple-table fixed-header height="35rem">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Produto</th>
              <th class="text-left">Preço</th>
              <th class="text-left">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cart" :key="product.name">
              <td>
                <div class="my-4 cart-item">
                  <div class="cart-item-image">
                    <v-img
                      v-if="product.src"
                      :src="product.src"
                      width="150px"
                      height="150px"
                    />
                    <v-sheet
                      v-else
                      color="grey"
                      elevation="1"
                      height="150"
                      width="150"
                    ></v-sheet>
                  </div>
                  <div class="cart-item-info ml-4">
                    <h1>{{ product.name }}</h1>
                    <p>{{ product.description }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="cart-item-price">
                  <span>{{ product.price | toCurrency }}</span>
                </div>
              </td>
              <td>
                <v-col cols="3">
                  <v-row>
                    <v-text-field outlined v-model="product.quantity" type="number" min="1" max="50" />
                  </v-row>
                  <v-row>
                    <v-btn text color="red">
                      Remover
                    </v-btn>
                  </v-row>
                </v-col>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <div class="cart-action-buttons mt-6">
      <div class="cart-action-back">
        <v-btn text color="primary" @click="backShopping">
          <v-icon>mdi-chevron-left</v-icon>
          Continuar comprando</v-btn>
      </div>
      <div class="cart-action-checkout">
        <h2>Total:</h2>
        <h1>{{ getCartTotal | toCurrency }}</h1>
        <v-btn block color="primary">Checkout</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" src="./Carrinho.component" />

<style lang="scss">
@import "@/shared/styles/colors.scss";

.carrinho-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p a {
    cursor: default;
  }
}

.cart-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .cart-item-info {
    color: $secondaryLight;
    h1 {
      font-weight: normal;
    }
  }
}

.cart-action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  color: $secondary;
}
</style>
