<template>
  <div class="flex flex-col items-center justify-center w-1/3 gap-4">
    <label
      for="dropzone-file"
      class="w-full py-1 h-16 flex flex-col justify-center items-center rounded cursor-pointer bg-slate-100 hover:bg-slate-300">
      <span class="text-center text-slate-400 text-sm">{{ placeholder }}</span>
      <input id="dropzone-file" type="file" @change="handleChange" class="hidden" />
    </label>
    <FileList>
      <FileListElem path="lalal" size="121" handleClose="() => console.log(`here`)" />
    </FileList>
  </div>
</template>
<script>
import FileList from './FileList.vue';
import FileListElem from './FileListElem.vue';
export default {
  data() {
    return {
      file: '',
      placeholder: 'Перетащите файл в поле или нажмите на него',
    };
  },
  components: {
    FileList,
    FileListElem,
  },
  mounted() {},
  methods: {
    handleChange(event) {
      data.file = event.target.value;
    },
  },
};
</script>

<style scope></style>
