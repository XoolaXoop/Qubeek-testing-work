<template>
  <div class="flex flex-col items-center justify-center w-2/5 gap-4">
    <FileList />
    <OpenPage :path="'home'" />
  </div>
</template>

<script>
import OpenPage from '../components/OpenPage.vue';
import FileList from '../components/FileList.vue';
export default {
  components: {
    OpenPage,
    FileList,
  },
};
</script>
