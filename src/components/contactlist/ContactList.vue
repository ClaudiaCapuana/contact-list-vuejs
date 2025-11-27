<script setup>
import ContactlistHeader from "./ui/ContactlistHeader.vue";
import SearchBar from "./ui/SearchBar.vue";
import Tablelist from "./ui/tablelist/Tablelist.vue";
import { onMounted, reactive, watch } from "vue";
import DB from "@/DB";
const contacts = reactive([]);
const deleteContact = async (id) => {
  await DB.deleteOne(id);
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
  }
};
const updateContact = async (newData) => {
  const response = await DB.updateOne(newData);
};

onMounted(async () => {
  DB.setApiUrl("https://68de7109d7b591b4b78f8da0.mockapi.io/");
  const response = await DB.findAll();
  contacts.splice(contacts.length, 0, ...response);
  console.table(contacts);
});

const props = defineProps({ formData: { type: Object } });

const AddContact = async () => {
  const response = await DB.create(props.formData);
  contacts.splice(contacts.length, 0, response);
};
watch(props.formData, AddContact);
</script>
<template>
  <section class="w-2/3 p-6">
    <contactlist-header></contactlist-header>
    <!-- Filtre de recherche -->
    <search-bar></search-bar>
    <!-- Liste des contacts triée et filtrée -->
    <tablelist
      :contacts="contacts"
      @on-delete="deleteContact"
      @on-update="updateContact"
    ></tablelist>
  </section>
</template>
<style scoped></style>
