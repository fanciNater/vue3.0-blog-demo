<!--
 * @Author: your name
 * @Date: 2021-03-15 15:38:11
 * @LastEditTime: 2021-03-23 16:15:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vsCodeProjects/demo/vue-study/blogs-admin/src/views/Home.vue
-->
<template>
  <div class="home">
    {{ data }}
    <page-header></page-header>
  </div>
</template>

<script>
// @ is an alias to /src'
import PageHeader from "../components/page-header/index";
export default {
  name: "Home",
  components: {
    PageHeader
  },
  setup() {
    const data = "测试setup 方法1112";

    return { data };
  }
};
</script>
