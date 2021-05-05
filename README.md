```
## 项目使用规则

### 该项目是用于编写嘻苑的子组件

#### 编写注意事项：项目中以分割线组件为例，注意内部不需要修改的部分，其他部分可随需求变化

#### 打包注意事项：
1、每个新项目使用时需要获取唯一的 key 并在 package.json 文件中将项目名称命名为该 key+‘edt/show’这样可以使得每一个子组件的项目都不重名(qiankun 才能正确加载)
2、同时需要修改 config-overrides.js 的 config.output.library 的值为该 key
3、当打包编辑组件时需要使用 indexEdt.js 文件作为入口文件，同时需要修改 config-overrides.js 文件 config.output.publicPath 的值为/public/micor/{该 key}/edt
4、当打包展示组件时需要使用 indexShow.js 文件作为入口文件，同时需要修改 config-overrides.js 文件 config.output.publicPath 的值为/public/micor/{该 key}/show
5、完成打包后需要分别将两个文件夹放入到同一个文件夹(命名为 该key)下，并将编辑组件的文件夹改名为edt，将展示组件的文件夹改名为show
6、将修改好的文件夹压缩为zip
7、将压缩文件在后台上传，同时填写并提交相应的信息即可
```
