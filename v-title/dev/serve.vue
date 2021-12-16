<script>
import Vue from 'vue';
import VTitle from '@/v-title.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VTitle
  }
});
</script>

<template>
  <div id="app">
    <v-title> I am in Slot!!</v-title>
  </div>
</template>
