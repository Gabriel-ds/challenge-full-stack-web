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

        <h1 class="mb-6 text-h4">Consulta de alunos</h1>

        <div style="display: flex; align-items: self-start; gap: 2rem">
          <v-text-field
            variant="outlined"
            label="Pesquisar"
            placeholder="Nome, RA ou CPF"
            append-inner-icon="mdi-magnify"
            v-model="inputSearch"
            @keydown="(e) => e.key == 'Enter' && onSearch()"
            @click:append-inner="onSearch"
          />

          <v-btn @click="handleAddStudent" variant="tonal" class="mt-2"
            >Adicionar aluno</v-btn
          >
        </div>

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
import { onMounted, ref, watch } from "vue";
import logoSrc from "../src/assets/logo-mais-a-educacao.png";
import { ApiStudents } from "./services/apiSudents";

const isDrawerOpen = ref(true);
const dataStudants = ref([]);
const filterRows = ref([]);
const inputSearch = ref("");
const searchData = ref("");

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

watch(inputSearch, () => {
  if (!inputSearch.value.length) {
    filterRows.value = dataStudants.value;
    searchData.value = ''
  }
});

watch(searchData, () => {
  const filter =
    dataStudants.value &&
    dataStudants.value.filter(
      (student) =>
        student.name
          .toLocaleLowerCase()
          .includes(searchData.value.toLocaleLowerCase()) ||
        student.ra
          .toLocaleLowerCase()
          .includes(searchData.value.toLocaleLowerCase()) ||
        student.cpf
          .toLocaleLowerCase()
          .includes(searchData.value.toLocaleLowerCase())
    );
  filterRows.value = filter;
});

const onSearch = () => {
  console.log(inputSearch.value)
  searchData.value = inputSearch.value;
};
</script>
