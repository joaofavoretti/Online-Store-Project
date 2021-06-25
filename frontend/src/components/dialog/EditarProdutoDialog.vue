<template>
  <v-dialog
    @click:outside="handleClose"
    v-model="show"
    max-width="350px"
    id="dialog-class"
  >
    <v-card class="card-style">
      <v-img
        justify-self="center"
        v-if="product.src"
        :src="product.src"
        width="350px"
        height="350px"
      />
      <v-sheet
        justify="center"
        v-else
        color="grey"
        elevation="1"
        height="350"
        width="350"
      ></v-sheet>

      <div class="pt-6 px-3">
        <v-text-field
            label="Nome do ingrediente"
            placeholder="Nome do ingrediente"
            color="primary"
            outlined
            autocomplete="off"
            name="name"
            @blur="validate('name')"
            :error-messages="validator.errors.name"
            v-model="product.name"
          />

        <v-textarea
            label="Descrição"
            placeholder="Receitas possíveis"
            color="primary"
            outlined
            autocomplete="off"
            name="description"
            @blur="validate('description')"
            :error-messages="validator.errors.description"
            v-model="product.description"
          />

          <v-text-field
            label="Link para vídeo da receita"
            placeholder="URL video receita"
            color="primary"
            outlined
            autocomplete="off"
            name="youtubeEmbed"
            @blur="validate('youtubeEmbed')"
            :error-messages="validator.errors.youtubeEmbed"
            v-model="product.youtubeEmbed"
          />

          <v-text-field
            label="Link para imagem do ingrediente"
            placeholder="URL da imagem do ingrediente"
            color="primary"
            outlined
            autocomplete="off"
            name="src"
            @blur="validate('src')"
            :error-messages="validator.errors.src"
            v-model="product.src"
          />

          <v-row>
            <v-col cols=6>
              <v-text-field
                label="Preço"
                placeholder="Preço"
                color="primary"
                outlined
                autocomplete="off"
                name="price"
                @blur="validate('price')"
                :error-messages="validator.errors.price"
                v-model="product.price"
              />
            </v-col>
            <v-col cols=6>
              <v-text-field
                label="Quantidade"
                placeholder="Quantidade"
                color="primary"
                outlined
                autocomplete="off"
                name="quantity"
                type="number"
                min="1"
                max="50"
                @blur="validate('quantity')"
                :error-messages="validator.errors.quantity"
                v-model.number="product.quantity"
              />
            </v-col>
          </v-row>
      </div>

      <v-card-actions class="dialog-actions">
        <v-btn
          color="primary"
          block
          :loading="loading || false"
          @click="handleConfirm"
        >
          Atualizar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import YupFormValidator from '@/shared/yup/yup-form-validator';
import { ProductsInfo } from '@/store/modules/products/products-types';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import productEditSchema from '@/shared/validations/product-edit-validation-schema';

@Component
export default class EditarProdutoDialog extends Vue {
  @Prop(Object) product: ProductsInfo | undefined;

  @Prop(Boolean) readonly show: boolean | undefined;

  @Prop(Boolean) readonly loading: boolean | undefined;

  @Emit('onConfirm')
  handleConfirm(): void {}

  @Emit('onClose')
  handleClose(): void {}

  validator = {
    errors: {},
    isValid: false,
  };

  async validate(fieldname: keyof ProductsInfo): Promise<void> {
    this.validator = await YupFormValidator.validate(productEditSchema, fieldname, this.product);
  }
}
</script>

<style lang="scss" scoped>
@import "@/shared/styles/dialog.scss";

</style>
