<template>
  <div class="p-4 w-full">
    <h2
      class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left"
    >
      {{ listTitle }}
    </h2>
    <nav
      class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5"
    >
      <span
        v-for="(item, index) in listWithUuid"
        :key="item.uuid"
        @click="
          () => {
            handleClick(item);
          }
        "
        :class="
          mode == 'CHECK' && deleteArr.includes(item.uuid)
            ? 'line-through text-red-500'
            : 'text-black'
        "
        class="cursor-pointer"
      >
        <span
          class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            class="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg> </span
        >{{ item.str }}
      </span>
    </nav>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "v-check-list",
  data() {
    return {
      deleteArr: [],
    };
  },
  props: {
    listTitle: {
      type: String,
      default: "list title",
    },
    list: {
      type: Array,
      default: ["First", "Second"],
    },
    mode: {
      type: String,
      default: "NONE",
    },
    clickCallback: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    listWithUuid() {
      let result = this.list.map((str) => {
        return {
          uuid: uuidv4(),
          str: str,
        };
      });
      return result;
    },
  },
  methods: {
    handleClick(item) {
      //   console.log(item);
      this.clickCallback(item, this.listWithUuid, this.deleteArr);

      if (!this.deleteArr.includes(item.uuid)) {
        this.deleteArr.push(item.uuid);
      } else {
        this.deleteArr = this.deleteArr.filter((id) => id != item.uuid);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
