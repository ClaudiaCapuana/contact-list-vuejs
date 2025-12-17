<script setup>
const emit = defineEmits(["onSubmit"]);
const onSubmit = () => {
  emit("onSubmit");
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
