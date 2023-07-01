<template>
  <div class="flex flex-col items-center justify-center w-2/5 gap-4">
    <FileInput />
    <OpenPage :path="'preview'" />
  </div>
</template>

<script>
import OpenPage from '../components/OpenPage.vue';
import FileInput from '../components/FileInput.vue';

export default {
  components: {
    OpenPage,
    FileInput,
  },
};
</script>
