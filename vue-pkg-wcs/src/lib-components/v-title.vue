<template>
  <h1 :style="styleObj"><slot></slot></h1>
</template>

<script>
export default {
  name: "v-title",
  props: {
    color: {
      type: String,
      default: "#f00",
    },
    fontSize: {
      type: String,
      default: "4rem",
    },
  },
  data() {
    return {
      styleObj: {
        color: this.color,
        fontSize: this.fontSize,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  padding: 0.2rem;
  text-align: center;
  margin: 0;
  span {
    font-style: italic;
  }
}
</style>
