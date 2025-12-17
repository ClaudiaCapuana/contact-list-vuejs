<script setup>
import AddButton from "./components/AddButton.vue";
import { store } from "@/stores/contacts";
import MyInput from "@/components/UI/MyInput.vue";
</script>
<template>
  <!-- Aside gauche pour le formulaire -->
  <aside class="w-1/3 bg-gray-200 p-6 pb-12">
    <h2 class="text-xl font-bold mb-4">Add a Contact</h2>
    <my-input v-model="store.formData.addFirstname" placeholder="Alex"
      >Firstname</my-input
    >
    <my-input v-model="store.formData.addLastname" placeholder="Doe"
      >Lastname</my-input
    >
    <my-input
      v-model="store.formData.addEmail"
      type="email"
      placeholder="alexdoe@gmail.com"
      >Email</my-input
    >

    <add-button @on-submit="store.createContact"></add-button>
  </aside>
</template>
<style scoped></style>
