<script>
import Vue from "vue";
import VCheckList from "../src/lib-components/v-check-list.vue";

export default Vue.extend({
    name: "ServeDev",
    components: { VCheckList },
    data(){
      return {
        title:"todo",
        list:['list~~1','list~~2','list~~1','list~~2','list~~1','list~~2']
      }
    }
});
</script>

<template>
  <div id="app">
    <v-title> I am in Slot!!😄</v-title>
    <v-card>
    <v-check-list :list="list" :list-title="title" mode="CHECK" /></v-card
    >

  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.9/tailwind.min.css");
</style>
