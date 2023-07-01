<template>
  <div class="flex items-center justify-center">
    <button class="w-36 border rounded" v-if="shouldShowButton('home')" @click="goToHomePage">Home</button>
    <button class="w-36 border rounded" v-if="shouldShowButton('preview')" @click="goToPreviewPage">Preview</button>
  </div>
</template>

<script>
export default {
  props: ['path'],
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
    goToPreviewPage() {
      this.$router.push('/preview');
    },
    shouldShowButton(page) {
      return this.path === page;
    },
  },
};
</script>
