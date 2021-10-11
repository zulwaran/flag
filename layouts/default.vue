<template>
  <div>
    <div class="border">
      <Header />
    </div>
    <nuxt />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
};
</script>

<style>
.border {
  border-bottom: 1px solid #3c3c3c;
}
</style>