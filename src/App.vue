<template>
  <div class="box">
    <v-title color="#ccc" fontSize="100px"> pkg: v-title-wc</v-title>
    <br />
    <v-title-wc> pkg: v-title-wcs </v-title-wc>
    <v-card>Hello~ Card</v-card>
    <v-card>Hello~ Card</v-card>
  </div>
</template>

<script>
import vTitle from "v-title-wc";
import { vTitle as vTitleWc, vCard } from "vue-pkg-wcs";

export default {
  name: "App",
  components: {
    vTitle,
    vCard,
    vTitleWc,
  },
};
</script>
