<template>
  <v-dialog @click:outside="handleClose" v-model="show" max-width="480">
    <v-card class="dialog-content">
      <div class="dialog-header">
        <span>
          <template>Crie sua conta</template>
        </span>
      </div>

      <v-form autocomplete="off" @submit.prevent="signup" class="mt-6">
        <v-text-field
          label="Nome"
          placeholder="Nome"
          color="primary"
          outlined
          autocomplete="off"
          name="name"
          @blur="validate('name')"
          :error-messages="validator.errors.name"
          v-model="user.name"
        />

        <v-text-field
          label="Telefone"
          placeholder="Telefone"
          color="primary"
          outlined
          autocomplete="off"
          name="phone"
          v-mask="['(##) ####-####', '(##) #####-####']"
          @blur="validate('phone')"
          :error-messages="validator.errors.phone"
          v-model="user.phone"
        />

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
          label="Endereço"
          placeholder="Enderço"
          color="primary"
          outlined
          autocomplete="off"
          name="address"
          @blur="validate('address')"
          :error-messages="validator.errors.address"
          v-model="user.address"
        >
        </v-text-field>

        <v-text-field
          label="Senha"
          placeholder="Senha"
          autocomplete="off"
          color="primary"
          outlined
          name="password"
          v-mask="'######'"
          hint="Seis dígitos"
          @blur="validate('password')"
          @click:append="showPassword = !showPassword"
          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          :error-messages="validator.errors.password"
          v-model="user.password"
        ></v-text-field>

        <v-card-actions class="dialog-actions mt-6">
          <v-btn color="primary" text large width="45%" @click="handleEntrar">
            Entrar
          </v-btn>
          <v-btn
            color="primary"
            large
            :loading="loading || false"
            :disabled="!validator.isValid"
            @click="signup"
            width="45%"
          >
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./CadastroDialog.component"/>

<style lang="scss" scoped>
@import "@/shared/styles/dialog.scss";
</style>
