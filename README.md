# publish vue component as an npm package 

### 實作結果
demo: https://lian0103.github.io/vue-pkg/

### 配置專案
1.vue-sfc-rollup 
使用教學:https://www.youtube.com/watch?v=0WqB6XwBCLc&ab_channel=CodewithBro
vue-sfc-rollup doc:https://www.npmjs.com/package/vue-sfc-rollup

2.處理scss 編譯問題
https://reurl.cc/9523Vv


### 建立步驟
a.在已建立的 vue 專案下指令
```
// 第一次啟用時執行
sfc-init

//cmd example
sfc-init --version=${vue version} --mode=library --name=${lib name} --lang=js

```

### 發布流程
1.到指定的pkg資料夾
```
cd ${pkg資料夾}

//新pkg發布到npm前的需要先登入
npm add user
```

2.更改package.json版號     
ex 1.0.1 -> 1.0.2

3.打包模組&發布
```
//參照sfc套件的腳本
npm run prebuild

npm run build

//套件版本控制
npm version patch（向后兼容的 bug fix）
npm version minor （新需求且向后兼容）
npm version major（不兼容）
npm version prerelease --preid=alpha(测试版本)

//發步到npm 
npm publish
```
### 測試
a. unpkg     
參照test.html

b. npm 發布測試版
```
npm version prerelease --preid=${測試版}

npm publish --tag '測試版tag‘

-> 測試完成後回到正常發布流程

```
