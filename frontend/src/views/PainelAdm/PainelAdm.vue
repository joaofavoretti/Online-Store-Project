<template>
  <v-container>
    <div class="painel-header py-16">
      <h1>Painel Administrador</h1>
    </div>

    <div class="painel-ingredientes">
      <div class="painel-ingredientes-header mb-4">
        <h1>Ingredientes cadastrados</h1>
        <v-btn color="primary" @click="addProduto">Adicionar produto</v-btn>
      </div>
      <v-data-table
        locale="pt-BR"
        :headers="productHeaders"
        :items="getProducts"
        :loading="getProductsLoading"
        no-data-text="Desculpe, mas não foi encontrado nenhum ingrediente."
        :header-props="{
          sortIcon: 'mdi-chevron-up',
        }"
        loading-text="Carregando dados"
        :items-per-page="5"
        :footer-props="{
          'items-per-page-all-text': 'Todos',
          'items-per-page-text': 'Máximo de itens por página',
          'show-current-page': true,
          'first-icon': 'mdi-chevron-right',
          'next-icon': 'mdi-chevron-right',
          'last-icon': 'mdi-chevron-left',
          'prev-icon': 'mdi-chevron-left',
        }"
        class="elevation-1"
      >
        <template v-slot:[`item.name`]="{ item }">
          {{ item.name }}
        </template>
        <template v-slot:[`item.price`]="{ item }">
          {{ item.price | toCurrency }}
        </template>
        <template v-slot:[`item.quantity`]="{ item }">
          {{ item.quantity }}
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                color="gray"
                v-bind="attrs"
                v-on="on"
                @click="handleEditProdut(item._id)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <span>Editar ingrediente</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>

    <div class="painel-ingredientes mt-8">
      <div class="painel-ingredientes-header mb-4">
        <h1>Clientes cadastrados</h1>
      </div>
      <v-data-table
        locale="pt-BR"
        :headers="clientHeaders"
        :items="getClients"
        :loading="getClientsLoading"
        :items-per-page="5"
        no-data-text="Desculpe, mas não foi encontrado nenhum cliente."
        :header-props="{
          sortIcon: 'mdi-chevron-up',
        }"
        loading-text="Carregando dados"
        :footer-props="{
          'items-per-page-all-text': 'Todos',
          'items-per-page-text': 'Máximo de itens por página',
          'show-current-page': true,
          'first-icon': 'mdi-chevron-right',
          'next-icon': 'mdi-chevron-right',
          'last-icon': 'mdi-chevron-left',
          'prev-icon': 'mdi-chevron-left',
        }"
        class="elevation-1"
      >
        <template v-slot:[`item.name`]="{ item }">
          {{ item.name }}
        </template>
        <template v-slot:[`item.phone`]="{ item }">
          {{ item.phone }}
        </template>
        <template v-slot:[`item.email`]="{ item }">
          {{ item.email }}
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn text color="red" @click="handleRemoveClient(item.id)"
            >Remover</v-btn
          >
        </template>
      </v-data-table>
    </div>

    <RemoveClientDialog
      :show="showRemoveClient"
      :loading="getClientsLoading"
      :client="client"
      @onClose="showRemoveClient = false"
      @onConfirm="removeClient"
    />

    <EditarProdutoDialog
      :show="showEditProduct"
      :loading="getProductsLoading"
      :product="product"
      @onClose="showEditProduct = false"
      @onConfirm="saveProduct"
    />
  </v-container>
</template>

<script lang="ts" src="./PainelAdm.component" />

<style lang="scss">
@import "@/shared/styles/colors.scss";

.painel-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.painel-ingredientes {
  .painel-ingredientes-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: $secondary;
      font-size: 20px;
    }
  }
}
</style>
