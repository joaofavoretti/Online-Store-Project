<template>
  <v-dialog @click:outside="handleClose" v-model="show" max-width="480">
    <v-card class="dialog-content">
      <div class="dialog-header text-center">
        <v-icon size="35" color="primary">mdi-alert</v-icon>
        <span>
          <template>Deseja remover o cliente:</template>
        </span>
      </div>

      <v-card-text class="dialog-content-text">
        <div class="d-flex justify-space-between">
          <p>Nome</p><b>{{client.name}}</b>
        </div>
        <div class="d-flex justify-space-between">
          <p>Telefone</p><b>{{client.phone}}</b>
        </div>
        <div class="d-flex justify-space-between">
          <p>E-mail</p><b>{{client.email}}</b>
        </div>
      </v-card-text>

      <v-card-actions class="dialog-actions">
        <v-btn color="primary" large width="45%" @click="handleClose" outlined>
          Cancelar
        </v-btn>
        <v-btn
          color="primary"
          large
          :loading="loading || false"
          @click="handleConfirm"
          width="45%"
        >
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { ClientsInfo } from '@/store/modules/clients/clients-types';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RemoveClientDialog extends Vue {
  @Prop(Object) readonly client: ClientsInfo | undefined;

  @Prop(Boolean) readonly show: boolean | undefined;

  @Prop(Boolean) readonly loading: boolean | undefined;

  @Emit('onConfirm')
  handleConfirm(): void {}

  @Emit('onClose')
  handleClose(): void {}
}
</script>

<style lang="scss" scoped>
@import "@/shared/styles/dialog.scss";

</style>
