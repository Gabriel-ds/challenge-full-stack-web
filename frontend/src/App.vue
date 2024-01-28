<template>
  <v-app theme="dark">

    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Módulo acadêmico</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account" active>Alunos</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon
        @click="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>
      <img :src="logoSrc" height="50px" alt="my-logo" class="ml-3" />

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>
        <v-avatar>
          <v-img
            cover
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          ></v-img>
        </v-avatar>
      </template>
    </v-app-bar>
    <v-main> </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logoSrc from "../src/assets/logo-mais-a-educacao.png";

const isDrawerOpen = ref(true);
</script>
