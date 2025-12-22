<script setup>
import ContactlistHeader from "./components/ContactlistHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import Tablelist from "./components/Tablelist.vue";
import { store } from "@/stores/contacts";
</script>
<template>
  <section class="w-2/3 p-6">
    <contactlist-header
      :numberContact="store.contactCount"
    ></contactlist-header>
    <!-- Filtre de recherche -->
    <search-bar v-model="store.searchValue"></search-bar>
    <!-- Liste des contacts triée et filtrée -->
    <tablelist
      :filteredContacts="store.filteredContacts"
      @on-delete="store.deleteContact"
      @on-update="store.updateContact"
      @on-editing="store.editing"
      @on-sort="store.toggleSort"
      :edit="store.editClass"
    ></tablelist>
  </section>
</template>
<style scoped></style>
