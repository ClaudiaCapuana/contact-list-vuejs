<script setup>
import FirstnameInput from "./ui/FirstnameInput.vue";
import LastnameInput from "./ui/LastnameInput.vue";
import EmailInput from "./ui/EmailInput.vue";
import AddButton from "./ui/AddButton.vue";
import { ref } from "vue";

const firstnameValue = ref("");
const lastnameValue = ref("");
const emailValue = ref("");

const onFirstname = (firstname) => {
  if (firstname) {
    firstnameValue.value = firstname;
  }
  console.log("j'ai récupéré dans add form: " + firstname);
};
const onLastname = (lastname) => {
  if (lastname) {
    lastnameValue.value = lastname;
    console.log("j'ai récupéré dans add form: " + lastname);
  }
};
const onEmail = (email) => {
  if (email) {
    emailValue.value = email;
    console.log("j'ai récupéré dans add form: " + email);
  }
};

const emit = defineEmits(["onSubmit"]);
const onSubmit = (data) => {
  emit("onSubmit", data);
};
</script>
<template>
  <!-- Aside gauche pour le formulaire -->
  <aside class="w-1/3 bg-gray-200 p-6 pb-12">
    <h2 class="text-xl font-bold mb-4">Add a Contact</h2>
    <firstname-input @on-input="onFirstname"></firstname-input>
    <lastname-input @on-input="onLastname"></lastname-input>
    <email-input @on-input="onEmail"></email-input>
    <add-button
      :firstnameValue="firstnameValue"
      :lastnameValue="lastnameValue"
      :emailValue="emailValue"
      @on-submit="onSubmit"
    ></add-button>
  </aside>
</template>
<style scoped></style>
