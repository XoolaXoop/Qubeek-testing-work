<script setup>
import {useFileStore} from '../store/file';
import FileList from './FileList.vue';
</script>

<template>
  <label
    for="dropzone-file"
    class="w-full py-1 h-16 flex flex-col justify-center items-center rounded cursor-pointer bg-slate-100 hover:bg-slate-300">
    <span class="text-center text-slate-400 text-sm">{{ placeholder }}</span>
    <input id="dropzone-file" type="file" @change="handleChange" class="hidden" />
  </label>
  <FileList />
</template>
<script>
export default {
  data() {
    return {
      file: '',
      placeholder: 'Перетащите файл в поле или нажмите на него',
    };
  },
  components: {
    FileList,
  },

  methods: {
    handleChange(event) {
      console.log(event.target.value);
      const fileName = String(event.target.value).split('\\').pop();
      const store = useFileStore();
      store.addFile({fileName: fileName, size: 2, extention: '.pdf'});
    },
  },
};
</script>

<style scope></style>
