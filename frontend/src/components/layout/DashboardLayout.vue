<template>
  <div class="layout-container">
    <v-app-bar clipped-left color="primaryDark" class="header" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="brand">
        <img src="@/assets/logo.svg" width="20%" />
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="primary" dark clipped class="sidebar" v-model="drawer">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
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
