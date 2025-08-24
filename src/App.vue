<script setup>
import Nav from "./components/Nav.vue";
import Game from "./components/Game.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav></Nav>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped></style>
