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

    <v-dialog v-model="isDialogOpen" width="600px" style="z-index: 10">
      <v-card class="pa-6">
        <v-card-title>{{
          isEdit ? "Editar aluno" : "Adicionar aluno"
        }}</v-card-title>

        <v-form ref="form">
          <v-card-text class="d-flex flex-column ga-4">
            <v-text-field
              variant="outlined"
              label="Nome"
              :rules="rules.name"
              v-model="formDataStudant.name"
            />
            <v-text-field
              variant="outlined"
              label="Email"
              :rules="rules.email"
              v-model="formDataStudant.email"
            />
            <v-text-field
              variant="outlined"
              :disabled="isEdit"
              :rules="rules.ra"
              label="RA"
              v-maska:[optionsRa]
              v-model="formDataStudant.ra"
            />
            <v-text-field
              variant="outlined"
              :disabled="isEdit"
              :rules="rules.cpf"
              label="CPF"
              v-maska:[optionsCpf]
              v-model="formDataStudant.cpf"
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="text" @click="handleCancelModal"> Cancelar </v-btn>
            <v-btn variant="tonal" color="success" @click="onSubmit">
              Salvar
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isDialogConfirmOpen" width="600px" style="z-index: 10">
      <v-card class="pa-6">
        <v-card-title>Tem certeza que deseja excluir?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="handleCancelModal"> Cancelar </v-btn>
          <v-btn variant="tonal" color="success" @click="onDelete">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { vMaska } from "maska";
import { onMounted, reactive, ref, watch } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import logoSrc from "../src/assets/logo-mais-a-educacao.png";
import { ApiStudents } from "./services/apiSudents";

const defaultStudant = {
  name: "",
  email: "",
  cpf: "",
  ra: "",
};

const isDrawerOpen = ref(true);
const dataStudants = ref([]);
const inputSearch = ref("");
const isDialogOpen = ref(false);
const isDialogConfirmOpen = ref(false);
const isEdit = ref(false);
const itemToDelete = ref('')
const searchData = ref("");
const filterRows = ref([]);
const form = ref(null);
const formDataStudant = reactive({
  name: "",
  email: "",
  cpf: "",
  ra: "",
});

const $toast = useToast();
const apiStudents = ApiStudents();

const getData = async () => {
  try {
    const data = await apiStudents.getStudants();
    const dataSort = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    console.log(dataSort);
    dataStudants.value = dataSort;
    filterRows.value = dataSort;
  } catch (error) {
    $toast.error("Erro ao buscar dados no servidor");
  }
};

onMounted(() => {
  getData();
});

watch(inputSearch, () => {
  if (!inputSearch.value.length) {
    filterRows.value = dataStudants.value;
    searchData.value = "";
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

const optionsCpf = { mask: "###.###.###-##" };
const optionsRa = { mask: "##########" };

const rules = {
  email: [
    (value) => {
      if (value) {
        return true;
      }
      return "O email é obrigatório";
    },
    (value) => {
      if (value.includes("@")) {
        return true;
      }

      return "Email inválido";
    },
  ],
  cpf: [
    (value) => {
      if (value) {
        return true;
      }
      return "O CPF é obrigatório";
    },
    (value) => {
      if (value.length > 13) {
        return true;
      }

      return "CPF inválido";
    },
  ],
  name: [
    (value) => {
      if (value) {
        return true;
      }
      return "O nome é obrigatório";
    },
  ],
  ra: [
    (value) => {
      if (value) {
        return true;
      }
      return "O RA é obrigatório";
    },
  ],
};

const handleAddStudent = () => {
  Object.assign(formDataStudant, defaultStudant);
  isEdit.value = false;
  isDialogOpen.value = true;
};

const handleCancelModal = () => {
  isDialogOpen.value = false;
  isDialogConfirmOpen.value = false;
  Object.assign(formDataStudant, defaultStudant);
};

const onSearch = () => {
  searchData.value = inputSearch.value;
};

const handleEditStudant = (studant) => {
  isEdit.value = true;
  Object.assign(formDataStudant, studant);
  isDialogOpen.value = true;
};

const handleDelete = (id) => {
  itemToDelete.value = id;
  isDialogConfirmOpen.value = true;
};

const onDelete = async () => {
  try {
    await apiStudents.deleteStudant(itemToDelete.value);
    isDialogConfirmOpen.value = false;
    $toast.success("Aluno excluído com sucesso!");
    getData();
  } catch (error) {
    $toast.error(error.response.data.message || "Erro no servidor");
  }
};

const onSubmit = async () => {
  try {
    const isFormValid = await form.value.validate();
    if (isFormValid.valid == false) {
      return $toast.error("Dados de cadastro inválidos!");
    }

    if (isEdit.value == false) {
      delete formDataStudant.id;
      await apiStudents.createStudant(formDataStudant);
    } else {
      await apiStudents.updateStudant(formDataStudant, formDataStudant.id);
    }
    getData();
    isDialogOpen.value = false;
    Object.assign(formDataStudant, defaultStudant);
    $toast.success("Estudante salvo com sucesso!");
  } catch (error) {
    $toast.error(error.response.data.message || "Erro no servidor");
  }
};
</script>
