<script setup>
import ContactlistHeader from "./ui/ContactlistHeader.vue";
import SearchBar from "./ui/SearchBar.vue";
import Tablelist from "./ui/tablelist/Tablelist.vue";
import { onMounted, reactive } from "vue";
import DB from "@/DB";
const contacts = reactive([]);

onMounted(async () => {
  DB.setApiUrl("https://68de7109d7b591b4b78f8da0.mockapi.io/");
  const response = await DB.findAll();
  contacts.splice(contacts.length, 0, ...response);
  console.table(contacts);
});
</script>
<template>
  <section class="w-2/3 p-6">
    <contactlist-header></contactlist-header>
    <!-- Filtre de recherche -->
    <search-bar></search-bar>
    <!-- Liste des contacts triée et filtrée -->
    <tablelist :contacts="contacts"></tablelist>
  </section>
</template>
<style scoped></style>
