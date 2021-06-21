<template>
  <v-dialog @click:outside="handleClose" v-model="show" max-width="480">
    <v-card class="dialog-content">
      <div class="dialog-header">
        <v-icon size="35" color="primary">mdi-alert</v-icon>
        <span>
          <template>{{ title }}</template>
        </span>
      </div>

      <v-card-text class="dialog-content-text">
        <span class="dialog-description">
          {{ description }}
        </span>
      </v-card-text>

      <v-card-actions class="dialog-actions">
        <v-btn color="primary" large width="45%" @click="handleClose" outlined>
          Voltar
        </v-btn>
        <v-btn
          color="primary"
          large
          :loading="loading || false"
          @click="handleConfirm"
          width="45%"
        >
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ConfirmationDialog extends Vue {
  @Prop(String) readonly title: string | undefined

  @Prop(String) readonly description: string | undefined

  @Prop(Boolean) readonly show: boolean | undefined

  @Prop(Boolean) readonly loading: boolean | undefined

  @Emit('onConfirm')
  handleConfirm():void {}

  @Emit('onClose')
  handleClose():void {}
}
</script>

<style lang="scss" scoped>
@import '@/shared/styles/dialog.scss';
</style>
