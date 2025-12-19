<script setup>
import ContactlistHeader from "./components/ContactlistHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import Tablelist from "./components/Tablelist.vue";
import { onMounted, watch, ref, computed } from "vue";
import DB from "@/services/DB";
import { store } from "@/stores/contacts";

// const filteredContacts = ref(contacts.value);

// const searchingArray = (searchValue) => {
//   filteredContacts.value = store.contacts.filter(
//     (contact) =>
//       contact.firstname.toLowerCase().includes(searchValue) ||
//       contact.lastname.toLowerCase().includes(searchValue) ||
//       contact.email.toLowerCase().includes(searchValue)
//   );
// };

// watch(props.formData, addContact);
// watch(
//   contacts,
//   () => {
//     filteredContacts.value = contacts.value;
//   },
//   { deep: true }
// );
</script>
<template>
  <section class="w-2/3 p-6">
    <contactlist-header
      :numberContact="store.contactCount"
    ></contactlist-header>
    <!-- Filtre de recherche -->
    <search-bar @on-search="searchingArray"></search-bar>
    <!-- Liste des contacts triée et filtrée -->
    <tablelist
      :contacts="store.contacts"
      :searchingArray="store.filteredContacts"
      @on-delete="store.deleteContact"
      @on-update="store.updateContact"
      @on-editing="store.editing"
      :edit="store.editClass"
    ></tablelist>
  </section>
</template>
<style scoped></style>
