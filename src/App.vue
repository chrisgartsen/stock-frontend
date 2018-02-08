<template>
  <div id="app">

    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2" class="logo">
            <h1>Stock</h1>
          </el-col>
          <el-col :span="22">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" :router="true">
          <el-menu-item index="/" :route="{name: 'home'}">Home</el-menu-item>
          <el-menu-item index="/items" :route="{name: 'items'}">Items</el-menu-item>
          <el-menu-item index="/users" :route="{name: 'users'}">Users</el-menu-item>
        </el-menu>  
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer height="100px">
        <span>Stock @2018</span>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import appHeader from '@/components/layout/app-header'
import appContent from '@/components/layout/app-content'
import appFooter from '@/components/layout/app-footer'

export default {
  name: 'App',
  components: {
    appHeader,
    appContent,
    appFooter
  }
}
</script>

