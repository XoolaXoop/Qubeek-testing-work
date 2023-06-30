<script setup>
import FileInput from './components/FileInput.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <FileInput />
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
    };
  },
};
</script>
