<script setup>
const props = defineProps({ modelValue: { type: String } });
const emit = defineEmits(["update:modelValue"]);
const onSearch = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>
<template>
  <div class="mb-4">
    <input
      type="text"
      class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="Search a contact"
      @input="onSearch"
    />
  </div>
</template>
<style scoped></style>
