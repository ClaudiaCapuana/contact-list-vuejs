<script setup>
import ContactlistHeader from "./ui/ContactlistHeader.vue";
import SearchBar from "./ui/SearchBar.vue";
import Tablelist from "./ui/tablelist/Tablelist.vue";
</script>
<template>
  <section class="w-2/3 p-6">
    <contactlist-header></contactlist-header>
    <!-- Filtre de recherche -->
    <search-bar></search-bar>
    <!-- Liste des contacts triée et filtrée -->
    <tablelist></tablelist>
  </section>
</template>
<style scoped></style>
