<!--
 * @Author: your name
 * @Date: 2021-03-15 15:38:11
 * @LastEditTime: 2021-03-15 15:41:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vsCodeProjects/demo/vue-study/blogs-admin/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
