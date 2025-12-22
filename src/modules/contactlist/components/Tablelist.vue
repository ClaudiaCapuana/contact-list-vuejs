<script setup>
import Contact from "./Contact.vue";
const props = defineProps({
  filteredContacts: { type: Array },
  edit: { type: Number },
});
const emit = defineEmits(["onDelete", "onUpdate", "onEditing", "onSort"]);
const onDelete = (id) => {
  emit("onDelete", id);
};
const onUpdate = (newData) => {
  emit("onUpdate", newData);
};
const onEditing = (id) => {
  emit("onEditing", id);
};
const onSort = (e) => {
  emit("onSort", e.currentTarget.innerText);
};
</script>
<template>
  <table class="table-auto w-full contacts-table">
    <thead>
      <tr class="bg-gray-200">
        <th class="text-left p-4 rounded-tl-lg">
          <a href="#" @click.prevent="onSort">Firstname</a>
        </th>
        <th class="text-left p-4">
          <a href="#" @click.prevent="onSort">Lastname</a>
        </th>
        <th class="text-left p-4">
          <a href="#" @click.prevent="onSort">Email</a>
        </th>
        <th class="text-right p-4 rounded-tr-lg">Actions</th>
      </tr>
    </thead>
    <tbody>
      <contact
        v-for="contact in props.filteredContacts"
        :key="contact.id"
        :contact="contact"
        @onDelete="onDelete"
        @on-update="onUpdate"
        @on-editing="onEditing"
        :edit="props.edit === contact.id"
      ></contact>
    </tbody>
  </table>
</template>
<style scoped></style>
