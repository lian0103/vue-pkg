<script>
import Vue from "vue";
// import VCheckList from "../src/lib-components/v-check-list.vue";
import vScrollVue from "../src/lib-components/v-scroll.vue";

export default Vue.extend({
    name: "ServeDev",
    components: { vScrollVue  },
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
    <vScrollVue title="Hello vScrollVue" :slides="{total:6}" />
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.9/tailwind.min.css");

#app{
  height: 140vh;
  overflow-x: hidden;
}
</style>
