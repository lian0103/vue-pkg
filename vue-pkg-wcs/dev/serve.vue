<script>
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
});
</script>

<template>
  <div id="app">
    <v-title> I am in Slot!!😄</v-title>
    <v-card>
      <div>I am in card!!</div>
      <div>I am in card!!</div>
      <div>I am in card!!</div></v-card
    >
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.9/tailwind.min.css");
</style>
