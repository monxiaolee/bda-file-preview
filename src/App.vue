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
  import BdaFileListPreview from "@/components/BdaFileListPreview";

  export default {
    name: 'app',
    components: {BdaFileListPreview},
    data() {
      return {
        list: [
          {url: ''},
          {url: ''},
          {url: '', name: 'aaaa'},
          {
            url: '',
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
        console.log('aaaaaaaa')
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
          url: ''
        })
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
