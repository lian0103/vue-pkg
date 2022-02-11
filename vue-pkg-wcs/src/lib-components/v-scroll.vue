<template>
  <div class="wrapper" :style="isWholePage?'100vw':'100%'">
    <div v-if="isWholePage" class="head"></div>
    <div class="ani-bg" :class="scroll ? 'scroll' : ''">
      <div class="outbox">
        <div
          class="bg-slide"
          :class="{ active: active == idx || preActive == idx }"
          :style="getImgStyle(item)"
          v-for="(item, idx) in bgArrValided"
        />
      </div>
      <div class="title" :class="scroll ? 'scroll' : ''">
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-scroll",
  props: {
    title: {
      type: String,
      default: "Scroll & Bg Animation",
    },
    aniDuration: {
      type: Number,
      default: 10,
    },
    slides: {
      type: Object,
      default: {
        total: 5,
      },
    },
    isWholePage:{
      type:Boolean,
      default:false,
    }
  },
  computed: {
    bgArrValided() {
      let arr = Array(this.slides.total)
        .fill(0)
        .map((i, idx) => {
          return `https://picsum.photos/1920/800?random=${idx + 1}`;
        });
      return arr;
    },
  },
  data() {
    return {
      scroll: false,
      preActive: 0,
      active: 1,
    };
  },
  methods: {
    getImgStyle(item) {
      return {
        background: `url(${item})`,
        animationDuration: `${this.aniDuration}s`,
      };
    },
  },
  mounted() {
    setInterval(() => {
      this.preActive = this.active;
      this.active =
        (this.active + 1 + this.bgArrValided.length) % this.bgArrValided.length;
    }, (this.aniDuration / 2) * 1000);

    window.addEventListener("scroll", () => {
      this.scroll = window.scrollY > 0;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";

.wrapper {
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* background-color: orangered; */
}

.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: #ccc;
  z-index: 2;
}

.ani-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: width 0.5s, height 0.5s;
}

.scroll.ani-bg {
  width: 1200px;
  height: 300px;
}

.outbox {
  position: relative;
  width: 100%;
  height: 100%;
}

.title {
  position: absolute;
  left: 50%;
  bottom: -100px;
  transform: translateX(-50%);
  z-index: 2;
}

.title h2 {
  font-size: 3rem;
}

.bg-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.bg-slide.active {
  animation-name: bg-ani-keyframes;
  animation-timing-function: linear;
}

@keyframes bg-ani-keyframes {
  0% {
    opacity: 0;
    background-size: 150% auto;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  to {
    opacity: 0;
    background-size: 120% auto;
  }
}

@keyframes bg-ani-keyframes-small {
  0% {
    opacity: 0;
    background-size: auto 180%;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  to {
    opacity: 0;
    background-size: auto 120%;
  }
}

@media screen and (max-width: 960px) {
  .ani-bg {
    top: 35%;
  }

  .title {
    position: absolute;
    left: 50%;
    bottom: -70px;
    transform: translateX(-50%);
    z-index: 2;
  }

  .title h2 {
    width: 100vw;
    font-size: 2rem;
    text-align: center;
  }

  .scroll.ani-bg {
    width: 100%;
    height: 300px;
  }

  .bg-slide.active {
    animation-name: bg-ani-keyframes-small;
    animation-timing-function: linear;
  }
}
</style>
