<script setup>
import { reactive, onMounted } from "vue";
import AddForm from "./modules/addForm/AddForm.vue";
import AppFooter from "./layout/AppFooter.vue";
import ContactList from "./modules/contactlist/ContactList.vue";
import { store } from "./stores/contacts";

onMounted(async () => {
  await store.init("https://6942aaef69b12460f3124d89.mockapi.io/");
});
</script>

<template>
  <!-- Section droite pour la liste des contacts -->
  <AddForm></AddForm>
  <ContactList></ContactList>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
