# bda-vue-file-preview

#### 介绍
```text
vue 文件在线预览展示功能，支持文件（PDF，PNG，JPEG，JPG，GIF，DOC，DOCX，PPT，PPTX，ELXS，ELX）
```

#### 安装
```bash

npm i bda-file-preview --save --registry
```

#### 插件全局引用
``` javascript

import vueFilePreview from 'bda-file-preview';

//初始化自定义插件，（pdf.js,worker.js文件建议放在本地服务器),cdn有可能不稳定
Vue.use(vueFilePreview,{
    pdf: 'pdf.min.js', //pdf插件
    worker:'pdf.worker.min.js',//pdf.work插件
});

```


#### 插件使用
```vue
<template>
  <div id="app"></div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data(){
      return {}
    },
    created() {
      setTimeout(()=>{
        this.$preview({
          url:'http://***.pdf',
          fid: '12121212'
        })
      }, 2000);

    },
    methods:{

    }
  }
</script>

<style>
</style>
```

```vue
<template>
    <div id="app">
        <h1>列表展示</h1>
        <bda-file-list-preview :list="list" @remove="handleRemoveClick"></bda-file-list-preview>
        <hr>
        <h1>文件预览模式</h1>
        <a @click="handleClick" style="color: #4285f4">9958ff80d202f91b347b14b5c56f14e811</a>
    </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {
        list: [
          {url: ''},
          {url: 'http://**.pdf'},
          {url: '', name: 'aaaa'},
          {
            url: 'http://**.pdf',
            name: 'aaaa',
            fid: 'aadadads'
          },
        ]
      }
    },
    created() {
    },
    methods: {
      /**
       * @description 删除图片事件
       * @param item {Object} 当前被删除的文件对象
       * @param done {function} 删除文件完成回调函数
       */
      handleRemoveClick(item, done) {
        setTimeout(() => {
          console.log('handleRemoveClick', item);
          done()
        }, 2000);
      },

      /**
       * @description 点击查看预览功能
       */
      handleClick() {
        this.$preview({
          url: 'http://**.pdf',
          fid: 'aadadads'
        })
      },
    }
  }
</script>

<style>
</style>
```

