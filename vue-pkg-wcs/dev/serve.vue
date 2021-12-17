<script>
import Vue from "vue";
//components are registered globally

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
