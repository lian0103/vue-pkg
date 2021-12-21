# publish vue component as an npm package 

## vue-sfc-rollup 使用教學
https://www.youtube.com/watch?v=0WqB6XwBCLc&ab_channel=CodewithBro

## 處理scss 編譯問題
https://reurl.cc/9523Vv

## vue-sfc-rollup

vue-sfc-rollup : https://www.npmjs.com/package/vue-sfc-rollup

## 實作結果
### 單一組件發布
https://www.npmjs.com/package/v-title-wc

### 多組件發布
https://www.npmjs.com/package/vue-pkg-wcs

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

npm version patch（向后兼容的 bug fix）
npm version minor （新需求且向后兼容）
npm version major（不兼容）
npm version prerelease --preid=alpha(测试版本)

npm publish
```
## unpkg測試
參照test.html

## npm 發布測試版
```
npm version prerelease --preid=${測試版}

npm publish --tag '測試版tag‘

-> 測試完成後回到正常發布流程

```