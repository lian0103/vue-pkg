<template>
  <div class="box">
    <div class="left">
      <ul>
        <li
          :class="index == currentSelected ? 'currentSelected' : ''"
          v-for="(item, index) in desData"
          :key="item.name"
          @click="handleItemClick(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="right">
      <template v-if="desData[currentSelected].name == 'v-title'">
        <v-title :color="'#f28500'"> Hello! </v-title>
      </template>
      <template v-if="desData[currentSelected].name == 'v-card'">
        <v-card>Card 1</v-card>
      </template>
      <template v-if="desData[currentSelected].name == 'v-check-list'">
        <v-check-list mode="CHECK" />
      </template>

      <template v-if="desData[currentSelected].name == 'v-scroll'">
       <div class="childPage">
          <vScrollPage title="Hello vScrollVue" :slides="{ total: 6 }" />
       </div>
      </template>

      <markdown-it-vue-light
        class="md-body"
        :content="desData[currentSelected].props"
        :options="markdownOptions"
      />
    </div>
  </div>
</template>

<script>
import { desData } from "./desData";
import MarkdownItVueLight from "markdown-it-vue/dist/markdown-it-vue-light.umd.min.js";
import { vTitle, vCard, vCheckList, vScrollPage } from "vue-pkg-wcs";

console.log(desData);

export default {
  name: "App",
  components: {
    MarkdownItVueLight,
    vTitle,
    vCard,
    vCheckList,
    vScrollPage,
  },
  data() {
    return {
      desData,
      currentSelected: 0,
      markdownOptions: {
        markdownIt: {
          linkify: true,
        },
        linkAttributes: {
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        },
      },
    };
  },
  methods: {
    handleItemClick(idx) {
      this.currentSelected = idx;
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.9/tailwind.min.css");

* {
  margin: 0;
  padding: 0;
}

.box {
  display: flex;
  overflow: hidden;
}
.left {
  width: 15%;
  height: 100vh;
  overflow-y: scroll;
}
.currentSelected {
  color: red;
}
.left li {
  padding: 10px 1rem;
  margin-top: 15px;
  cursor: pointer;
}
.right {
  width: 75%;
  margin: auto;
  padding: 20px;
  height: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
}

.md-body {
  font-size: 1.2rem;
  background-color: #eee;
  color: #444;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 1px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

.childPage{
  width: 100%;
}
</style>
