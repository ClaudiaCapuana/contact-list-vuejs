<script setup>
import AddForm from "./components/addForm/AddForm.vue";
import AppFooter from "./components/AppFooter.vue";
import ContactList from "./components/contactlist/ContactList.vue";
import DB from "./DB";
</script>

<template>
  <!-- Section droite pour la liste des contacts -->
  <AddForm></AddForm>
  <ContactList></ContactList>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
