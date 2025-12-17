<script setup>
import ContactlistHeader from "./components/ContactlistHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import Tablelist from "./components/Tablelist.vue";
import { onMounted, watch, ref, computed } from "vue";
import DB from "@/services/DB";

const contacts = ref([]);
const filteredContacts = ref(contacts.value);
onMounted(async () => {
  DB.setApiUrl("https://6942aaef69b12460f3124d89.mockapi.io/");
  const response = await DB.findAll();
  contacts.value.splice(contacts.value.length, 0, ...response);
  console.table(contacts);
});

const deleteContact = async (id) => {
  await DB.deleteOne(id);
  const index = contacts.value.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts.value.splice(index, 1);
  }
};

const updateContact = async (newData) => {
  const response = await DB.updateOne(newData);
};

const props = defineProps({ formData: { type: Object } });

const addContact = async () => {
  const response = await DB.create(props.formData);
  contacts.value.splice(contacts.value.length, 0, response);
};

const contactCount = computed(() => {
  return contacts.value.length;
});
const searchingArray = (searchValue) => {
  filteredContacts.value = contacts.value.filter(
    (contact) =>
      contact.firstname.toLowerCase().includes(searchValue) ||
      contact.lastname.toLowerCase().includes(searchValue) ||
      contact.email.toLowerCase().includes(searchValue)
  );
};

watch(props.formData, addContact);
watch(
  contacts,
  () => {
    filteredContacts.value = contacts.value;
  },
  { deep: true }
);
</script>
<template>
  <section class="w-2/3 p-6">
    <contactlist-header :numberContact="contactCount"></contactlist-header>
    <!-- Filtre de recherche -->
    <search-bar @on-search="searchingArray"></search-bar>
    <!-- Liste des contacts triée et filtrée -->
    <tablelist
      :contacts="contacts"
      :searchingArray="filteredContacts"
      @on-delete="deleteContact"
      @on-update="updateContact"
    ></tablelist>
  </section>
</template>
<style scoped></style>
