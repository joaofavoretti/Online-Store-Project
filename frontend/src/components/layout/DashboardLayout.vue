<template>
  <div class="layout-container">
    <v-app-bar clipped-left color="primaryDark" class="header" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="brand">
        <img src="@/assets/logo.png" width="10%" />
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-card flat class="ma-4 sidebar">
      <v-navigation-drawer color="primary" dark  v-model="drawer" floating>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-icon>mdi-account</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Conta teste
              </v-list-item-title>
              <v-list-item-subtitle>teste@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list-item link :to="{ name: item.routerName }" v-for="item in navigationDrawerItems" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
    </v-card>

    <v-container class="content">
      <router-view />
    </v-container>
  </div>
</template>

<script lang="ts" src="./DashboardLayout.component" />

<style lang="scss" scoped>
@import "@/shared/styles/colors.scss";

.layout-container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: min-content;
  grid-template-areas:
    "header header"
    "sidebar content";

  .header {
    grid-area: header;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .content {
    grid-area: content;
  }
}

.brand {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.active {
  color: color-theme(primary);
}
</style>
