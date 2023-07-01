<script setup>
import {useFileStore} from '../store/file';
import FileListElem from './FileListElem.vue';
</script>

<template>
  <div class="flex w-full gap-2 flex-col">
    <FileListElem
      v-for="file in files"
      :key="file.fileName"
      :fileName="file.fileName"
      :size="file.size"
      :handleClose="() => removeFile(file)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    };
  },
  mounted() {
    const store = useFileStore();
    this.files = store.getAllFiles();
  },
  components: {
    FileListElem,
  },
  methods: {
    removeFile(file) {
      const store = useFileStore();
      store.removeFile(file);
    },
  },
};
</script>
