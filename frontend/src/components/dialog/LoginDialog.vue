<template>
  <v-dialog @click:outside="handleClose" v-model="show" max-width="480">
    <v-card class="dialog-content">
      <div class="dialog-header">
        <span>
          <template>Acesse sua conta</template>
        </span>
      </div>

      <v-form autocomplete="off" @submit.prevent="login" class="mt-6">
        <v-text-field
          label="E-mail"
          placeholder="E-mail"
          color="primary"
          outlined
          autocomplete="off"
          name="email"
          @blur="validate('email')"
          :error-messages="validator.errors.email"
          v-model="user.email"
        />

        <v-text-field
          label="Senha"
          placeholder="Senha"
          autocomplete="off"
          color="primary"
          outlined
          name="password"
          v-mask="'XXXXXX'"
          @blur="validate('password')"
          @click:append="showPassword = !showPassword"
          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          :error-messages="validator.errors.password"
          v-model="user.password"
        />

        <v-card-actions class="dialog-actions mt-6">
          <v-btn color="primary" text large width="45%" @click="handleCreate">
            Criar conta
          </v-btn>
          <v-btn
            color="primary"
            large
            :loading="loading || false"
            :disabled="!validator.isValid"
            @click="login"
            width="45%"
          >
            Entrar
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./LoginDialog.component"/>

<style lang="scss" scoped>
@import "@/shared/styles/dialog.scss";
</style>
