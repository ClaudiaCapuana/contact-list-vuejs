<script setup>
const props = defineProps({
  firstnameValue: {
    type: String,
  },
  lastnameValue: {
    type: String,
  },
  emailValue: {
    type: String,
  },
});

const emit = defineEmits(["onSubmit"]);
const onSubmit = () => {
  emit("onSubmit", {
    firstnameValue: props.firstnameValue,
    lastnameValue: props.lastnameValue,
    emailValue: props.emailValue,
  });
  console.log(
    "j'ai cliqué le bouton add: " + props.firstnameValue + props.lastnameValue
  );
};
</script>
<template>
  <button
    type="submit"
    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
    @click="onSubmit"
  >
    Add
  </button>
</template>
<style></style>
