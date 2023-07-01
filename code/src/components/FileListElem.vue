<template>
  <div class="flex w-full gap-2 items-center">
    <FileIcon />
    <div class="flex flex-1">
      <div class="flex flex-col gap-px">
        <span class="text-slate-900 font-medium">{{ fileName }}</span>
        <span class="text-neutral-600 font-medium">{{ size }}</span>
      </div>
    </div>

    <button class="self-start" @click="handleClose"><CloseIcon /></button>
  </div>
</template>

<script>
import FileIcon from './FileIcon.vue';
import CloseIcon from './CloseIcon.vue';

export default {
  props: ['fileName', 'size', 'handleClose'],
  components: {
    FileIcon,
    CloseIcon,
  },
};
</script>
