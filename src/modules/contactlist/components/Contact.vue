<script setup>
import { reactive } from "vue";
const props = defineProps({
  contact: { type: Object },
  edit: { type: Boolean },
});
const editedContact = reactive({ ...props.contact });
const emit = defineEmits(["onDelete", "onUpdate", "onEditing"]);
const onDelete = () => {
  emit("onDelete", props.contact.id);
};
const onEditing = () => {
  emit("onEditing", props.contact.id);
};

const saveEdit = () => {
  emit("onUpdate", editedContact);
};
</script>
<template>
  <tr class="contact-row" :class="edit ? 'isEditing' : ''">
    <td class="p-4">
      <span class="isEditing-hidden">{{ editedContact.firstname }}</span>
      <input
        type="text"
        class="input-firstname isEditing-visible w-full mt-1 block px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        v-model="editedContact.firstname"
      />
    </td>
    <td class="p-4">
      <span class="isEditing-hidden">{{ editedContact.lastname }}</span>
      <input
        type="text"
        class="input-lastname isEditing-visible w-full mt-1 block px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        v-model="editedContact.lastname"
      />
    </td>
    <td class="p-4">
      <span class="isEditing-hidden">{{ editedContact.email }}</span>
      <input
        type="text"
        class="input-email isEditing-visible w-full mt-1 block px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        v-model="editedContact.email"
      />
    </td>
    <td class="p-4">
      <div class="flex justify-end space-x-2">
        <button
          class="btn-check isEditing-visible bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
          @click="saveEdit"
        >
          <i class="fa-solid fa-check"></i>
        </button>
        <button
          class="btn-edit isEditing-hidden bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
          @click="onEditing"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          @click="onDelete"
          class="btn-delete isEditing-hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </td>
  </tr>
</template>
<style scoped></style>
