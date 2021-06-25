<template>
  <v-dialog @click:outside="handleClose" v-model="show" max-width="480">
    <v-card class="dialog-content">
      <div class="dialog-header">
        <span>
          <template>Finalizar compra</template>
        </span>
      </div>

      <v-form autocomplete="off" @submit.prevent="handleCheckout" class="mt-6">
        <v-text-field
          label="Cartão de crédito"
          placeholder="Cartão de crédito"
          color="primary"
          outlined
          autocomplete="off"
          name="card"
          v-mask="'#### #### #### ####'"
          @blur="validate('card')"
          :error-messages="validator.errors.card"
          v-model="checkout.card"
        />

        <v-text-field
          label="Data de validade"
          placeholder="Data de validade"
          color="primary"
          outlined
          autocomplete="off"
          name="valid"
          v-mask="'##/##'"
          @blur="validate('valid')"
          :error-messages="validator.errors.valid"
          v-model="checkout.valid"
        />

        <v-text-field
          label="CVV"
          placeholder="CVV"
          color="primary"
          outlined
          autocomplete="off"
          name="cvv"
          v-mask="'###'"
          @blur="validate('cvv')"
          :error-messages="validator.errors.cvv"
          v-model="checkout.cvv"
        />

        <v-text-field
          label="Senha"
          placeholder="Senha"
          autocomplete="off"
          color="primary"
          outlined
          name="password"
          v-mask="'####'"
          hint="Quatro dígitos"
          @blur="validate('password')"
          @click:append="showPassword = !showPassword"
          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          :error-messages="validator.errors.password"
          v-model="checkout.password"
        ></v-text-field>

        <v-card-actions class="dialog-actions mt-6">
          <v-btn
            color="primary"
            large
            block
            :loading="loading"
            :disabled="!validator.isValid"
            @click="handleCheckout"
          >
            Comprar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./FinalizarCompraDialog.component"/>

<style lang="scss" scoped>
@import "@/shared/styles/dialog.scss";
</style>
