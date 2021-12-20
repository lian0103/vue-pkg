<template>
  <section class="card" :style="styleObj">
    <div class="cardInner">
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
      >
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2
            class="text-gray-900 text-lg title-font font-medium mb-2 text-red-600"
          >
            <slot></slot>
          </h2>
        </div>
      </div>
    </div>
  </section>
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

<style lang="scss" scoped>
@import "../../assets/main.scss";
.card {
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  box-shadow: 0 0 5px;
  color: $mainColor;
  .cardInner {
    @apply container px-5 py-24 mx-auto;
  }
}
</style>
