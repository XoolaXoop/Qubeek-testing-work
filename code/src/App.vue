<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <router-view></router-view>
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
