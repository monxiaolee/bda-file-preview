'use strict';

import {preview} from "./components/preview";
import helper from "./components/preview/helper";

// 定义 install 方法
const install = function (Vue, options) {

  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$xdOptions = options;
  Vue.prototype.$preview = (options)=>{
    preview(options, Vue);
  };
  Vue.prototype.$fileHelper = helper;
  console.log('Vue.use()=> options', options);

};

if (typeof window !== 'undefined' && window['Vue']) {
  install(window['Vue'])
}

export default {
  install
}
