<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <HeaderView />
  <RouterView />
  <FooterView />
  
</template>

<style scoped>
</style>
<script>
import HeaderView from "./components/header.vue";
import FooterView from "./components/footer.vue";

export default {
  components: { HeaderView },
  components: { FooterView },
};
</script>

