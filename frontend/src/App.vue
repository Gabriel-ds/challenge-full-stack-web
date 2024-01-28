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

    <v-main>
      <v-container>

      <v-card flat class="border mb-4">
          <v-table fixed-header>
            <thead>
              <tr>
                <th>Registro Acadêmico</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="studant in filterRows" :key="studant.id">
                <td>{{ studant.ra }}</td>
                <td>{{ studant.name }}</td>
                <td>{{ studant.cpf }}</td>
                <td>
                  <div>
                    <v-btn
                      icon="mdi-pencil"
                      variant="plain"
                      @click="() => handleEditStudant(studant)"
                    />
                    <v-btn
                      icon="mdi-delete"
                      variant="plain"
                      @click="() => handleDelete(studant.id)"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
        <div style="display: flex; justify-content: center">
          <span v-if="!dataStudants.length"
            >Não existem alunos cadastrados</span
          >
          <span v-else-if="!filterRows.length && dataStudants.length"
            >Busca não encontrada</span
          >
        </div>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from "vue";
import logoSrc from "../src/assets/logo-mais-a-educacao.png";
import { ApiStudents } from "./services/apiSudents";

const isDrawerOpen = ref(true);
const dataStudants = ref([]);
const filterRows = ref([]);

const apiStudents = ApiStudents();


  
const getData = async () => {
  try {
    const data = await apiStudents.getStudants();
    const dataSort = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    console.log(dataSort);
    dataStudants.value = dataSort;
    filterRows.value = dataSort;
  } catch (error) {
    console.log("ERRO ==>", error);
  }
};

onMounted(() => {
  getData();
});
</script>
