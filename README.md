# publish vue component as an npm package 

## vue-sfc-rollup 使用教學
https://www.youtube.com/watch?v=0WqB6XwBCLc&ab_channel=CodewithBro

## vue-sfc-rollup

vue-sfc-rollup : https://www.npmjs.com/package/vue-sfc-rollup

## 實作結果
### 單一組件發布
https://www.npmjs.com/package/v-title-wc

### 多組件發布
https://www.npmjs.com/package/vue-pkg-wcs

## 使用範例

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

## 建立步驟

### 在已建立的 vue 專案下指令
```
// 第一次啟用時執行
sfc-init

//cmd example
sfc-init --version=${vue version} --mode=library --name=${lib name} --lang=js

```

### 已建立好的 pkg
pkg 結構      
./v-tilte -> 單一 vue 組件發布模式       
./vue-pkg-wcs library  -> 多個 vue 組件發布模式

### 發布流程
1.到指定的pkg資料夾
```
cd ${pkg資料夾}

//新pkg發布到npm前的需要先登入
npm adduser
```

2.更改package.json版號     
ex 1.0.1 -> 1.0.2

3.打包模組&發布
```
//參照sfc套件的腳本
npm run prebuild

npm run build

npm publish
```
