## vue2 component

### 測試
1.在vue 專案中安裝
```
//example
npm uninstall <package name>

npm i vue-pkg-wcs

```

2.使用方式

方式A:
```
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
```

方式B:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.min.js' integrity='sha512-XdUZ5nrNkVySQBnnM5vzDqHai823Spoq1W3pJoQwomQja+o4Nw0Ew1ppxo5bhF2vMug6sfibhKWcNJsG8Vj9tg==' crossorigin='anonymous'></script>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.9/tailwind.min.css' integrity='sha512-SvJR34InARUfJb279ipE/gjQqX11MDKaly9MNb0vevuWQJmZ23UH7F/65ScEsvLI+myKGbdfA1En82wVSCHQ8A==' crossorigin='anonymous'/>
    <script src="https://unpkg.com/vue-pkg-wcs@1.0.6/dist/vue-pkg-wcs.min.js"></script>
    <!-- <script src="./vue-pkg-wcs/dist/vue-pkg-wcs.min.js"></script> -->
    <title>Vue-pkg-wcs</title>
</head>
<body>
    <div id="app">
        <v-title color="#444">
            組件測試發布unpkg.com
        </v-title>
        <v-card>
            https://unpkg.com/vue-pkg-wcs@1.0.5/dist/
        </v-card>

        <v-card>
            <v-check-list  mode="CHECK" />
        </v-card>

    </div>
    <script>
        const {vTitle,vCard,vCheckList} = VuePkgWcs;
        new Vue({
            el:"#app",
            components:{
                vTitle,vCard,vCheckList
            }
        })
    </script>
</body>
</html>
```