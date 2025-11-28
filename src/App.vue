<script setup>
import { reactive } from "vue";
import AddForm from "./components/addForm/AddForm.vue";
import AppFooter from "./components/AppFooter.vue";
import ContactList from "./components/contactlist/ContactList.vue";

const formData = reactive({});

const getFormData = (data) => {
  Object.assign(formData, data);
};
</script>

<template>
  <!-- Section droite pour la liste des contacts -->
  <AddForm @on-submit="getFormData"></AddForm>
  <ContactList :formData="formData"></ContactList>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
