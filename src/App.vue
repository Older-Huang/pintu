<script setup lang="ts">
// import Main from './packages/Jigsaw.vue'
import Jigsaw from '../dist'
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <Main :row="4" :col="4" /> -->
      <Jigsaw img="./src/assets/default.png" :row="4" :col="4" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    border: 3px solid #ccc;
    width: 600px;
    height: 630px;
    margin: 20px auto;
  }
}
</style>
