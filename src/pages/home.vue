<!--
 * @Author: your name
 * @Date: 2021-03-15 15:38:11
 * @LastEditTime: 2021-03-15 17:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vsCodeProjects/demo/vue-study/blogs-admin/src/views/Home.vue
-->
<template>
  <div class="home">
    <page-header></page-header>
  </div>
</template>

<script>
// @ is an alias to /src'
import PageHeader from "@/components/header";
export default {
  name: "Home",
  components: {
    PageHeader
  }
};
</script>
