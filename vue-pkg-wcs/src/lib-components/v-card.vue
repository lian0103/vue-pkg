<template>
  <div class="card" :style="styleObj"><slot></slot></div>
</template>

<script>
export default {
  name: "v-card",
  props: {
    width: {
      type: String,
      default: "400px",
    },
    flexWrap: {
      type: String,
      default: "wrap",
    },
    display: {
      type: String,
      default: "flex",
    },
  },
  data() {
    return {
      styleObj: {
        width: this.width,
        flexWrap: this.flexWrap,
        display: this.display,
      },
    };
  },
};
</script>

<style>
.card {
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  font-size: 2rem;
  background-color: rgba(0,0,0,.3);
  border-radius: 1rem;
  box-shadow: 0 0 5px;
}
</style>
