// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 请注意，当前文件的后缀从 .js 改为了 .ts
// 如果你看到这行注释，请确认文件后缀是 .ts
// 然后就可以删掉本注释了!!!!!!!!!!!!!!!!

import { md } from "./plugins/md";
import { demo } from "./plugins/demo";
import vue from '@vitejs/plugin-vue'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), demo(), md()],
};
