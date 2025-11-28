<script setup>
import ContactlistHeader from "./ui/ContactlistHeader.vue";
import SearchBar from "./ui/SearchBar.vue";
import Tablelist from "./ui/tablelist/Tablelist.vue";
import { onMounted, watch, ref, computed } from "vue";
import DB from "@/DB";

const contacts = ref([]);
onMounted(async () => {
  DB.setApiUrl("https://68de7109d7b591b4b78f8da0.mockapi.io/");
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

watch(props.formData, addContact);
</script>
<template>
  <section class="w-2/3 p-6">
    <contactlist-header :numberContact="contactCount"></contactlist-header>
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
